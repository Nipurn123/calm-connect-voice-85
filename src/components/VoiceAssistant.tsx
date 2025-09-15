import { useState } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { toast } = useToast();

  const handleVoiceClick = () => {
    if (isListening) {
      // Stop listening
      setIsListening(false);
      toast({
        title: "Voice Assistant",
        description: "Stopped listening. Processing your message...",
      });
      
      // Simulate processing and response
      setTimeout(() => {
        setIsSpeaking(true);
        toast({
          title: "ManoMitra is responding",
          description: "I understand you're going through a tough time. Can you tell me more about what's bothering you?",
        });
        
        setTimeout(() => {
          setIsSpeaking(false);
        }, 3000);
      }, 1500);
    } else {
      // Start listening
      setIsListening(true);
      toast({
        title: "Voice Assistant",
        description: "I'm listening... Speak when ready.",
      });
    }
  };

  const getIcon = () => {
    if (isSpeaking) return Volume2;
    if (isListening) return MicOff;
    return Mic;
  };

  const IconComponent = getIcon();

  return (
    <div className="flex justify-center px-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
      <button
        onClick={handleVoiceClick}
        className={cn(
          "w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-gradient-voice hover:bg-gradient-voice-hover text-white transition-all duration-500 shadow-voice hover:shadow-strong active:scale-95 flex items-center justify-center touch-manipulation backdrop-blur-sm border border-white/20 animate-fade-in",
          isListening && "animate-pulse ring-4 sm:ring-6 ring-voice-secondary/60 shadow-glow-accent",
          isSpeaking && "animate-breathe bg-gradient-voice-hover ring-4 sm:ring-6 ring-accent/60 shadow-glow-accent"
        )}
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2 px-2">
          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
          <span className="text-xs sm:text-sm font-semibold text-center leading-tight drop-shadow-sm">
            {isSpeaking ? "Speaking..." : isListening ? "Listening..." : "Talk to Voice Assistant"}
          </span>
        </div>
      </button>
    </div>
  );
};