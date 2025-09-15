import { cn } from "@/lib/utils";

interface MoodButtonProps {
  mood: "great" | "okay" | "struggling" | "crisis";
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const moodStyles = {
  great: "bg-gradient-mood-great hover:bg-gradient-mood-great shadow-glow-mood-great hover:shadow-strong hover:scale-105",
  okay: "bg-gradient-mood-okay hover:bg-gradient-mood-okay shadow-glow-mood-okay hover:shadow-strong hover:scale-105",
  struggling: "bg-gradient-mood-struggling hover:bg-gradient-mood-struggling shadow-glow-mood-struggling hover:shadow-strong hover:scale-105",
  crisis: "bg-gradient-mood-crisis hover:bg-gradient-mood-crisis shadow-glow-mood-crisis hover:shadow-strong hover:scale-105",
};

export const MoodButton = ({ mood, label, isSelected, onClick }: MoodButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "aspect-square w-full min-h-[60px] sm:min-h-[70px] md:min-h-[80px] rounded-full text-white font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 touch-manipulation backdrop-blur-sm border border-white/20 animate-fade-in",
        moodStyles[mood],
        isSelected && "scale-110 sm:scale-115 ring-4 sm:ring-6 ring-white/60 shadow-strong animate-breathe"
      )}
    >
      {label}
    </button>
  );
};