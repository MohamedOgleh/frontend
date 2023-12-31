import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/top-bar/Top-bar";


const robboto = Roboto({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robboto.className}>
        <div className="h-screen grid grid-cols-[250px_1fr_200px] grid-rows-[50px_1fr_50px] gap-1">
          <nav className="flex items-center justify-end bg-secondary col-span-2 px-[11px]">
            <Topbar />
          </nav>
          <aside className="flex flex-col gap-7 items-center bg-secondary py-3 row-start-1 row-end-4 ">
            {/* <SideBar /> */}
          </aside>
          <main className="bg-secondary col-span-2">{children}</main>
          <footer className="bg-secondary col-span-2">Footer</footer>
        </div>
      </body>
    </html>
  );
}
