import { Link } from "react-router-dom";

const TermsOfService = () => {
    const currentDate = "January 12, 2026";

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="text-lg font-semibold text-foreground hover:opacity-80 transition-opacity">
                            Sria Infotech Pvt Ltd
                        </Link>
                        <nav className="hidden md:flex gap-6 text-sm">
                            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms-of-service" className="text-foreground font-medium transition-colors">
                                Terms of Service
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Page Title */}
                <div className="mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-muted-foreground">
                        Last updated: {currentDate}
                    </p>
                </div>

                {/* Terms of Service Section */}
                <section className="mb-16">
                    <article className="legal-content space-y-8">
                        <div id="acceptance">
                            <h3 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing or using the WhatsApp Bulk Messaging Application ("App", "Service"), you agree to be bound by these Terms of Service ("Terms").
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                If you do not agree, you must not use the Service.
                            </p>
                        </div>

                        <div id="description">
                            <h3 className="text-xl font-semibold text-foreground mb-4">2. Description of Service</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                The Service allows businesses to send bulk WhatsApp messages using the official WhatsApp Business API for legitimate communication purposes including:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Transactional messages</li>
                                <li>Notifications and alerts</li>
                                <li>Customer updates</li>
                                <li>Marketing messages (only with user consent)</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                The Service is intended for business use only.
                            </p>
                        </div>

                        <div id="eligibility">
                            <h3 className="text-xl font-semibold text-foreground mb-4">3. Eligibility</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                To use this Service, you must:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Be at least 18 years old</li>
                                <li>Have legal authority to represent your business</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Follow Meta and WhatsApp policies</li>
                            </ul>
                        </div>

                        <div id="responsibilities">
                            <h3 className="text-xl font-semibold text-foreground mb-4">4. User Responsibilities</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                You agree that you will:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Send messages only to users who have explicitly opted in</li>
                                <li>Provide accurate and lawful message content</li>
                                <li>Maintain proof of user opt-in if required</li>
                                <li>Use the Service in compliance with all applicable laws</li>
                                <li>Immediately stop messaging users who opt out</li>
                            </ul>
                        </div>

                        <div id="prohibited">
                            <h3 className="text-xl font-semibold text-foreground mb-4">5. Prohibited Uses</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                You must not use the Service to:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Send spam or unsolicited messages</li>
                                <li>Send misleading, deceptive, or fraudulent content</li>
                                <li>Promote illegal activities</li>
                                <li>Harass, threaten, or abuse recipients</li>
                                <li>Violate WhatsApp, Meta, or local regulations</li>
                                <li>Bypass WhatsApp rate limits or safeguards</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Violation may result in immediate suspension or termination.
                            </p>
                        </div>

                        <div id="meta-compliance">
                            <h3 className="text-xl font-semibold text-foreground mb-4">6. WhatsApp & Meta Compliance</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Use of this Service is subject to:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>WhatsApp Business Messaging Policy</li>
                                <li>Meta Platform Terms</li>
                                <li>Meta Developer Policies</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                We reserve the right to suspend or terminate access for any violation of these policies.
                            </p>
                        </div>

                        <div id="suspension">
                            <h3 className="text-xl font-semibold text-foreground mb-4">7. Account Suspension & Termination</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We may suspend or terminate your access if:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>You violate these Terms</li>
                                <li>Your usage causes policy violations</li>
                                <li>Required by WhatsApp or Meta</li>
                                <li>Required by law enforcement</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Termination may occur without prior notice in severe cases.
                            </p>
                        </div>

                        <div id="privacy-terms">
                            <h3 className="text-xl font-semibold text-foreground mb-4">8. Data Usage & Privacy</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Use of the Service is also governed by our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>, which explains:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>What data we collect</li>
                                <li>How we use WhatsApp data</li>
                                <li>Data retention and deletion</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                By using the Service, you consent to such data practices.
                            </p>
                        </div>

                        <div id="availability">
                            <h3 className="text-xl font-semibold text-foreground mb-4">9. Service Availability</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We strive to maintain uninterrupted service, but we do not guarantee:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Continuous availability</li>
                                <li>Error-free operation</li>
                                <li>Delivery of all messages</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Service may be interrupted due to maintenance, API limitations, or external factors.
                            </p>
                        </div>

                        <div id="liability">
                            <h3 className="text-xl font-semibold text-foreground mb-4">10. Limitation of Liability</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                To the maximum extent permitted by law:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>We are not liable for indirect or consequential damages</li>
                                <li>We are not responsible for message delivery failures</li>
                                <li>We are not responsible for account bans caused by user misuse</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Use of the Service is at your own risk.
                            </p>
                        </div>

                        <div id="indemnification">
                            <h3 className="text-xl font-semibold text-foreground mb-4">11. Indemnification</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                You agree to indemnify and hold harmless Sria Infotech Pvt Ltd from any claims, damages, or losses arising from:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                                <li>Your use of the Service</li>
                                <li>Your message content</li>
                                <li>Your violation of laws or policies</li>
                            </ul>
                        </div>

                        <div id="intellectual-property">
                            <h3 className="text-xl font-semibold text-foreground mb-4">12. Intellectual Property</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                All trademarks, logos, and software related to the Service are the property of Sria Infotech Pvt Ltd.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                You may not copy, modify, or distribute without written permission.
                            </p>
                        </div>

                        <div id="modifications">
                            <h3 className="text-xl font-semibold text-foreground mb-4">13. Modifications to Terms</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update these Terms at any time.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Changes will be effective upon posting on this page.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Continued use of the Service indicates acceptance of updated Terms.
                            </p>
                        </div>

                        <div id="governing-law">
                            <h3 className="text-xl font-semibold text-foreground mb-4">14. Governing Law</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms shall be governed by the laws of Hyderabad, India, without regard to conflict of law principles.
                            </p>
                        </div>

                        <div id="terms-contact">
                            <h3 className="text-xl font-semibold text-foreground mb-4">15. Contact Information</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                For questions or concerns regarding these Terms, contact:
                            </p>
                            <div className="bg-muted/50 p-6 rounded-lg border border-border">
                                <p className="text-foreground"><strong>Company Name:</strong> Sria Infotech Pvt Ltd</p>
                                <p className="text-foreground mt-2">
                                    <strong>Email:</strong>{" "}
                                    <a href="mailto:ravis.rangari@gmail.com" className="text-primary hover:underline">
                                        ravis.rangari@gmail.com
                                    </a>
                                </p>
                                <p className="text-foreground mt-2">
                                    <strong>Website:</strong>{" "}
                                    <a href="https://www.sriainfotech.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        https://www.sriainfotech.com/
                                    </a>
                                </p>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Back to Top */}
                <div className="text-center pt-8 border-t border-border">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ↑ Back to Top
                    </a>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-border bg-muted/30">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="text-center text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} Sria Infotech Pvt Ltd. All rights reserved.</p>
                        <p className="mt-2">
                            This page is provided for Meta App Review compliance.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TermsOfService;
