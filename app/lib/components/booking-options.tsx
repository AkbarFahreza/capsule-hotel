import { Calendar, Clock, MapPin, Target } from "lucide-react";
import DummyData from "~/lib/datas/dummy-data";
import { useEffect, useState } from "react";
import Button from "./ui/button";

export default function BookingOptions() {
  // console.log("ini komponen jalan banh");
  const hotelDatas = DummyData();

  const todayDate = new Date().toISOString().split("T")[0];

  const [checkInDate, setCheckInDate] = useState(todayDate);
  const [stayDuration, setStayDuration] = useState(1);
  const [checkOutDate, setCheckOutDate] = useState(todayDate);

  // Buat ngitung Checkout berdasarkan checkin date + stay duration
  useEffect(() => {
    const date = new Date(checkInDate);
    date.setDate(date.getDate() + stayDuration);
    setCheckOutDate(date.toISOString().split("T")[0]);
  }, [checkInDate, stayDuration]);

  console.log("Checkin date " + checkOutDate);
  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full lg:items-end ">
      {/* Location option */}
      <div id="Location" className="booking-options-wrapper">
        <label className="text-sm mb-1">Location</label>
        <MapPin size={18} className="booking-options-icon" />
        <select name="Location" id="location" className="py-2 booking-options">
          {hotelDatas.map((hotelData) => (
            <option value={hotelData.hotel_name + ", " + hotelData.city}>
              {hotelData.hotel_name + ", " + hotelData.city}
            </option>
          ))}
        </select>
      </div>

      {/* Checkin option */}
      <div id="check-in" className="lg:w-2/12 booking-options-wrapper">
        <label className="text-sm mb-1">Check-In</label>
        <Calendar size={18} className="booking-options-icon" />
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => {
            setCheckInDate(e.target.value);
          }}
          className="py-1.5 booking-options "
        />
      </div>
      {/* Stay duration */}
      <div id="Stay duration" className="lg:w-2/12 booking-options-wrapper">
        <label className="text-sm mb-1">Stay Durations</label>
        <Clock size={18} className="booking-options-icon" />
        <select
          name="Location"
          id="stay-duration"
          onChange={(e) => {
            setStayDuration(Number(e.target.value));
          }}
          value={stayDuration}
          className="py-2 booking-options"
        >
          <option value={1}>1 Night</option>
          <option value={2}>2 Night</option>
          <option value={3}>3 Night</option>
          <option value={4}>4 Night</option>
        </select>
      </div>
      {/* Checkout option */}
      <div id="check-in" className="lg:w-2/12 booking-options-wrapper">
        <label className="text-sm mb-1">Check-Out</label>
        <Calendar size={18} className="booking-options-icon" />
        <input
          type="date"
          value={checkOutDate}
          readOnly
          className="py-1.5 booking-options"
        />
      </div>
      <Button
        name="Search availablity"
        onClick={() => {}}
        variants="Primary"
        className="lg:w-2/12 h-full mt-4"
      >
        Search
      </Button>
    </div>
  );
}
