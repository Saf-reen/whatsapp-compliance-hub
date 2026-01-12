import { Link } from "react-router-dom";

const Index = () => {
  const currentDate = "January 12, 2026";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-foreground">
              Sria Infotech Pvt Ltd
            </h1>
            <nav className="hidden md:flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            WhatsApp Compliance Hub
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Welcome to the compliance center for Sria Infotech Pvt Ltd. Please review our legal documents below.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/privacy-policy"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground bg-background border border-border rounded-lg hover:bg-muted transition-colors shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200"
            >
              Terms of Service
            </Link>
          </div>

          <p className="mt-12 text-sm text-muted-foreground">
            Last updated: {currentDate}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-auto">
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
