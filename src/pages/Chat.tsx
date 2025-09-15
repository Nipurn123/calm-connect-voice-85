import { useState } from "react";
import { Send, Bot, User } from "lucide-react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! I'm here to listen and support you. How are you feeling right now?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "I understand how you're feeling. It's completely valid to have these emotions. Can you tell me more about what's been on your mind lately?",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-main">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative pb-20 px-4 sm:px-0">
        <header className="bg-white/95 backdrop-blur-sm border-b border-border p-4 sm:p-6 pt-safe-top pt-8 sm:pt-12">
          <h1 className="text-lg sm:text-xl font-semibold text-center text-foreground">
            Chat with ManoMitra
          </h1>
        </header>

        <main className="flex flex-col h-[calc(100vh-140px)] p-4 sm:p-6">
          <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 mb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 sm:gap-3 ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-2 sm:gap-3 max-w-[85%] sm:max-w-[80%] ${
                    message.type === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                        message.type === "user"
                          ? "bg-primary text-white"
                          : "bg-gradient-card shadow-soft"
                      }`}
                    >
                      {message.type === "user" ? (
                        <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      ) : (
                        <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`p-3 sm:p-4 rounded-2xl shadow-soft ${
                      message.type === "user"
                        ? "bg-primary text-white"
                        : "bg-gradient-card text-foreground"
                    }`}
                  >
                    <p className="text-sm sm:text-base leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 sm:gap-3">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Share what's on your mind..."
              className="flex-1 min-h-[48px] sm:min-h-[52px] text-sm sm:text-base"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              size="icon"
              className="bg-gradient-voice hover:bg-voice-secondary min-h-[48px] min-w-[48px] sm:min-h-[52px] sm:min-w-[52px]"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </main>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default Chat;