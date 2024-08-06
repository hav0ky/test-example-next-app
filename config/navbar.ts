import { IconApiApp, IconCloud, IconHome, IconLayout, IconRotate, IconShield, IconUser } from "@tabler/icons-react";

export type Submenu = {
    href: string;
    label: string;
    description: string;
    image?: string
};

type Menu = {
    href: string;
    label: string;
    icon: any;
    submenus: Submenu[];
};

export const nav_items: Menu[] = [
    {
        href: "/infrastructure",
        label: "Infrastructure",
        icon: IconLayout,
        submenus: [
            {
                href: "server-management",
                label: "Server Management",
                description: "Ensuring optimal performance and uptime of all company servers through regular maintenance, updates, and system health checks. Proactive monitoring and troubleshooting to mitigate potential server issues and prevent downtime."
            },
            {
                href: "cluster-management.jpg",
                label: "Cluster Management",
                description: "Administering and maintaining server clusters to enhance performance, scalability, and fault tolerance. Ensuring high availability and load balancing across clustered environments to support business operations."
            },
            {
                href: "networking.jpg",
                label: "Networking",
                description: "Configuring and maintaining network infrastructure to ensure reliable and efficient communication between systems, servers, and networked devices. Implementing advanced network security protocols and performance optimization strategies."
            },
            {
                href: "storage.jpg",
                label: "Storage Management",
                description: "Overseeing the storage infrastructure to ensure optimal capacity, performance, and reliability for all business data. Managing storage provisioning, monitoring, and maintenance to support growing data needs."
            },
            {
                href: "database.jpg",
                label: "Database Management",
                description: "Overseeing the design, implementation, and maintenance of the entire IT infrastructure. Ensuring that all hardware, software, and network components work together seamlessly to support business objectives."
            },
        ]
    },
    {
        href: "/security",
        label: "Security",
        icon: IconShield,
        submenus: [
            {
                href: "/server-security",
                label: "Server Security",
                description: "Implementing robust security measures to safeguard servers against unauthorized access, cyber threats, and vulnerabilities. Conducting regular security audits, updates, and compliance checks to maintain a secure environment."
            },
            {
                href: "/corporate-security",
                label: "Corporate Security",
                description: "Implementing and managing comprehensive security policies to protect organizational data and IT assets. Ensuring compliance with industry standards and regulatory requirements to safeguard against threats."
            },
            {
                href: "/risk-analysis",
                label: "Risk Analysis",
                description: "Conducting thorough assessments to identify potential risks and vulnerabilities within the IT infrastructure. Developing and implementing risk mitigation strategies to ensure data protection and business continuity."
            },
            {
                href: "/fraud-prevention",
                label: "Fraud Prevention",
                description: "Establishing mechanisms to detect and prevent fraudulent activities within the IT environment. Monitoring transactions and user activities for anomalies and implementing preventive measures."
            },
            {
                href: "/user-access-control",
                label: "User Access Control",
                description: "Implementing and managing role-based access controls to regulate user permissions across the IT infrastructure. Ensuring that only authorized personnel can access and modify sensitive data and systems."
            },
        ]
    },
    {
        href: "/software-solutions",
        label: "Software Solutions",
        icon: IconApiApp,
        submenus: [
            {
                href: "saas.jpg",
                label: "SaaS (Software as a Service)",
                description: "Managing the deployment and integration of cloud-based software services. Ensuring seamless operation, scalability, and integration of SaaS applications to meet organizational requirements and enhance productivity."
            },
            {
                href: "/custom-services",
                label: "Custom Services",
                description: "Developing and maintaining tailored IT solutions to meet specific business needs. Providing specialized functionalities that extend beyond standard offerings, enhancing operational efficiency and innovation."
            },
            {
                href: "/performance-tuning",
                label: "Performance Tuning",
                description: "Optimizing overall IT performance through resource allocation, system configurations, and network optimizations. Ensuring efficient operation and handling of high transaction loads and user demands."
            },
            {
                href: "/monitoring-and-optimization",
                label: "Monitoring and Optimization",
                description: "Continuously monitoring IT systems for performance, security, and operational efficiency. Implementing proactive measures and optimizations to enhance overall system functionality and support business growth."
            },
        ]
    },
    {
        href: "/consultancy-and-support",
        label: "Consultancy and Support",
        icon: IconUser,
        submenus: [
            {
                href: "/consultancy",
                label: "Consultancy",
                description: "Providing expert advice and strategic guidance on IT infrastructure, performance optimization, and best practices. Assisting organizations in planning, implementing, and scaling their IT environments for future growth."
            },
            {
                href: "/compliance-and-auditing",
                label: "Compliance and Auditing",
                description: "Ensuring that IT systems adhere to relevant regulatory standards and compliance requirements. Conducting regular audits to verify compliance and address any discrepancies in policies and procedures."
            },
        ]
    },
    {
        href: "/backup-and-recovery",
        label: "Backup and Recovery",
        icon: IconRotate,
        submenus: [
            {
                href: "/backup-and-recovery",
                label: "Backup and Recovery",
                description: "Designing and executing robust data backup strategies to ensure data availability and integrity. Implementing reliable recovery procedures to restore data and systems in case of loss or corruption."
            },
            {
                href: "/disaster-recovery-planning",
                label: "Disaster Recovery Planning",
                description: "Developing comprehensive disaster recovery plans to ensure data resiliency and business continuity. Implementing and testing recovery procedures to minimize downtime and data loss in the event of a disaster."
            },
            {
                href: "/data-migration",
                label: "Data Migration",
                description: "Managing the seamless transfer of data between different systems or environments. Ensuring data integrity, minimal downtime, and successful migration outcomes to support business transitions."
            },
        ]
    },
    {
        href: "/domain-services",
        label: "Domain Services",
        icon: IconCloud,
        submenus: [
            {
                href: "/domain-management",
                label: "Domain Management",
                description: "Managing domain names and DNS configurations to ensure proper routing and accessibility of company services. Handling domain registration, renewal, and associated services to maintain online presence."
            },
        ]
    },
];
