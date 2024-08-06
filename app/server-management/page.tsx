import MaxWidth from "@/components/max-width";
import {
  Button,
  buttonVariants,
} from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ServerMangement = () => {
  return (
    <div className="bg-server w-[100vw]">

    <MaxWidth className=" mt-6 flex flex-col">
    <div className="h-[80vh] mb-16 flex items-center rounded-xl border-gray-600 border-2 bg-background justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <div className="p-6 max-w-7xl mx-auto relative z-10  w-full pt-24 md:pt-0 ">
        <div
          className="flex justify-center flex-col"
          style={{ opacity: 1, transform: "none" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10">
            Optimizing Servers,
            <br /> Maximizing Potential.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Experience superior server management that
            drives efficiency and innovation. Maximize your
            potential with robust and reliable solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl relative z-10  w-full pt-24 md:pt-0 flex justify-center items-center ">
        <div
          className="flex justify-center flex-col "
          style={{ opacity: 1, transform: "none" }}
        >
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mb-2">
            At{" "}
            <span className="z-10 text-primary">test</span>
            <span className="text-blue-400">site</span>, we
            prioritize delivering tailored server management
            solutions designed to maximize your operational
            efficiency. Our team of experts collaborates
            with you to refine server performance, enhance
            security, and ensure seamless scalability,
            enabling you to thrive in a competitive
            landscape.
          </p>
          <div className="flex items-center justify-center">
            <Link href="/contact">
              <Button
                variant="default"
                size="sm"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-full"
                )}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>

     <div className="py-10 grid grid-cols-2 grid-flow-row gap-x-10 gap-y-28">
          <div className="px-8 mb-12 col-span-2">
                <h4 className="text-6xl font-bold mx-auto text-center tracking-tight text-background dark:text-white">
                    Elevating Your Infrastructure to New Heights
                </h4>

                <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                   Transforming server management for unmatched performance and stability
          </p>
          </div>
          {/* row-1 */}
        <div className="px-20">
          <h4 className="text-4xl tracking-tight font-medium text-background dark:text-white mb-8">
              Transforming server management for
              unmatched performance and stability.
            </h4>
             <p className="text-md mx-auto text-neutral-500 font-normal dark:text-neutral-300 ">
              Experience seamless server management with unrivaled performance and reliability.
              Optimize your server operations for peak efficiency and robust stability.
              Transform server management into a powerful asset for your business growth.
               Discover unparalleled server stability and performance, transforming your IT landscape.
          </p>
            
          </div>
          <div className="px-20">

          <img src="img/servers.avif" alt="server-management" className="border-2 rounded-2xl w-[30rem] h-[23rem]" />
          </div>

          {/* row -2 */}
          <div className="px-20">

          <img src="img/dataCenter.jpg" alt="server-management" className="border-2 rounded-2xl w-[30rem] h-[23rem] " />
          </div>
          

        <div className="px-20">
          <h4 className="text-4xl tracking-tight font-medium text-background dark:text-white mb-8">
              Providing the tools and expertise for optimal server performance.
            </h4>
             <p className="text-md mx-auto text-neutral-500 font-normal dark:text-neutral-300 ">
          
              Our cutting-edge tools and expert insights empower organizations to streamline their server operations,
              ensuring unmatched speed and reliability.
              By leveraging our solutions, businesses can minimize downtime,
              enhance security, and scale effortlessly to meet growing demands.
              Our team of seasoned professionals is dedicated to guiding you through every step of the optimization process,
              helping you unlock the full potential of your IT infrastructure.
              Trust us to transform your server management strategy and drive your business forward with confidence
          </p>
            
        </div>
            
       
          

        </div>
      </MaxWidth>
    </div>
      
  );
};

export default ServerMangement;
