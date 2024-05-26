"use client";

import { DataTable } from "@/components/Datatable";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Pencil, X } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  cases: Array<string>;
};

const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "cases",
    header: "Cases",
    cell: ({ row }) => row.original.cases.join(", "), // Display cases as a comma-separated list
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <Button
          onClick={() => handleEdit(row.original.id)}
          variant="outline"
          className="w-8 h-8 p-0 flex items-center justify-center"
        >
          <Pencil className="w-4 h-4" />
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              className="w-8 h-8 p-0 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the client and remove their data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleDelete(row.original.id)}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    ),
  },
];

const data: Client[] = [
  {
    id: "728ed52f",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    cases: ["Case1", "Case2"],
  },
  {
    id: "489e1d42",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    cases: ["Case3"],
  },
  {
    id: "a24b9f8c",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "555-123-4567",
    cases: ["Case4", "Case5", "Case6"],
  },
  {
    id: "f38d9c7a",
    name: "Bob Brown",
    email: "bob@example.com",
    phone: "555-987-6543",
    cases: ["Case7"],
  },
  {
    id: "d23e1f9b",
    name: "Charlie Davis",
    email: "charlie@example.com",
    phone: "555-765-4321",
    cases: ["Case8", "Case9"],
  },
  {
    id: "e12f3a6b",
    name: "Diana Evans",
    email: "diana@example.com",
    phone: "555-345-6789",
    cases: ["Case10", "Case11"],
  },
  {
    id: "b45c6d7e",
    name: "Edward Harris",
    email: "edward@example.com",
    phone: "555-654-3210",
    cases: ["Case12"],
  },
];

const handleEdit = (id: string) => {
  // Implement edit functionality
  console.log(`Edit client with id: ${id}`);
};

const handleDelete = (id: string) => {
  // Implement delete functionality
  console.log(`Delete client with id: ${id}`);
};

export default function Clients() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Clients" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
