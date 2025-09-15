import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-main flex items-center justify-center">
      <div className="text-center px-6">
        <div className="w-24 h-24 rounded-full bg-gradient-card shadow-soft flex items-center justify-center mx-auto mb-6">
          <Home className="w-12 h-12 text-primary" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-foreground">Page Not Found</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-gradient-voice text-white px-6 py-3 rounded-full font-medium shadow-voice hover:shadow-lg transition-all duration-200"
        >
          <Home className="w-4 h-4" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
