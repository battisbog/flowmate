import { DataTable } from '@/components/Datatable'
import PageTitle from '@/components/PageTitle'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}

export type Client = {
  id: string
  name: string
  email: string
  phone: string
  cases: Array<string>
}
 
export const columns: ColumnDef<Client>[] = [
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

]

export const data: Client[] = [
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

export default function  ({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title='Clients' />
      <DataTable columns={columns} data={data} />
    </div>
  ) 
}

