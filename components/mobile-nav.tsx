"use client"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { nav_items } from "@/config/navbar"
import { CollapseMenuButton } from "./ui/collapsible-menu-button"
import { IconMenu2 } from "@tabler/icons-react"

const MobileNav = () => {
    const [open, SetOpen] = useState(false)

    return (
        <Drawer open={open} onOpenChange={SetOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline" className="w-9 h-9 p-0">
                    <IconMenu2 size={18} />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="flex justify-center">
                        <Link href="/" className="z-10 flex items-center flex-shrink-0 text-2xl font-semibold tracking-wider select-none py-2">
                            <span className="z-10 text-primary">test</span>
                            <span className="text-blue-400">site</span>
                        </Link>
                    </DrawerTitle>
                </DrawerHeader>
                <nav className="flex flex-col items-center gap-2 w-full pb-4 max-h-[70vh] overflow-y-scroll">
                    {nav_items.map((e) => (
                        e.submenus.map((sub) => (
                            <Link
                                key={sub.href}
                                href={"#"}
                                onClick={() => SetOpen(false)}
                                className={cn('transition-colors w-full flex gap-1 items-center py-2 pl-3 text-muted-foreground hover:text-foreground hover:border-l-2 hover:border-blue-400')}
                            >
                                {sub.label}
                            </Link>
                        ))
                    ))}
                </nav>
                {/* <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter> */}
            </DrawerContent>
        </Drawer>

    )
}

export default MobileNav