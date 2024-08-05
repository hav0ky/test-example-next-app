import React from "react";
import { Vortex } from "./ui/vortex";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ReadyCard() {
    return (
        <div className="w-full mx-auto rounded-2xl h-[20rem] overflow-hidden border my-20">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
                    Overcome Business Challenges with Our Expert Assistance
                </h2>
                <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
                    Tell us about the challenges of your business, and we&apos;ll help you grow in any country in the world.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    {/* <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                        Order now
                    </button> */}
                    <Link href="/contact" className={cn(buttonVariants({ variant: "default" }), 'rounded-full')}>
                        Talk to an expert
                    </Link>
                    <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), 'rounded-full hidden lg:block')}>
                        Contact Us
                    </Link>
                </div>
            </Vortex>
        </div>
    );
}
