import MaxWidth from "@/components/max-width"
import BlurBackground from "@/components/ui/blur"

const TermsAndConditions = () => {
    return (
        <MaxWidth className="min-h-[50rem]">
            <BlurBackground>
                <div className="py-4 md:py-4 max-w-7xl relative z-10 w-full space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 bg-opacity-50 pt-6">
                        Terms and Conditions
                    </h1>
                    <p className="font-normal text-base text-neutral-300">
                        Welcome to <span className="text-neutral-100 font-bold">TestSite</span> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms and Conditions.
                    </p>
                    <h2 className="text-xl font-semibold text-neutral-200">1. Services</h2>
                    <p className="font-normal text-base text-neutral-300">
                        We offer IT services, security, and infrastructure management. Our services are subject to change without notice, and we reserve the right to modify or discontinue them at any time.
                    </p>
                    <h2 className="text-xl font-semibold text-neutral-200">2. User Responsibilities</h2>
                    <p className="font-normal text-base text-neutral-300">
                        You agree to use our services lawfully. You are responsible for maintaining your account&apos;s confidentiality and all activities under your account. Notify us immediately of any unauthorized use.
                    </p>
                    <h2 className="text-xl font-semibold text-neutral-200">3. Intellectual Property</h2>
                    <p className="font-normal text-base text-neutral-300">
                        All content and materials on our website, including text, graphics, logos, and software, are owned by <span className="text-neutral-100 font-bold">TestSite</span> and are protected by intellectual property laws. Unauthorized use is prohibited.
                    </p>
                    <h2 className="text-xl font-semibold text-neutral-200">4. Limitation of Liability</h2>
                    <p className="font-normal text-base text-neutral-300">
                        Our services are provided &quot;as is&quot; without warranties. We do not guarantee uninterrupted or error-free services. We are not liable for any damages arising from the use of our services.
                    </p>

                    <h2 className="text-xl font-semibold text-neutral-200">5. Refund Policy</h2>
                    <p className="font-normal text-base text-neutral-300">
                        Given that we provide digital services which involve the expenditure of time and resources, our services are generally non-refundable. However, we do offer replacement services under certain conditions. Please note that each service has specific refund policies, and our support team will provide you with detailed information regarding these policies upon request.
                    </p>

                    <h2 className="text-xl font-semibold text-neutral-200">6. Cancellation Policy</h2>
                    <p className="font-normal text-base text-neutral-300">
                        Once a service is paid for or delivered, we do not offer a cancellation policy.
                    </p>

                    <h2 className="text-xl font-semibold text-neutral-200">7. Shipping Policy</h2>
                    <p className="font-normal text-base text-neutral-300">
                        As we primarily deal with digital services, shipping is not typically applicable. However, in rare cases where physical shipping is required, our team will provide specific details regarding the shipping policy.
                    </p>

                    <h2 className="text-xl font-semibold text-neutral-200">8. Pricing Policy</h2>
                    <p className="font-normal text-base text-neutral-300">
                        Each service and client has unique needs and challenges, requiring customized solutions. Therefore, pricing will vary based on the specific service, its availability, and other factors. Our team will provide a detailed pricing structure depending on service requirement and term agreement.
                    </p>





                    <h2 className="text-xl font-semibold text-neutral-200">9. Governing Law</h2>
                    <p className="font-normal text-base text-neutral-300">
                        These Terms are governed by the laws of Country, without regard to conflict of law provisions.
                    </p>


                    <h2 className="text-xl font-semibold text-neutral-200">10. Changes to These Terms</h2>
                    <p className="font-normal text-base text-neutral-300">
                        We may modify these Terms at any time. Changes will be posted on our website. Your continued use after changes means you accept the new Terms.
                    </p>
                    <h2 className="text-xl font-semibold text-neutral-200">11. Contact Us</h2>
                    <p className="font-normal text-base text-neutral-300">
                        For questions about these Terms, please contact us at <span className="font-bold text-foreground">support@testsite.com</span>.
                    </p>
                </div>
            </BlurBackground>
        </MaxWidth>
    )
}

export default TermsAndConditions
