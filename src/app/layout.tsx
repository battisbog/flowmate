import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavbar";
import Headbar from "@/components/Headbar";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import ProtectedLayout from '@/components/ProtectedLayout';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en">
      <head>
        {/* Metadata goes here */}
      </head>
      <body className={cn("min-h-screen w-full bg-white text-black flex", inter.className)}>
        <UserProvider>
          <ProtectedLayout>
            {/* Sidebar */}
            <SideNavbar />
            {/* Main Content */}
            <div className="flex flex-col w-full">
              <Headbar />
              <div className="p-8 w-full">{children}</div>
            </div>
          </ProtectedLayout>
        </UserProvider>
      </body>
    </html>
  );
}
