import MaxWidth from "@/components/max-width"
import BlurBackground from "@/components/ui/blur"

const AboutUs = () => {
    return (
        <MaxWidth className="min-h-[50rem]">
            <BlurBackground>
                <div className="py-4 md:py-4 max-w-7xl relative z-10 w-full space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 bg-opacity-50 pt-6">
                        About Us
                    </h1>
                    <p className="font-normal text-base text-neutral-300">
                        Welcome to <span className="text-neutral-100 font-bold">TestSite</span>, where we redefine excellence in IT services and solutions. Our mission is to empower businesses with cutting-edge technology, unparalleled security, and top-notch support. With a focus on innovation and reliability, we offer a comprehensive range of services tailored to meet the unique needs of our clients.
                    </p>
                    <p className="font-normal text-base text-neutral-300">
                        At <span className="text-neutral-100 font-bold">TestSite</span>, we believe in:
                    </p>
                    <ul className="font-normal text-base text-neutral-300 list-disc pl-4 space-y-1">
                        <li>
                            <span className="text-neutral-100 font-bold">Cutting-Edge Solutions:</span> Leveraging the latest technology to deliver effective and scalable solutions.
                        </li>
                        <li>
                            <span className="text-neutral-100 font-bold">Unmatched Security:</span> Providing robust security measures to safeguard your data and infrastructure.
                        </li>
                        <li>
                            <span className="text-neutral-100 font-bold">Expertise and Innovation:</span> Harnessing our team&apos;s expertise to drive innovation and optimize your IT environment.
                        </li>
                        <li>
                            <span className="text-neutral-100 font-bold">Client-Centric Approach:</span> Committing to exceptional service and support tailored to your specific requirements.
                        </li>
                    </ul>
                    <p className="font-normal text-base text-neutral-300">
                        From server management and network optimization to advanced security protocols and bespoke IT consultancy, we&apos;re dedicated to helping you achieve your goals and stay ahead in a rapidly evolving digital landscape.
                    </p>
                    <p className="font-normal text-base text-neutral-300">
                        Discover how TestSite can elevate your business operations and drive your success. Let&apos;s build the future together.
                    </p>
                    <div className="z-10 flex items-center flex-shrink-0 text-4xl font-semibold tracking-wider select-none py-2">
                        <span className="z-10 text-primary">test</span>
                        <span className="text-blue-400">site</span>
                    </div>
                </div>
            </BlurBackground>
        </MaxWidth>
    )
}

export default AboutUs