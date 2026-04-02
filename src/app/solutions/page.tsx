import React from "react";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsBentoGrid } from "@/components/solutions/SolutionsBentoGrid";
import { SolutionsWhatWeSolve } from "@/components/solutions/SolutionsWhatWeSolve";
import { SolutionsSynergy } from "@/components/solutions/SolutionsSynergy";
import { SolutionsImpact } from "@/components/solutions/SolutionsImpact";
import { SolutionsCTA } from "@/components/solutions/SolutionsCTA";

export const metadata = {
    title: "Solutions | LivNSense",
    description: "Intelligent solutions for a sustainable, safe industrial future. Empowering heavy industries with AI, Edge Computing, and Digital Twins.",
};

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <SolutionsHero />
            <SolutionsWhatWeSolve />
            {/* <SolutionsBentoGrid /> */}
            <SolutionsImpact />
            {/* <SolutionsSynergy /> */}
            <SolutionsCTA />
        </main>
    );
}
