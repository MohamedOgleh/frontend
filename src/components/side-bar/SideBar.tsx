"use client";
import { Label } from "../ui/label";
import { SideBarItems as items } from "@/app/models/Items";
import { Button } from "../ui/button";
import Logo from "./Logo";
import { useState } from "react";
import { Separator } from "@radix-ui/react-separator";

function SideBar() {
  const [openTab, setOpenTab] = useState<number>(0);
  return (
    <>
      <Logo />

      {/* customer care */}
      <div className="flex flex-col gap-1 w-[90%]">
        <Label className="text-slate-300 mb-3">Customer care</Label>
        <Separator/>

        {items.customerCare.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className=" h-[45px] w-full flex justify-start gap-2 text-primary-foreground
                focus:bg-[#DC2626] focus:text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            onClick={() => setOpenTab(index)}
          >
            {item.leftIcon}
            {item.title}
            {item.rightIcon}
          </Button>
        ))}
      </div>

      {/* management */}
      <div className="flex flex-col gap-1 w-[90%]">
        <Label className="text-slate-300 mb-3">Management</Label>
        <Separator/>

        {items.magangement.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`${
              index == 2 ? "mt-[calc(100%-10rem)]" : ""
            } h-[45px] w-full flex justify-start gap-2 text-primary-foreground
            focus:bg-[#DC2626] focus:text-primary-foreground`}
          >
            {item.leftIcon}
            {item.title}
            {item.rightIcon}
          </Button>
        ))}
      </div>
    </>
  );
}

export default SideBar;
