import { Leaf } from "lucide-react";

interface HeaderProps {
  userName: string;
}

export const Header = ({ userName }: HeaderProps) => {
  return (
    <header className="text-center pt-safe-top pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6">
      <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
        <div className="p-2 sm:p-3 bg-gradient-card rounded-full shadow-soft">
          <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">ManoMitra</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">Your Mental Health Companion</p>
        </div>
      </div>
      
      <div className="mt-4 sm:mt-6">
        <h2 className="text-base sm:text-lg lg:text-xl text-foreground px-2">
          Hi {userName}, how are you feeling today?
        </h2>
      </div>
    </header>
  );
};