import { cn } from "@/lib/utils";

import {
    IconServer,
    IconNetwork,
    IconDatabase,
    IconUsers,
    IconRestore,
    IconCloud,
    IconTopologyStar,
    IconBrandPocket,
    IconApiApp,
    IconCpu2,
    IconDeviceDesktopAnalytics,
    IconDatabaseShare,
    IconShieldCheck,
    IconCloudComputing,
    IconListCheck,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    // const features = [
    //     {
    //         title: "Built for developers",
    //         description:
    //             "Built for engineers, developers, dreamers, thinkers and doers.",
    //         icon: <IconTerminal2 />,
    //     },
    //     {
    //         title: "Ease of use",
    //         description:
    //             "It's as easy as using an Apple, and as expensive as buying one.",
    //         icon: <IconEaseInOut />,
    //     },
    //     {
    //         title: "Pricing like no other",
    //         description:
    //             "Our prices are best in the market. No cap, no lock, no credit card required.",
    //         icon: <IconCurrencyDollar />,
    //     },
    //     {
    //         title: "100% Uptime guarantee",
    //         description: "We just cannot be taken down by anyone.",
    //         icon: <IconCloud />,
    //     },
    //     {
    //         title: "Multi-tenant Architecture",
    //         description: "You can simply share passwords instead of buying new seats",
    //         icon: <IconRouteAltLeft />,
    //     },
    //     {
    //         title: "24/7 Customer Support",
    //         description:
    //             "We are available a 100% of the time. Atleast our AI Agents are.",
    //         icon: <IconHelp />,
    //     },
    //     {
    //         title: "Money back guarantee",
    //         description:
    //             "If you donot like EveryAI, we will convince you to like us.",
    //         icon: <IconAdjustmentsBolt />,
    //     },
    //     {
    //         title: "And everything else",
    //         description: "I just ran out of copy ideas. Accept my sincere apologies",
    //         icon: <IconHeart />,
    //     },
    // ];
    const features = [
        {
            title: "Optimal Server Performance",
            description: "Maintain peak server performance with regular updates and health checks.",
            icon: <IconServer />,
        },
        {
            title: "Scalable Cluster Solutions",
            description: "Enhance performance and fault tolerance with expert cluster management.",
            icon: <IconTopologyStar />,
        },
        {
            title: "Reliable Network Infrastructure",
            description: "Ensure efficient and secure network communication with advanced configurations.",
            icon: <IconNetwork />,
        },
        {
            title: "Efficient Storage Solutions",
            description: "Manage storage capacity and performance to support your growing data needs.",
            icon: <IconBrandPocket />,
        },
        {
            title: "Seamless Database Operations",
            description: "Oversee database design and maintenance for smooth IT operations.",
            icon: <IconDatabase />,
        },
        {
            title: "Robust Server Security",
            description: "Implement strong security measures to protect servers from threats.",
            icon: <IconShieldCheck />,
        },
        {
            title: "Comprehensive Corporate Security",
            description: "Protect organizational data with extensive security policies and audits.",
            icon: <IconShieldCheck />,
        },
        {
            title: "Proactive Risk Management",
            description: "Identify and mitigate risks to ensure data protection and continuity.",
            icon: <IconShieldCheck />,
        },
        {
            title: "Fraud Detection & Prevention",
            description: "Monitor and prevent fraudulent activities with advanced detection mechanisms.",
            icon: <IconShieldCheck />,
        },
        {
            title: "Controlled User Access",
            description: "Manage user permissions with role-based access control.",
            icon: <IconUsers />,
        },
        {
            title: "Custom SaaS Solutions",
            description: "Deploy and integrate cloud-based software to meet business needs.",
            icon: <IconApiApp />,
        },
        {
            title: "Tailored IT Services",
            description: "Develop custom IT solutions to address unique business requirements.",
            icon: <IconCloudComputing />,
        },
        {
            title: "Optimized Performance Tuning",
            description: "Enhance IT system performance through targeted tuning and adjustments.",
            icon: <IconCpu2 />,
        },
        {
            title: "Ongoing Monitoring & Optimization",
            description: "Continuously monitor and optimize systems for peak performance.",
            icon: <IconDeviceDesktopAnalytics />,
        },
        {
            title: "Reliable Data Backup",
            description: "Safeguard your data with robust backup strategies and recovery plans.",
            icon: <IconRestore />,
        },
        {
            title: "Disaster Recovery Plans",
            description: "Prepare for data loss with comprehensive disaster recovery strategies.",
            icon: <IconListCheck />,
        },
        {
            title: "Seamless Data Migration",
            description: "Transfer data smoothly between systems with minimal downtime.",
            icon: <IconDatabaseShare />,
        },
        {
            title: "Domain Name Management",
            description: "Handle domain registrations and DNS settings efficiently.",
            icon: <IconCloud />,
        },
    ];

    // max-w-7xl mx-auto
    return (
        <div>
            <div className="py-4 md:py-12 max-w-7xl relative z-10 w-full">
                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-20">
                    Test<span className="text-blue-400">Site</span> is the foundation for your global infrastructure, applications and business
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300">
                    Protect your website, application, and server against complex DDoS attacks.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
