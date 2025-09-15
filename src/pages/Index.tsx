import { useState } from "react";
import { Header } from "@/components/Header";
import { MoodTracker } from "@/components/MoodTracker";
import { VoiceAssistant } from "@/components/VoiceAssistant";
import { QuickActions } from "@/components/QuickActions";
import { BottomNavigation } from "@/components/BottomNavigation";

const Index = () => {
  const [userName] = useState("Lavanya"); // In real app, this would come from user storage
  
  return (
    <div className="min-h-screen bg-gradient-main">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative pb-20 px-4 sm:px-0">
        <Header userName={userName} />
        
        <main className="px-4 sm:px-6 space-y-6 sm:space-y-8">
          <MoodTracker />
          <VoiceAssistant />
          <QuickActions />
        </main>

        <BottomNavigation activeTab="home" />
      </div>
    </div>
  );
};

export default Index;