"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { nav_items } from "@/config/navbar"
import { Separator } from "./ui/separator"
import { useState } from "react"
import { ListItem } from "./navbar"

const SubMenus = ({ index }: { index: number }) => {
    return (
        nav_items[index].submenus.map(
            item =>
                <ListItem
                    key={item.href}
                    title={item.label}
                    href={item.href}
                >
                    {item.description}
                </ListItem>
        )
    )
}

const NavItems = () => {
    const [selected, SetSelected] = useState<number>(0)

    return (
        <div className="flex space-x-4 text-sm p-4">
            <div>
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
                                        <span
                                            className="mr-2 text-blue-400"
                                        >
                                            <Icon size={18} />
                                        </span>
                                        <p
                                            className={
                                                "max-w-[200px] truncate"
                                            }
                                        >
                                            {label}
                                        </p>
                                    </Button>
                                </div>
                        )}
                    </li>
                </ul>
            </div>
            <Separator orientation="vertical" />
            <div>
                <ul className="w-[400px] gap-3 md:w-[500px] lg:w-[600px] ">
                    <SubMenus index={selected} />
                </ul>
            </div>
        </div>
    )
}

export default NavItems