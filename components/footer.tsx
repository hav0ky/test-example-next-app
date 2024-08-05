import Link from "next/link";

const SiteFooter = () => {
    return (
        <div className="relative">
            <div className="border-t border-neutral-100 dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-background">
                <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row justify-between">

                    {/* Left Column - Logo, Copyright, Links */}
                    <div className="flex flex-col space-y-4">
                        <div>
                            <Link href="/" className="z-10 flex items-center text-2xl font-semibold tracking-wider select-none">
                                <span className="z-10 text-primary">test</span>
                                <span className="text-blue-400">site</span>
                            </Link>
                        </div>
                        <div>Copyright © {new Date().getFullYear()} TestSite</div>
                        <div>All rights reserved</div>
                        <div className="flex flex-col space-y-2">
                            <Link href="/terms" className="transition-colors hover:text-foreground text-muted-foreground text-xs sm:text-sm hover:underline">
                                Terms & Conditions
                            </Link>
                            <Link href="/privacy" className="transition-colors hover:text-foreground text-muted-foreground text-xs sm:text-sm hover:underline">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    {/* Middle Column - Address */}
                    <div className="flex flex-col space-y-2 mt-16 sm:mt-0">
                        <h2 className="font-bold">Address:</h2>
                        <p>TestSite Technologies,</p>
                        <p>India</p>
                    </div>

                    {/* Right Column - Contact Support & Social Icons */}
                    <div className="flex flex-col space-y-4 mt-8 sm:mt-0">
                        <div>
                            <p>For any support contact:</p>
                            <a className="text-xs sm:text-sm hover:underline font-bold" href="mailto:support@TestSite.com">
                                support@TestSite.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-4 py-4">
                            <a href="https://twitter.com/TestSite" className="tabler-icon tabler-icon-brand-x h-5 w-5 text-muted-foreground hover:text-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/TestSite" className="tabler-icon tabler-icon-brand-linkedin h-5 w-5 text-muted-foreground hover:text-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                    <path d="M8 11l0 5"></path>
                                    <path d="M8 8l0 .01"></path>
                                    <path d="M12 16l0 -5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SiteFooter;
