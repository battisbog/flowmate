"use client"

import React, { useState } from 'react'
import { Nav } from './ui/nav'

type Props = {}

import {
    Users,
    BriefcaseBusiness,
    File,
    MessageCircle,
    Calendar,
    Settings,
    ReceiptText,
    LayoutDashboard,
    ChevronRight,
  } from "lucide-react" 
import { Button } from './ui/button'

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-6">
      {/* Logo Placeholder */}
      <div className={`flex justify-center mb-4 ${isCollapsed ? 'py-2' : 'py-4'}`}>
        <div className={`${isCollapsed ? 'hidden' : ''}`}>
          <h1 className="text-xl font-bold">flowmate</h1>
        </div>
      </div>
        {!mobileWidth && (
          <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
            isCollapsed={mobileWidth ? true : isCollapsed}
            links={[
              {
                title: "Overview",
                href: "/",
                icon: LayoutDashboard,
                variant: "default",
              },
              {
                title: "Cases",
                href: "/cases",
                icon: BriefcaseBusiness,
                variant: "ghost",
              },
              {
                title: "Documents",
                href: "/documents",
                icon: File,
                variant: "ghost",
              },
              {
                title: "Clients",
                href: "/clients",
                icon: Users,
                variant: "ghost",
              },
              {
                title: "Invoices",
                href: "/invoices",
                icon: ReceiptText,
                variant: "ghost",
              },
              {
                title: "Copilot",
                href: "/copilot",
                icon: MessageCircle,
                variant: "ghost",
              },
              {
                title: "Calendar",
                href: "/calendar",
                icon: Calendar,
                variant: "ghost",
              },
              {
                title: "Settings",
                href: "/settings",
                icon: Settings,
                variant: "ghost",
              },
            ]}
          />
    </div>
  )
}