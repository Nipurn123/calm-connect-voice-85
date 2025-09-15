import { useState } from "react";
import { User, Settings, Bell, HelpCircle, LogOut, Edit3 } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [userName] = useState("Lavanya");
  const [userEmail] = useState("lavanya@example.com");
  const { toast } = useToast();

  const profileStats = [
    { label: "Days Active", value: "14", color: "text-mood-great" },
    { label: "Mood Entries", value: "28", color: "text-voice-primary" },
    { label: "Chat Sessions", value: "12", color: "text-primary" },
  ];

  const menuItems = [
    { icon: Settings, label: "Settings", action: () => toast({ title: "Settings", description: "Opening settings..." }) },
    { icon: Bell, label: "Notifications", action: () => toast({ title: "Notifications", description: "Manage your notification preferences" }) },
    { icon: HelpCircle, label: "Help & Support", action: () => toast({ title: "Help", description: "Getting help resources..." }) },
    { icon: LogOut, label: "Sign Out", action: () => toast({ title: "Sign Out", description: "Signing out securely..." }), danger: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-main">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative pb-20 px-4 sm:px-0">
        <header className="bg-white/95 backdrop-blur-sm border-b border-border p-4 sm:p-6 pt-safe-top pt-8 sm:pt-12">
          <h1 className="text-lg sm:text-xl font-semibold text-center text-foreground">
            Profile
          </h1>
        </header>

        <main className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* User Info */}
          <Card className="p-5 sm:p-6 bg-gradient-card shadow-soft border-0">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-voice flex items-center justify-center">
                <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground">{userName}</h2>
                <p className="text-sm sm:text-base text-muted-foreground">{userEmail}</p>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => toast({ title: "Edit Profile", description: "Opening profile editor..." })}
                className="min-h-[44px] min-w-[44px]"
              >
                <Edit3 className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          {/* Stats */}
          <Card className="p-4 sm:p-5 bg-gradient-card shadow-soft border-0">
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-4">Your Journey</h3>
            <div className="grid grid-cols-3 gap-4">
              {profileStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-tight mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Mood Trend */}
          <Card className="p-4 sm:p-5 bg-gradient-card shadow-soft border-0">
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-4">Recent Mood Trend</h3>
            <div className="flex items-center gap-2 justify-center mb-3">
              <div className="w-3 h-3 rounded-full bg-mood-great"></div>
              <div className="w-3 h-3 rounded-full bg-mood-okay"></div>
              <div className="w-3 h-3 rounded-full bg-mood-great"></div>
              <div className="w-3 h-3 rounded-full bg-mood-okay"></div>
              <div className="w-3 h-3 rounded-full bg-mood-great"></div>
              <div className="w-3 h-3 rounded-full bg-mood-struggling"></div>
              <div className="w-3 h-3 rounded-full bg-mood-okay"></div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
              You've been maintaining good mental health this week! 🌟
            </p>
          </Card>

          {/* Menu Items */}
          <Card className="bg-gradient-card shadow-soft border-0 overflow-hidden">
            <div className="divide-y divide-border/50">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={index}
                    onClick={item.action}
                    className={`w-full flex items-center gap-4 p-4 sm:p-5 hover:bg-white/50 transition-colors touch-manipulation min-h-[60px] ${
                      item.danger ? "hover:bg-destructive/10" : ""
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      item.danger ? "bg-destructive/10" : "bg-primary/10"
                    }`}>
                      <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        item.danger ? "text-destructive" : "text-primary"
                      }`} />
                    </div>
                    <span className={`font-medium text-sm sm:text-base ${
                      item.danger ? "text-destructive" : "text-foreground"
                    }`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Crisis Support Card */}
          <Card className="p-4 sm:p-6 bg-gradient-voice text-white shadow-voice border-0">
            <h3 className="font-semibold mb-2 text-base sm:text-lg">24/7 Support Available</h3>
            <p className="text-sm opacity-90 mb-4 leading-relaxed">
              Remember, help is always available if you need it.
            </p>
            <Button
              variant="secondary"
              className="w-full bg-white/20 hover:bg-white/30 text-white border-0 min-h-[48px] text-sm font-medium"
            >
              Access Crisis Support
            </Button>
          </Card>
        </main>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default Profile;