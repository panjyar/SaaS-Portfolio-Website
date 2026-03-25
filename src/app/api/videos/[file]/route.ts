import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Main GET handler for streaming video
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;
  const safeFile = path.basename(file);
  const videoPath = path.join(process.cwd(), "public", "videos", safeFile);

  if (!fs.existsSync(videoPath)) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.get("range");

  // Helper: Node.js ReadStream ➔ Web ReadableStream
  const nodeStreamToWebStream = (stream: fs.ReadStream): ReadableStream<Uint8Array> => {
    return new ReadableStream({
      start(controller) {
        stream.on("data", (chunk) => {
          // Convert Buffer or string to Uint8Array
          if (Buffer.isBuffer(chunk)) {
            controller.enqueue(new Uint8Array(chunk));
          } else {
            controller.enqueue(new TextEncoder().encode(chunk.toString()));
          }
        });
        stream.on("end", () => controller.close());
        stream.on("error", (err) => controller.error(err));
      },
      cancel() {
        stream.destroy();
      },
    });
  };

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;
    const stream = fs.createReadStream(videoPath, { start, end });
    const webStream = nodeStreamToWebStream(stream);

    return new NextResponse(webStream, {
      status: 206,
      headers: {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize.toString(),
        "Content-Type": "video/mp4",
      },
    });
  } else {
    const stream = fs.createReadStream(videoPath);
    const webStream = nodeStreamToWebStream(stream);

    return new NextResponse(webStream, {
      status: 200,
      headers: {
        "Content-Length": fileSize.toString(),
        "Content-Type": "video/mp4",
      },
    });
  }
}

// Optional: Export a POST to avoid empty module error if needed elsewhere
export async function POST() {
  return NextResponse.json({ message: "POST method not supported" }, { status: 405 });
}

