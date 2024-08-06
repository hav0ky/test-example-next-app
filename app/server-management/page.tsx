import {
  Button,
  buttonVariants,
} from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Harsh = () => {
  return (
    <div className="h-[80vh] w-[90vw] px-2 gap-x-0 border-slate-300 border-2  mt-4 rounded-lg flex items-center justify-center bg-background antialiased bg-grid-white/[0.02] relative overflow-hidden ">
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
  );
};

export default Harsh;
