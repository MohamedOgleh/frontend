"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Bell, ChevronDown, Moon, Search, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";

function Topbar() {
  // const [theme, setTheme] = useState(false);
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex items-center w-80 rounded-xl px-3 bg-background">
          <Search className="w-5 h-5 text-white"/>
          <Input
            placeholder="Search" className="outline-none border-none w-full"/>
        </div>
        {/* right */}
      
          <div className="flex items-center gap-3">
            <Button variant='ghost' className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              <Label>Notifications</Label>  
            </Button>
            <Button variant='ghost' className="flex items-center gap-2  ">
              <Moon className="w-5 h-5" />
              <Label>Theme</Label>
            </Button>
            <Button variant='ghost' className="flex justify-center items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/male.jpg" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <Label className="text-sm font-sm">Mohamed</Label>
              <ChevronDown />
            </Button>
          </div>
        
      </div>
    </>
  );
}

export default Topbar;
