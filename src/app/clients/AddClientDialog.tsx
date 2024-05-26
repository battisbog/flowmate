"use client";

import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"; // Adjust import based on your setup
import { Button } from "@/components/ui/button";

const AddClientDialog = () => {
  const [open, setOpen] = useState(false);

  const handleAddClient = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Client added");
    setOpen(false); // Close the dialog
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className="flex items-center space-x-2">
          <UserPlus className="w-5 h-5" />
          <span>Add Client</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Client</DialogTitle>
          <DialogDescription>Fill in the client's details below:</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAddClient}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add Client</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddClientDialog;
