const Index = () => {
  const currentDate = "January 12, 2026";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-foreground">
              Sria Infotech Pvt Ltd
            </h1>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Page Title */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: {currentDate}
          </p>
        </div>

        {/* Privacy Policy Section */}
        <section id="privacy-policy" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 pb-4 border-b border-border">
            Privacy Policy
          </h2>

          <article className="legal-content space-y-8">
            <div id="introduction" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h3>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how Sria Infotech Pvt Ltd ("we", "our", "us") collects, uses, stores, and protects information when you use our WhatsApp Bulk Messaging Application ("App", "Service").
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By using our App, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div id="about-application" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">2. About the Application</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our application is designed to send bulk WhatsApp messages using the WhatsApp Business API for legitimate business communication purposes, such as:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Notifications</li>
                <li>Alerts</li>
                <li>Transactional messages</li>
                <li>Customer updates</li>
                <li>Marketing messages (only with user consent)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We strictly follow Meta and WhatsApp policies.
              </p>
            </div>

            <div id="information-collected" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">3. Information We Collect</h3>
              
              <h4 className="text-lg font-medium text-foreground mb-3 mt-6">3.1 Information You Provide</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Phone numbers uploaded by users</li>
                <li>Message content created by the user</li>
                <li>Business name and profile details</li>
                <li>Contact email address</li>
                <li>Opt-in confirmation records</li>
              </ul>

              <h4 className="text-lg font-medium text-foreground mb-3 mt-6">3.2 Automatically Collected Information</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>App usage logs</li>
                <li>Message delivery status</li>
                <li>Timestamps and API response logs</li>
                <li>IP address (for security and fraud prevention)</li>
              </ul>
            </div>

            <div id="whatsapp-data" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">4. WhatsApp Data Usage</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Phone numbers are used only for requested messaging</li>
                <li>Messages are sent via official WhatsApp Business API</li>
                <li>We do not read, analyze, or sell message content</li>
                <li>Messages are delivered through WhatsApp's secure infrastructure</li>
              </ul>
            </div>

            <div id="user-consent" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">5. User Consent (Opt-In)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Messages are sent only to users who explicitly opt in via:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Website forms</li>
                <li>Checkboxes</li>
                <li>SMS or WhatsApp confirmation</li>
                <li>Written or digital consent</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Users can opt out anytime by replying <strong className="text-foreground">STOP</strong> or contacting us.
              </p>
            </div>

            <div id="how-we-use" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">6. How We Use Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Send WhatsApp messages</li>
                <li>Manage delivery and reporting</li>
                <li>Provide customer support</li>
                <li>Improve performance</li>
                <li>Ensure policy compliance</li>
                <li>Prevent fraud and misuse</li>
              </ul>
            </div>

            <div id="data-sharing" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">7. Data Sharing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell personal data. Data may be shared only with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Meta / WhatsApp</li>
                <li>Hosting providers</li>
                <li>Legal authorities when required</li>
              </ul>
            </div>

            <div id="data-storage" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">8. Data Storage & Security</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Secure servers</li>
                <li>Restricted access</li>
                <li>Industry-standard security measures</li>
                <li>Encryption where applicable</li>
              </ul>
            </div>

            <div id="data-retention" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">9. Data Retention</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Phone numbers retained until purpose completion or opt-out</li>
                <li>Logs retained for compliance</li>
                <li>Inactive data periodically deleted</li>
              </ul>
            </div>

            <div id="data-deletion" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">10. User Data Deletion</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Users can request deletion by emailing:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg border border-border">
                <p className="text-foreground">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:ravis.rangari@gmail.com" className="text-primary hover:underline">
                    ravis.rangari@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Include phone number and deletion request. Data will be deleted within 7–30 business days.
                </p>
              </div>
            </div>

            <div id="childrens-privacy" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">11. Children's Privacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Service not intended for users under 18.
              </p>
            </div>

            <div id="compliance" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">12. Compliance</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our service complies with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>WhatsApp Business Messaging Policy</li>
                <li>Meta Platform Terms</li>
                <li>Meta Developer Policies</li>
                <li>Data protection regulations</li>
              </ul>
            </div>

            <div id="policy-updates" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">13. Policy Updates</h3>
              <p className="text-muted-foreground leading-relaxed">
                Updates will be posted on this page with revised dates.
              </p>
            </div>

            <div id="privacy-contact" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">14. Contact Information</h3>
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

        {/* Divider */}
        <hr className="border-border my-16" />

        {/* Terms of Service Section */}
        <section id="terms-of-service" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 pb-4 border-b border-border">
            Terms of Service
          </h2>

          <article className="legal-content space-y-8">
            <div id="acceptance" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h3>
              <p className="text-muted-foreground leading-relaxed">
                By using the Service, you agree to these Terms.
              </p>
            </div>

            <div id="description" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">2. Description of Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                Allows businesses to send WhatsApp messages via official WhatsApp Business API for legitimate purposes.
              </p>
            </div>

            <div id="eligibility" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">3. Eligibility</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Must be 18+</li>
                <li>Authorized business representative</li>
                <li>Compliance with laws and policies</li>
              </ul>
            </div>

            <div id="responsibilities" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">4. User Responsibilities</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Send messages only to opted-in users</li>
                <li>Maintain opt-in proof</li>
                <li>Stop messaging on opt-out</li>
              </ul>
            </div>

            <div id="prohibited" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">5. Prohibited Uses</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Spam or unsolicited messages</li>
                <li>Fraudulent or misleading content</li>
                <li>Illegal activities</li>
                <li>Harassment</li>
                <li>Policy violations</li>
              </ul>
            </div>

            <div id="meta-compliance" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">6. WhatsApp & Meta Compliance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Subject to WhatsApp and Meta policies.
              </p>
            </div>

            <div id="suspension" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">7. Suspension & Termination</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access may be suspended or terminated for violations.
              </p>
            </div>

            <div id="privacy-terms" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">8. Privacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Governed by this <a href="#privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <div id="availability" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">9. Service Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                No guarantee of uninterrupted service or delivery.
              </p>
            </div>

            <div id="liability" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">10. Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                No liability for indirect damages or delivery failures.
              </p>
            </div>

            <div id="indemnification" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">11. Indemnification</h3>
              <p className="text-muted-foreground leading-relaxed">
                Users indemnify Sria Infotech Pvt Ltd against claims.
              </p>
            </div>

            <div id="intellectual-property" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">12. Intellectual Property</h3>
              <p className="text-muted-foreground leading-relaxed">
                All content and software belong to Sria Infotech Pvt Ltd.
              </p>
            </div>

            <div id="modifications" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">13. Modifications</h3>
              <p className="text-muted-foreground leading-relaxed">
                Terms may be updated anytime.
              </p>
            </div>

            <div id="governing-law" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">14. Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed">
                Governed by laws of Hyderabad, India.
              </p>
            </div>

            <div id="terms-contact" className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-4">15. Contact Information</h3>
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

export default Index;
