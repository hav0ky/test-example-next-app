import Link from "next/link";
import {
  Button,
  buttonVariants,
} from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconArrowRight,IconCheck } from "@tabler/icons-react";


export default function KeyFeature() {
    return <div className="flex items-center justify-around mb-16 p-10">

        <div className="">
            <div>
                  <h4 className="text-6xl mb-3 font-bold tracking-tight text-background dark:text-white">
                   Why Choose   <span className="z-10 text-primary">test</span>
                    <span className="text-blue-400">site</span>,
                    <br /> for Server Management?
                </h4>
                <p className="font-normal text-base text-neutral-300 mb-6">
                    Streamline your server operations with testSite's comprehensive solutions.<br/>
                    Experience seamless integration, proactive monitoring, and unmatched<br />
                    security to keep your systems running smoothly and securely.
                </p>
            <Link href="/contact">
              <Button
                variant="default"
                size="lg"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-full"
                )}
              >
                        Get Started
                        <IconArrowRight size={18} className="ml-1" />
                        
              </Button>
            </Link>
            </div>
        </div>
        
        <div className="flex flex-col gap-y-2">
        
            <div className="flex items-center">
                <IconCheck size={18} className="ml-1" />
                <span className="ml-2">Comprehensive Monitoring and Management</span>
            </div>
            <div className="flex items-center">
                <IconCheck size={18} className="ml-1" />
                <span className="ml-2">Real-Time Analytics</span>
            </div>
            <div className="flex items-center">
                <IconCheck size={18} className="ml-1" />
                <span className="ml-2">Scalable Solutions</span>
            </div>
            <div className="flex items-center">
                <IconCheck size={18} className="ml-1" />
                <span className="ml-2">Cost-Effective Plans</span>
            </div>
            <div className="flex items-center">
                <IconCheck size={18} className="ml-1" />
                <span className="ml-2">Expert Support</span>
            </div>
            <div className="flex items-center">
                <IconCheck size={18} className="ml-1" />
                <span className="ml-2">Advanced Security Features</span>
            </div>

                     
          </div>
    </div>
}