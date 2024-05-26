// components/Headbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Search, Settings, Bell, User } from 'lucide-react';
import { Button } from "@/components/ui/button";  // Assuming you have a button component in your UI library
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const Headbar = () => {
  const [isCommandDialogOpen, setCommandDialogOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandDialogOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b">
      {/* Search Button to trigger CommandDialog */}
      <div className="flex items-center space-x-2 ml-4">
        <Button
          variant="outline"
          onClick={() => setCommandDialogOpen(true)}
          className="flex items-center justify-between space-x-2 w-72 p-2"
        >
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-gray-500" />
            <span>Search</span>
          </div>
          <span className="text-gray-500">⌘F</span>
        </Button>
        <CommandDialog open={isCommandDialogOpen} onOpenChange={setCommandDialogOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Settings</CommandItem>
              <CommandItem>Help</CommandItem>
            </CommandGroup>
            <CommandGroup heading="Commands">
              <CommandItem>Create New Project</CommandItem>
              <CommandItem>Open Documentation</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
      {/* Right-side Buttons */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="p-2">
          <Settings className="w-6 h-6" />
        </Button>
        <Button variant="ghost" className="p-2">
          <Bell className="w-6 h-6" />
        </Button>
        <Button variant="ghost" className="p-2">
          <User className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Headbar;
