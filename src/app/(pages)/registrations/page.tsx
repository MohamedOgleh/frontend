import { Label } from "@/components/ui/label";
import React from "react";

function Page() {
  return (
  
      <div className="grid grid-cols-3 grid-rows-[60px_1fr_90px] bg-green-400 h-full">
        {/* header */}
        <div className="bg-red-100 col-start-1 col-end-4 px-8 py-2 font-bold">
        <div className="flex flex-col justify-start ">
        <Label className="text-2xl">Registrations</Label>
        <Label className="text-md text-muted-foreground">
          Please fill all required fields
        </Label>
      </div>
        </div>
        <div className="bg-red-300"> </div>
        <div className="bg-red-400"></div>
        <div className="bg-red-500"></div>
        <div className="bg-red-700 col-start-1 col-end-4"></div>
      </div>

  );
}

export default Page;
