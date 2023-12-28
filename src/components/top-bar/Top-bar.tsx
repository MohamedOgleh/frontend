import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Bell, ChevronDown, Search, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";

function Topbar() {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex items-center w-80 border rounded-xl px-2 bg-background">
          <Search className="w-5 h-5 text-white" />
          <Input
            placeholder="Search"
            className="outline-none border-none w-full "
          />
        </div>
        {/* right */}
        <div>
          <div className="flex items-center gap-3">
            <Button>
              <Bell className="w-5 h-5" />
            </Button>
            <Button>
              <Sun className="w-5 h-5" />
            </Button>
            <div className="flex justify-center items-center gap-2 px-2 py-[4px] rounded-xl bg-background">
              <Avatar className="w-8 h-8">
                <AvatarImage src="" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <Label className="text-sm font-sm">Mohamed</Label>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
