import MaxWidth from "@/components/max-width"
import BlurBackground from "@/components/ui/blur"

const PrivacyPolicy = () => {
    return (
        <MaxWidth className="min-h-[50rem]">
            <BlurBackground>
                <div className="py-4 md:py-4 max-w-7xl relative z-10 w-full space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 bg-opacity-50 pt-6">
                        Privacy Policy
                    </h1>
                    {/* <p className="font-normal text-base text-neutral-300">
                        Effective Date: [Date]
                    </p> */}
                    <p className="font-normal text-base text-neutral-300">
                        Welcome to <span className="text-neutral-100 font-bold">TestSite</span> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.
                    </p>
                    <h2 className="text-xl font-semibold text-neutral-200">1. Information We Collect</h2>
                    <p className="font-normal text-base text-neutral-300">
                        We collect the following types of information:
                    </p>
                    <ul className="font-normal text-base text-neutral-300 list-disc pl-4 space-y-1">
                        <li>
                            <span className="text-neutral-100 font-bold">Personal Information:</span> Details like your name, email, phone number, and billing info.
                        </li>
                        <li>
                            <span className="text-neutral-100 font-bold">Technical Data:</span> Device info, IP address, browser type, and access times.
                        </li>
                        <li>
                            <span className="text-neutral-100 font-bold">Usage Data:</span> Details about your visits, pages viewed, and interactions with our services.
                        </li>
                    </ul>
                    <h2 className="text-xl font-semibold text-neutral-200">2. How We Use Your Information</h2>
                    <p className="font-normal text-base text-neutral-300">
                        We use your information to:
                    </p>
                    <ul className="font-normal text-base text-neutral-300 list-disc pl-4 space-y-1">
                        <li>Provide and maintain our services.</li>
                        <li>Notify you of changes.</li>
                        <li>Enable interactive features.</li>
                        <li>Offer customer support.</li>
                        <li>Analyze and improve our services.</li>
                        <li>Monitor usage and address issues.</li>
                    </ul>
                    <h2 className="text-xl font-semibold text-neutral-200">3. Sharing Your Information</h2>
                    <p className="font-normal text-base text-neutral-300">
                        We may share your information with:
                    </p>
                    <ul className="font-normal text-base text-neutral-300 list-disc pl-4 space-y-1">
                        <li>
                            <span className="text-neutral-100 font-bold">Service Providers:</span> Third parties that help us provide and analyze our services, bound by confidentiality obligations.
                        </li>
                        <li>
                            <span className="text-neutral-100 font-bold">Legal Requirements:</span> If required by law or in response to lawful requests.
                        </li>
                    </ul>
                    <h2 className="text-xl font-semibold text-neutral-200">4. Security of Your Information</h2>
                    <p className="font-normal text-base text-neutral-300">
                        We use reasonable measures to protect your information, but cannot guarantee absolute security due to the inherent risks of online transmission.
                    </p>
                    <h2 className="text-xl font-semibold text-neutral-200">5. Your Data Protection Rights</h2>
                    <p className="font-normal text-base text-neutral-300">
                        Depending on your location, you may have rights including:
                    </p>
                    <ul className="font-normal text-base text-neutral-300 list-disc pl-4 space-y-1">
                        <li>
                            <span className="text-neutral-100 font-bold">Access:</span> Request copies of your personal data.
                        </li>
                        {/* Add other rights based on applicable laws */}
                    </ul>
                    <h2 className="text-xl font-semibold text-neutral-200">6. Changes to This Policy</h2>
                    <p className="font-normal text-base text-neutral-300">
                        We may update this Privacy Policy and will notify you of changes by posting the revised policy on our website. Your continued use of our services constitutes acceptance of the updated policy.
                    </p>
                    <h2 className="text-xl font-semibold text-neutral-200">7. Contact Us</h2>
                    <p className="font-normal text-base text-neutral-300">
                        For any questions about this Privacy Policy, please contact us at <span className="font-bold text-foreground">support@testsite.com</span>.
                    </p>
                </div>
            </BlurBackground>
        </MaxWidth>
    )
}

export default PrivacyPolicy
