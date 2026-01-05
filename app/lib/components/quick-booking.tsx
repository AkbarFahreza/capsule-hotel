import React from "react";
import BookingOptions from "./booking-options";

export default function QuickBooking() {
  const userName = "Achmad Akbar fahreza";
  return (
    <div className="lg:rounded-2xl rounded-[7px] py-5 px-5 lg:py-10 lg:px-10 bg-white z-10 lg:absolute lg:top-[60%] mx-auto lg:left-1/2 lg:-translate-x-1/2 w-full shadow-md lg:w-10/12 flex flex-col gap-12">
      <div>
        <h2 className="text-main">
          Good afternoon, <span className="font-bold">{userName}</span>
        </h2>
        <h1 className="text-main text-2xl font-bold ">Ready to book a room?</h1>
      </div>
      <BookingOptions />
    </div>
  );
}
