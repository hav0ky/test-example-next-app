"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function SiteTestimonials() {
    return (
        <div className="py-20">
            <div className="max-w-7xl relative z-10 w-full">
                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-20">
                    Test<span className="text-blue-400">Site</span> is the foundation for your global infrastructure, applications and business
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300">
                    Protect your website, application, and server against complex DDoS attacks.
                </p>
            </div>
            <div className="rounded-md flex flex-col antialiased bg-background bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
