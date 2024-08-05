"use client"
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import MaxWidth from "./max-width";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Icons } from "./ui/icons";
import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import MobileNav from "./mobile-nav";
// border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // <header className="sticky z-50 w-full border-b border-border/40 bg-red-200">
        //     <MaxWidth className="flex h-14 items-center justify-between">
        //         {/* <div className="container max-w-screen-2xl flex h-14 items-center justify-between"> */}

        //         <div className="flex items-center">
        //             <Link href="/" className="flex-shrink-0 flex items-center text-xl tracking-wider select-none font-semibold">
        //                 <span className="text-primary z-10">ahura</span>
        //                 <span className="text-blue-400">sense</span>
        //             </Link>
        //             {/* <nav className="ml-4 hidden md:flex items-center gap-6 text-sm">
        //                 <Link
        //                 target="_blank"
        //                 href="https://ranks.cs2hvh.com"
        //                 className="text-muted-foreground transition-colors hover:text-foreground flex gap-1"
        //                 >
        //                 Ranks
        //                 <ExternalLink className="w-4 h-4" />
        //                 </Link>
        //                 <Link
        //                 target="_blank"
        //                 href="https://shop.cs2hvh.com"
        //                 className="text-muted-foreground transition-colors hover:text-foreground flex gap-1"
        //                 >
        //                 Shop
        //                 <ExternalLink className="w-4 h-4" />
        //                 </Link>
        //                 <Link
        //                 target="_blank"
        //                 href="https://discord.com/invite/DQxaCgyQVe"
        //                 className="text-muted-foreground transition-colors hover:text-foreground flex gap-1"
        //                 >
        //                 Discord
        //                 <ExternalLink className="w-4 h-4" />
        //                 </Link>
        //                 </nav> */}
        //         </div>
        //         {/* <MobileNav />
        //         <div className="">
        //         <RequestForm />
        //         </div> */}
        //         {/* </div> */}
        //     </MaxWidth>
        // </header>

        <header
            className="sticky top-0 z-50 w-full py-2 border-b border-border/40 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <MaxWidth className="flex items-center justify-center pl-6 pr-3 md:justify-between">
                <div className="mr-3 block sm:hidden">
                    <MobileNav />
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/" className="z-10 flex items-center flex-shrink-0 text-2xl font-semibold tracking-wider select-none py-2">
                        <span className="z-10 text-primary">test</span>
                        <span className="text-blue-400">site</span>
                    </Link>
                    <Navbar />
                    {/* <ThemeToggle /> */}
                </div>
                <div className="hidden gap-2 justify-center md:flex">
                    {/* <Link href='' target="_blank" rel="noreferrer">
                        <div
                            className={cn(
                                buttonVariants({ variant: 'outline' }),
                                'w-9 h-9 p-0'
                            )}
                        >
                            <Icons.discord className="h-[18px] w-[18px]" />
                            <span className="sr-only">Discord</span>
                        </div>
                    </Link> */}
                    <Link href="/contact">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            {/* <AceternityLogo /> */}
                            <span>Contact Us</span>
                        </HoverBorderGradient>
                    </Link>
                </div>
            </MaxWidth>
        </header>
    )
}