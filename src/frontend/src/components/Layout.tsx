import { Link } from "@tanstack/react-router";
import { Activity, Heart } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-card border-b border-border shadow-card sticky top-0 z-40">
        <div className="container max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 group transition-smooth"
            data-ocid="nav-logo"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-xs group-hover:shadow-card transition-smooth">
              <Activity className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-xl text-foreground tracking-tight">
              Symptom<span className="text-primary">Check</span>
            </span>
          </Link>

          <nav className="flex items-center gap-1" data-ocid="nav-links">
            <Link
              to="/"
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-smooth"
              data-ocid="nav-home"
            >
              Home
            </Link>
            <Link
              to="/assess"
              className="px-3 py-1.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-smooth"
              data-ocid="nav-check"
            >
              Check Symptoms
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-background" data-ocid="main-content">
        {children}
      </main>

      <footer
        className="bg-card border-t border-border mt-auto"
        data-ocid="footer"
      >
        <div className="container max-w-5xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-primary" />
              <span>
                SymptomCheck — for informational purposes only. Always consult a
                qualified healthcare provider.
              </span>
            </div>
            <span>
              © {new Date().getFullYear()}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
