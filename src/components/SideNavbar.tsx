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

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
              <div className="absolute right-[-20px] top-7">
          <Button
                      onClick={toggleSidebar}

            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
            </Button>
        </div>
        <Nav
            isCollapsed={isCollapsed}
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