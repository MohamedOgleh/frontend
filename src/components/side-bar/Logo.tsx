import { Aladin } from "next/font/google";
import { Label } from "../ui/label";
import Image from "next/image";

const aladin = Aladin({ subsets: ["latin"], weight: "400" });

function Logo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-white h-20 w-20 rounded-full">
        <Image src="/logo-2.png" width={90} height={90} alt="img" />
      </div>
      <Label
        className='flex gap-2 text-xl text-primary-foreground font-bold' 
      >
        TOGDHEER<span className="text-[#eb5151]">GYM</span>
      </Label>
    </div>

    // <div className="flex   items-center gap-1 bg-red-500">
    //   <div className=" bg-white h-20 w-20 rounded-full">
    //     <Image src="/logo-2.png" width={90} height={90} alt="img" />
    //     <Label
    //       className={`${aladin.className} flex gap-2 text-3xl text-primary-foreground`}
    //     >
    //       Togdheer<span className="text-[#dc2626]">Gym</span>
    //     </Label>
    //   </div>
    // </div>
  );
}

export default Logo;
