import { Button } from "@/components/ui/neon-button";

const Default = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Button>Button</Button>
        <WithNoNeon />
        <Solid />
      </div>
    </>
  );
};

const WithNoNeon = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Button neon={false}>normal button</Button>
      </div>
    </>
  );
};

const Solid = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Button variant={"solid"}>solid</Button>
      </div>
    </>
  );
};

export { Default, WithNoNeon, Solid };

export default function VicasExists() {
  return (
    <div
      className="relative overflow-hidden pt-10 pb-10 flex flex-col items-center"
    >
      <div className="relative z-10 mt-16 text-center md:mt-32 vicas-container">
        <div className="inline-block bg-gradient-to-r from-[#00B050] to-[#046839] bg-clip-text text-transparent font-semibold">
          WHY VICAS EXISTS
        </div>

        <p
          className="mt-6  md:text-3xl md:leading-relaxed text-left font-thin"
          style={{ color: "var(--vicas-text-primary)"  }}
        >
          Industrial environments are becoming increasingly complex, while
          safety and operational decisions continue to depend on limited
          visibility and reactive processes. As operations scale, identifying
          risks in real time becomes critical to maintaining safety, compliance,
          and operational continuity.
        </p>
      </div>
    </div>
  );
}
