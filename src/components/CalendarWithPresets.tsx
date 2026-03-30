"use client";

import { Calendar } from "@/components/ui/calendar";
type CalendarBasicProps = {
  date: Date;
  setDate: (date: Date) => void;
};

export function CalendarBasic({ date, setDate }: CalendarBasicProps) {
  return (
    <Calendar
      mode="single"
      className="rounded-lg border w-[250px] bg-black text-white"
      selected={date}
      onSelect={(d) => {
        if (d) setDate(d);
      }}
    />
  );
}
