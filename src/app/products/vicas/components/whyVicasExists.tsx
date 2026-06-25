import { Button } from "@/components/ui/neon-button"

const Default = () => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <Button>Button</Button>
                <WithNoNeon />
                <Solid />
            </div>
        </>
    )
}

const WithNoNeon = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <Button neon={false}>normal button</Button>
            </div>
        </>
    )
}

const Solid = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <Button variant={"solid"}>solid</Button>
            </div>
        </>
    )
}

export { Default, WithNoNeon, Solid }

// export default function Component() {
//   return (
//     <div className="fixed inset-0 -z-10 bg-slate-950">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(139,92,246,0.35),transparent)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_90%,rgba(34,197,94,0.2),transparent)]" />
//     </div>
//   );
// }

export default function VicasExits() {
  return (
    <div className="relative overflow-hidden bg-black pt-10 pb-20 flex flex-col items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        {/* Purple glow at the top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(139,92,246,0.35),transparent)]" />

        {/* Green glow at the bottom */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_90%,rgba(34,197,94,0.2),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-5xl px-6 text-center md:mt-32">
        <Button
          size="xs"
          className="px-8 py-4 uppercase tracking-[0.3em]"
        >
          WHY VICAS EXISTS
        </Button>


        <p className="mx-auto mt-6 max-w-4xl text-xl text-white md:text-3xl md:leading-relaxed">
          Industrial environments are becoming increasingly complex, while
          safety and operational decisions continue to depend on limited
          visibility and reactive processes. As operations scale, identifying
          risks in real time becomes critical to maintaining safety,
          compliance, and operational continuity.
        </p>
      </div>
    </div>
  );
}
