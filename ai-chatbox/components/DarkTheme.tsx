"use client";

import { useChat } from "ai/react";
import { Bot, Send, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

const DarkChatbox = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef: any = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex items-center justify-center p-7">
      <Card className="w-full max-w-2xl bg-gray-900 shadow-2xl rounded-lg overflow-hidden">
        <CardHeader className="bg-[#1F2937] text-white p-4">
          <CardTitle className="text-2xl font-bold text-center">
            AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <ScrollArea className="h-96 w-full p-4">
            <div className="flex flex-col w-full mx-auto space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  } mb-4`}
                >
                  <div
                    className={`flex items-start ${
                      m.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <Avatar className="flex items-center justify-center bg-slate-900 rounded-full size-11">
                      {m.role === "user" ? (
                        <User size={30} className=" text-white" />
                      ) : (
                        <Bot size={30} className="text-green-300" />
                      )}
                    </Avatar>
                    <div
                      className={`mx-2 p-3 ${
                        m.role === "user"
                          ? "bg-[#1F305E] text-white rounded-full"
                          : "bg-gray- text-white rounded-lg"
                      } shadow-md`}
                    >
                      <p className="text-sm">{m.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>
        </CardContent>
        <CardFooter className="p-4 bg-gray-900 flex items-center gap-3">
          <form
            onSubmit={handleSubmit}
            className="flex items-center space-x-2 w-full"
          >
            <Input
              placeholder="Ask me anything..."
              className="flex-grow border-2 border-[#1F2937] bg-gray-800 rounded-full px-6 py-3 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              value={input}
              onChange={handleInputChange}
            />
          </form>
          <Button
            type="submit"
            className="bg-[#1F2937] text-white rounded-full p-3 shadow-lg hover:opacity-90 hover:bg-[#1F2937] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            <Send className="h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DarkChatbox;
