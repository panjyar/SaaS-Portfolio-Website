"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SolutionsHero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center">
      <div className="absolute inset-0 z-10 size-full">
        <div className="grid w-full grid-cols-12 divide-x divide-white/20">
          <div className="col-span-1 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-4 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-1 h-screen" />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-20 max-w-5xl px-6 text-center text-white mt-20">
        <h1 className="text-center font-normal text-5xl text-white tracking-tight md:text-6xl lg:text-8xl">
          Intelligent Solutions for Modern Travel
        </h1>

        <p className="mx-auto mt-8 mb-8 max-w-2xl text-center font-light text-lg text-white/90 md:text-xl">
          Empowering travel agencies, corporate planners, and independent explorers to build perfectly optimized itineraries in seconds.
        </p>

        <Button className="group not-disabled:inset-shadow-none mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent">
          <span className="rounded-full bg-[#FE9A00] px-6 py-3 text-white duration-500 ease-in-out group-hover:bg-[#E68A00] group-hover:text-white group-hover:transition-colors">
            Start a Project
          </span>
          <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#FE9A00] p-5 text-white duration-500 ease-in-out group-hover:bg-[#E68A00] group-hover:text-white group-hover:transition-colors">
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
          </div>
        </Button>
      </div>
    </section>
  );
}
