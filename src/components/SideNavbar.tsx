"use client"

import React from 'react'
import { Nav } from './ui/nav'

type Props = {}

import {
    Users,
    BriefcaseBusiness,
    File,
    MessageCircle,
    Calendar,
    Settings,
    LayoutDashboard,
  } from "lucide-react" 

export default function SideNavbar({}: Props) {
  return (
    <div>
        <Nav
            isCollapsed={false  }
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