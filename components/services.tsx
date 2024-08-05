"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { nav_items } from "@/config/navbar"
import { Separator } from "./ui/separator"
import { useEffect, useState } from "react"
import { ListItem } from "./navbar"
import Image from "next/image"
import { cn } from "@/lib/utils"
import axios from "axios"

const SubMenus = ({ index }: { index: number }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {nav_items[index].submenus.map((item, i) => (
                <div
                    key={i}
                    className="flex-grow min-w-[200px] max-w-xs group/card"
                >
                    <div
                        className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl w-full bg-cover flex flex-col justify-between p-4"
                        style={{ backgroundImage: `url(/img/${item.href})` }}
                    >
                        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60 bg-black/90"></div>
                        <div />
                        <div className="text content">
                            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                                {item.label}
                            </h1>
                            <p className="font-normal text-sm text-gray-300 relative z-10 mb-4 mt-2">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ServicesSection = () => {
    const [selected, SetSelected] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            SetSelected(prev => (prev + 1) % nav_items.length);
        }, 20000); // Change the interval time as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center lg:items-start md:flex-row space-x-4 text-sm p-4">
            <div className="hidden lg:block">
                <ul className="flex flex-col items-start space-y-1">
                    <li>
                        {nav_items.map(
                            ({ href, label, icon: Icon, submenus }, index) =>
                                <div className="w-full" key={index}>
                                    <Button
                                        variant={selected == index ? "secondary" : "ghost"}
                                        className="w-full justify-start mb-1"
                                        onClick={() => SetSelected(index)}
                                    >
                                        <span className="mr-2">
                                            <Icon size={18} />
                                        </span>
                                        <p className="max-w-[200px] truncate">
                                            {label}
                                        </p>
                                    </Button>
                                </div>
                        )}
                    </li>
                </ul>
            </div>
            <Separator orientation="vertical" />
            <div className="flex gap-6 flex-wrap">
                <SubMenus index={selected} />
            </div>
        </div>
    )
}

export default ServicesSection