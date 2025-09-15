import { Home, MessageCircle, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface BottomNavigationProps {
  activeTab?: string;
}

export const BottomNavigation = ({ activeTab }: BottomNavigationProps) => {
  const location = useLocation();
  
  const tabs = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "chat", label: "Chat", icon: MessageCircle, path: "/chat" },
    { id: "resources", label: "Resources", icon: BookOpen, path: "/resources" },
    { id: "profile", label: "Profile", icon: User, path: "/profile" },
  ];

  const getActiveTab = () => {
    if (activeTab) return activeTab;
    
    const currentPath = location.pathname;
    const tab = tabs.find(t => t.path === currentPath);
    return tab?.id || "home";
  };

  const currentActiveTab = getActiveTab();

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl bg-gradient-card/95 backdrop-blur-lg border-t border-border/50 pb-safe-bottom shadow-strong">
      <div className="grid grid-cols-4 py-1 sm:py-2 px-2 sm:px-4">
        {tabs.map((tab, index) => {
          const IconComponent = tab.icon;
          const isActive = currentActiveTab === tab.id;
          
          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-2 sm:px-4 transition-all duration-300 touch-manipulation min-h-[60px] justify-center rounded-xl group animate-fade-in",
                isActive ? "text-primary bg-white/20 backdrop-blur-sm shadow-soft" : "text-muted-foreground hover:text-foreground hover:bg-white/10"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn(
                "p-1.5 sm:p-2 rounded-full transition-all duration-300 group-hover:scale-110",
                isActive && "bg-primary text-white shadow-glow-primary"
              )}>
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-xs font-semibold leading-tight">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};