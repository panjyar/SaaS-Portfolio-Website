"use client";

import { useParams } from "next/navigation";
import { events } from "@/utils/events-data";
import Link from "next/link";

export default function EventDetails() {
  const { id } = useParams();

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return <div className="text-white p-6">Event not found</div>;
  }

  return (
    <div style={{ padding: "4%" }}>
      <div className="flex flex-col lg:flex-row text-white mt-12 gap-8">
        <div className="lg:w-3/5 space-y-4">
          <h1 className="text-5xl font-bold">{event.title}</h1>

          <div className="gap-4 text-lg font-semibold pt-4 pb-4">
            <span className="text-[#00A755] rounded">{event.date}</span> <br />
            <span className="text-[#00A755] rounded">{event.location}</span>
          </div>

          <p className="text-[14px] leading-relaxed">{event.description}</p>
          <h3 className="text-[20px] font-bold leading-relaxed">{event.pointstitle}</h3>
          <p className="text-[14px] leading-relaxed">{event.points}</p>
          <p className="text-[14px] leading-relaxed">{event.description2}</p>
        </div>

        <div className="lg:w-2/5 w-full h-80 lg:h-auto">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="pt-6 border-t border-[#00A755] mt-8">
        <Link
          href="/resources/events/all_events"
          className="text-[#00A755] hover:underline text-[20px] font-semibold"
        >
          ← Back to Events
        </Link>
      </div>
    </div>
  );
}
