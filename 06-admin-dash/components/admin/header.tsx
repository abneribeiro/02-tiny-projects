import { Input } from "@/components/ui/input";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          {children}
          <div className="relative ml-4">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 w-64"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/abneribeiro.png" alt="@abneribeiro" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
