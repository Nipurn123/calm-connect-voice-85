import { cn } from "@/lib/utils";

interface MoodButtonProps {
  mood: "great" | "okay" | "struggling" | "crisis";
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const moodStyles = {
  great: "bg-mood-great hover:bg-mood-great/80 shadow-[0_8px_25px_hsl(120_48%_54%/0.25)]",
  okay: "bg-mood-okay hover:bg-mood-okay/80 shadow-[0_8px_25px_hsl(45_93%_58%/0.25)]",
  struggling: "bg-mood-struggling hover:bg-mood-struggling/80 shadow-[0_8px_25px_hsl(24_95%_53%/0.25)]",
  crisis: "bg-mood-crisis hover:bg-mood-crisis/80 shadow-[0_8px_25px_hsl(0_72%_51%/0.25)]",
};

export const MoodButton = ({ mood, label, isSelected, onClick }: MoodButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "aspect-square w-full min-h-[60px] sm:min-h-[70px] md:min-h-[80px] rounded-full text-white font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95 touch-manipulation",
        moodStyles[mood],
        isSelected && "scale-105 sm:scale-110 ring-2 sm:ring-4 ring-white/50"
      )}
    >
      {label}
    </button>
  );
};