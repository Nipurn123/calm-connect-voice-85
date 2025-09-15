import { Leaf } from "lucide-react";

interface HeaderProps {
  userName: string;
}

export const Header = ({ userName }: HeaderProps) => {
  return (
    <header className="text-center pt-safe-top pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 animate-fade-in">
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="p-2 sm:p-3 bg-gradient-card rounded-full shadow-medium backdrop-blur-sm border border-white/40 animate-float">
          <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-primary drop-shadow-sm" />
        </div>
        <div className="animate-scale-in">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
            ManoMitra
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">Your Mental Health Companion</p>
        </div>
      </div>
      
      <div className="mt-4 sm:mt-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-base sm:text-lg lg:text-xl text-foreground px-2 font-semibold">
          Hi <span className="text-primary font-bold">{userName}</span>, how are you feeling today?
        </h2>
      </div>
    </header>
  );
};