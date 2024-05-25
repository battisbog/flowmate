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
                label: "128",
                icon: BriefcaseBusiness,
                variant: "default",
              },
              {
                title: "Documents",
                href: "/documents",
                label: "128",
                icon: File,
                variant: "default",
              },
              {
                title: "Clients",
                href: "/clients",
                label: "128",
                icon: Users,
                variant: "default",
              },
              {
                title: "Copilot",
                href: "/copilot",
                label: "128",
                icon: MessageCircle,
                variant: "default",
              },
              {
                title: "Calendar",
                href: "/calendar",
                label: "128",
                icon: Calendar,
                variant: "default",
              },
              {
                title: "Settings",
                href: "/settings",
                label: "128",
                icon: Settings,
                variant: "default",
              },
            ]}
          />
    </div>
  )
}