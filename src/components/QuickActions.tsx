import { Heart, Calendar, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const QuickActions = () => {
  const { toast } = useToast();

  const actions = [
    {
      icon: Heart,
      label: "Peer Support",
      onClick: () => toast({ title: "Connecting to Peer Support", description: "Finding supportive community members..." }),
    },
    {
      icon: Calendar,
      label: "Book Counselor",
      onClick: () => toast({ title: "Booking Counselor", description: "Opening scheduling system..." }),
    },
    {
      icon: BookOpen,
      label: "Resources",
      onClick: () => toast({ title: "Mental Health Resources", description: "Loading helpful resources..." }),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
      {actions.map((action) => {
        const IconComponent = action.icon;
        return (
          <button
            key={action.label}
            onClick={action.onClick}
            className="flex sm:flex-col items-center gap-3 sm:gap-3 p-4 sm:p-4 bg-gradient-card rounded-xl sm:rounded-2xl shadow-soft hover:shadow-mood transition-all duration-200 active:scale-95 touch-manipulation min-h-[60px] sm:min-h-[auto]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <span className="text-sm sm:text-sm font-medium text-foreground text-left sm:text-center">
              {action.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};