import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Plutas Labs! I encountered an error on RateMyCollege:\n\nError: ${this.state.error?.message || "Unknown error"}\n\nPage: ${window.location.href}`
    );
    window.open(`https://wa.me/917780185418?text=${message}`, "_blank");
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">Something went wrong</h1>
              <p className="text-muted-foreground">
                We're sorry, but something unexpected happened. Please try refreshing the page or contact us for help.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={this.handleReload} variant="default">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Page
              </Button>
              <Button onClick={this.handleWhatsApp} variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                <MessageCircle className="w-4 h-4 mr-2" />
                Report on WhatsApp
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Built with care by{" "}
              <a href="https://plutas.in/landing.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Plutas Labs
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
