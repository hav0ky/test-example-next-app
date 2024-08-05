import MaxWidth from "@/components/max-width"
import { Button } from "@/components/ui/button"

const ContactUs = () => {
    return (
        <MaxWidth>
            <div className="mx-auto w-full max-w-md md:pt-10 pb-20">
                <div>
                    <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">Contact Us</h1>
                    <p className="mt-4 text-foreground text-sm max-w-sm">
                        Please reach out to us and we will get back to you at the speed of light.
                    </p>
                </div>
                <div className="py-10">
                    <div>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">
                                    Full Name
                                </label>
                                <div className="mt-2" aria-describedby="name-description" aria-invalid="false">
                                    <input
                                        id="name"
                                        placeholder="John Doe"
                                        className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                                        type="text"
                                        name="name"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
                                    Email address
                                </label>
                                <div className="mt-2" aria-describedby="email-description" aria-invalid="false">
                                    <input
                                        id="email"
                                        placeholder="hello@johndoe.com"
                                        className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="block text-sm font-medium leading-6 text-foreground">
                                    Company
                                </label>
                                <div className="mt-2" aria-describedby="company-description" aria-invalid="false">
                                    <input
                                        id="company"
                                        placeholder="TestSite, Pvt. Ltd"
                                        className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                                        type="text"
                                        name="company"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">
                                    Message
                                </label>
                                <div className="mt-2" aria-describedby="message-description" aria-invalid="false">
                                    <textarea
                                        rows={5}
                                        id="message"
                                        placeholder="Enter your message here"
                                        className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                                        name="message"
                                    />
                                </div>
                            </div>
                            <div>
                                <Button className="w-full" size="sm" disabled>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-4 py-4">
                    <a href="https://twitter.com/testsite" className="tabler-icon tabler-icon-brand-x h-5 w-5 text-muted-foreground hover:text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                        </svg>
                    </a>
                    {/* <a href="https://github.com/manuarora700" className="tabler-icon tabler-icon-brand-github h-5 w-5 text-muted-foreground hover:text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                        </svg>
                    </a> */}
                    <a href="https://linkedin.com/testsite" className="tabler-icon tabler-icon-brand-linkedin h-5 w-5 text-muted-foreground hover:text-foreground">
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
        </MaxWidth>
    )
}

export default ContactUs