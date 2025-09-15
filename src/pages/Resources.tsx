import { BookOpen, Video, Headphones, Phone, ExternalLink } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Card } from "@/components/ui/card";

const Resources = () => {
  const resources = [
    {
      category: "Emergency Support",
      icon: Phone,
      items: [
        { title: "Crisis Text Line", description: "Text HOME to 741741", urgent: true },
        { title: "National Suicide Prevention Lifeline", description: "Call 988", urgent: true },
        { title: "Crisis Chat", description: "24/7 online crisis support", urgent: true },
      ],
    },
    {
      category: "Self-Care & Meditation",
      icon: Headphones,
      items: [
        { title: "Guided Meditation", description: "5-minute breathing exercises" },
        { title: "Progressive Muscle Relaxation", description: "Body tension release" },
        { title: "Mindfulness Practices", description: "Daily mindfulness routines" },
      ],
    },
    {
      category: "Educational Content",
      icon: BookOpen,
      items: [
        { title: "Understanding Anxiety", description: "Learn about anxiety disorders" },
        { title: "Depression Awareness", description: "Recognizing signs and symptoms" },
        { title: "Coping Strategies", description: "Healthy ways to manage stress" },
      ],
    },
    {
      category: "Video Resources",
      icon: Video,
      items: [
        { title: "Therapy Techniques", description: "Professional therapy methods" },
        { title: "Personal Stories", description: "Recovery journeys & hope" },
        { title: "Expert Interviews", description: "Mental health professionals" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-main">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative pb-20 px-4 sm:px-0">
        <header className="bg-white/95 backdrop-blur-sm border-b border-border p-4 sm:p-6 pt-safe-top pt-8 sm:pt-12">
          <h1 className="text-lg sm:text-xl font-semibold text-center text-foreground">
            Mental Health Resources
          </h1>
        </header>

        <main className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {resources.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.category} className="p-4 sm:p-5 bg-gradient-card shadow-soft border-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h2 className="font-semibold text-sm sm:text-base text-foreground">{category.category}</h2>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className={`p-3 sm:p-4 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-mood touch-manipulation min-h-[60px] flex items-center ${
                        item.urgent
                          ? "bg-destructive/10 border border-destructive/20 hover:bg-destructive/20"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex items-start justify-between w-full">
                        <div className="flex-1 pr-2">
                          <h3 className={`font-medium mb-1 text-sm sm:text-base ${
                            item.urgent ? "text-destructive" : "text-foreground"
                          }`}>
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <ExternalLink className={`w-4 h-4 flex-shrink-0 ${
                          item.urgent ? "text-destructive" : "text-primary"
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
          
          <Card className="p-4 sm:p-6 bg-gradient-voice text-white shadow-voice border-0">
            <div className="text-center">
              <h3 className="font-semibold mb-2 text-base sm:text-lg">Need Immediate Help?</h3>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">
                If you're in crisis or having thoughts of self-harm, please reach out immediately.
              </p>
              <div className="flex flex-col gap-2 sm:gap-3">
                <a
                  href="tel:988"
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-full text-sm font-medium transition-colors touch-manipulation min-h-[48px] flex items-center justify-center"
                >
                  Call 988 - Crisis Lifeline
                </a>
                <a
                  href="sms:741741?body=HOME"
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-full text-sm font-medium transition-colors touch-manipulation min-h-[48px] flex items-center justify-center"
                >
                  Text HOME to 741741
                </a>
              </div>
            </div>
          </Card>
        </main>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default Resources;