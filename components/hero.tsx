import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { Button, buttonVariants } from "./ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export function SiteHero() {
    return (
        <div className="h-[80vh] w-full rounded-md flex md:items-center md:justify-center bg-background antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 max-w-7xl mx-auto relative z-10  w-full pt-24 md:pt-0">
                <div className="flex justify-center" style={{ opacity: 1, transform: 'none' }}>
                    <button className="bg-neutral-50 dark:bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-px text-[10px] sm:text-xs font-semibold leading-6 text-neutral-700 dark:text-neutral-300 inline-block w-fit mx-auto">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-100 dark:bg-neutral-800 py-1.5 px-4 ring-1 ring-white/10">
                            <span>Control, scale and perform. Everywhere you need it.</span>
                            <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                            </svg>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                    </button>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10">
                    Empowering Your Digital Future <br /> with Comprehensive IT Solutions
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Delivering tailored IT services that optimize, secure, and support your business for seamless performance and sustained growth.
                </p>
                <div className="flex justify-center py-6 gap-4">
                    <Link href="/contact" className={cn(buttonVariants({ variant: "default" }), 'rounded-full')}>
                        Get Started
                        <IconArrowRight size={18} className="ml-1" />
                    </Link>
                    <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), 'rounded-full')}>
                        Contact Us
                        {/* <IconArrowRight size={18} className="ml-1" /> */}
                    </Link>
                </div>
            </div>
        </div>
    );
}
