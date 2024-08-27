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

const LightChatbox = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef: any = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex items-center justify-center pt-7">
      <Card className="w-full max-w-2xl bg-white shadow-2xl rounded-lg overflow-hidden">
        <CardHeader className="bg-[#5F9EA0] text-white p-4">
          <CardTitle className="text-2xl font-bold text-center">
            AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="p-1">
          <ScrollArea className="h-96 w-full p-4">
            <div className="flex flex-col w-full mx-auto space-y-6">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  } `}
                >
                  <div
                    className={`flex items-start gap-1 ${
                      m.role === "user" ? "flex-row-reverse ml-10" : "flex-row"
                    }`}
                  >
                    <Avatar className="flex items-center justify-center bg-slate-200 rounded-full size-11">
                      {m.role === "user" ? (
                        <User size={27} className=" text-blue-700" />
                      ) : (
                        <Bot size={28} className="text-green-700" />
                      )}
                    </Avatar>
                    <div
                      className={`mx-2 p-3 ${
                        m.role === "user"
                          ? "bg-blue-100 text-blue-900 rounded-3xl"
                          : "bg-gray-100 text-gray-900 rounded-md"
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
        <CardFooter className="p-4 bg-gray-100 flex items-center gap-3">
          <form
            onSubmit={handleSubmit}
            className="flex items-center space-x-2 w-full"
          >
            <Input
              placeholder="Ask me anything..."
              className="flex-grow border-2 border-[#5F9EA0] rounded-full px-6 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              value={input}
              onChange={handleInputChange}
            />
          </form>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="bg-[#5F9EA0] text-white rounded-full p-3 shadow-lg hover:opacity-90 hover:bg-[#5F9EA0] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            <Send className="h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LightChatbox;
