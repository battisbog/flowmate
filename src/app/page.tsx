"use client";

import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import Deadlines, { DeadlinesProps } from "@/components/deadlines";
import { DollarSign, Users, Clock, Activity } from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$20,231.89",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Hours Billed",
    amount: "150",
    discription: "+19% from last month",
    icon: Clock
  },
  {
    label: "New clients",
    amount: "+3",
    discription: "+180.1% from last month",
    icon: Users
  },

  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity
  }
];

const deadlineData: DeadlinesProps[] = [
  {
    case_name: "Morgage lender case",
    description: "Morgage lender case description",
    time: "11:30 pm"
  },
  {
    case_name: "Morgage lender case",
    description: "Morgage lender case description",
    time: "11:30 pm"
  },
  {
    case_name: "Morgage lender case",
    description: "Morgage lender case description",
    time: "11:30 pm"
  },
  {
    case_name: "Morgage lender case",
    description: "Morgage lender case description",
    time: "11:30 pm"
  },
  {
    case_name: "Morgage lender case",
    description: "Morgage lender case description",
    time: "11:30 pm"
  },
];



export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title={"Overview"}/>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>

      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
      <CardContent>
          <p className="p-4 font-semibold">Calendar</p>
          <div className="p-4">
            <Calendar onChange={setDate} value={date} className="w-full h-full" />
          </div>
        </CardContent>
        <CardContent className="flex justify-between gap-4">
           <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You have {cardData.length + 1} upcoming deadlines.
            </p>
          </section>
          {deadlineData.map((d, i) => (
            <Deadlines
              key={i}
              case_name={d.case_name}
              description={d.description}
              time={d.time}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
    </div>
  );
}
