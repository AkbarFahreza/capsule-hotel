import React from "react";
import DummyData from "../datas/dummy-data";
import Button from "./ui/button";
export default function DiscoverHotels() {
  const hotelDatas = DummyData();
  //   console.log("discover hotel" + HotelDatas[0].hotel_name);
  return (
    <div className="container">
      <p className="text-main mt-6 font-bold text-lg lg:text-xl lg:mt-[30vh]">
        Discover nearest Hotels
      </p>
      <ul className="flex flex-row gap-6 overflow-x-scroll py-6">
        {hotelDatas.map((item) => (
          <li className="py-5 px-5 shrink-0 border border-main w-full flex flex-row justify-between items-center lg:w-1/2 lg:py-10 lg:px-10 bg-white rounded-[7px] shadow-md">
            <div>
              <h2 className="text-main font-bold">{item.hotel_name}</h2>
              <p className="mb-4">{item.city}</p>
            </div>
            {/* Untuk membuat param nama hotel dan juga query params masih hard code karena saya masih belum begitu paham menggunakan context untuk mengambil data stay duration dari commponents/booking-options.tsx */}
            <a
              href={`/${item.hotel_name
                .toLowerCase()
                .replaceAll(" ", "-")}?check-in=2026-01-08&stay-duration=2`}
              className=" py-2.5 px-7 rounded-[10px] transition-all duration-150 hover:bg-main hover:text-white cursor-pointer bg-white border border-main text-main"
            >
              Detail
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
