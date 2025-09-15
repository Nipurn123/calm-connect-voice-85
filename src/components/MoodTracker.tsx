import { useState } from "react";
import { MoodButton } from "./MoodButton";
import { useToast } from "@/hooks/use-toast";

type MoodType = "great" | "okay" | "struggling" | "crisis";

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const { toast } = useToast();

  const handleMoodSelect = (mood: MoodType) => {
    setSelectedMood(mood);
    
    let message = "";
    switch (mood) {
      case "great":
        message = "Wonderful! Keep up the positive energy! 🌟";
        break;
      case "okay":
        message = "That's perfectly normal. Take care of yourself today 💙";
        break;
      case "struggling":
        message = "I hear you. Remember, it's okay to not be okay. We're here for you 🤗";
        break;
      case "crisis":
        message = "Please reach out for immediate support. You're not alone 🆘";
        break;
    }

    toast({
      title: "Mood recorded",
      description: message,
    });

    if (mood === "crisis") {
      // In a real app, this would trigger emergency protocols
      setTimeout(() => {
        toast({
          title: "Emergency Resources",
          description: "Crisis Helpline: 988 | Text HOME to 741741",
          variant: "destructive",
        });
      }, 1500);
    }
  };

  return (
      <div className="space-y-4 sm:space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          <MoodButton
            mood="great"
            label="Great"
            isSelected={selectedMood === "great"}
            onClick={() => handleMoodSelect("great")}
          />
          <MoodButton
            mood="okay"
            label="Okay"
            isSelected={selectedMood === "okay"}
            onClick={() => handleMoodSelect("okay")}
          />
          <MoodButton
            mood="struggling"
            label="Struggling"
            isSelected={selectedMood === "struggling"}
            onClick={() => handleMoodSelect("struggling")}
          />
          <MoodButton
            mood="crisis"
            label="Crisis"
            isSelected={selectedMood === "crisis"}
            onClick={() => handleMoodSelect("crisis")}
          />
        </div>
      </div>
  );
};