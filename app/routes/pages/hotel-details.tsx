// import { Route } from "./+types/detail";

// export async function detailoader({ params }: Route.LoaderArgs) {
//   let roomDetail = await fetchRoomDetail(params.roommid);
//   return { roomDetail };
// }
// export function RoomDetail() {
//   return <div>RoomDetail</div>;
// }

// export default RoomDetail;
import { useParams } from "react-router";
import DummyData from "~/lib/datas/dummy-data";
import { useSearchParams } from "react-router";
import { Hotel, MapIcon, MapPin, Minus, Plus, Wifi } from "lucide-react";
import { useState } from "react";
import Button from "~/lib/components/ui/button";

export default function RoomDetail() {
  const params = useParams();

  const [searchParams] = useSearchParams();
  const stayDur = searchParams.get("stay-duration") || 1;
  const checkInDate = searchParams.get("check-in");

  const HotelData = DummyData();

  //   replace nama-hotel into Nama Hotel
  const hotelName = params.hotel_name
    ?.replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

  const hotel = HotelData.find((item) => item.hotel_name === hotelName);
  const hotelRooms = hotel?.rooms;

  //   console.log("params:" + stayDur + checkInDate);
  //   console.log("search params:" + params.hotel_name);

  //   untuk cek ke data dummy dari params apakah data tersedia, jika tidak maka return not found
  if (!hotel) {
    return <p>Hotel Not found</p>;
  }

  return (
    <div className="container mt-10">
      <h1 className="text-main  text-xl lg:text-2xl font-bold">
        {hotel.hotel_name}
      </h1>
      <div className="flex flex-row gap-2 mb-10 mt-3">
        <MapPin className="text-main" />
        <p>{hotel.city}</p>
      </div>
      <div className="flex flex-col gap-6">
        {hotelRooms?.map((item) => (
          <div
            key={item.room_id}
            className="w-full py-5 px-5 bg-white rounded-[7px] shadow-md"
          >
            <div className="flex flex-col lg:flex-row gap-3">
              <img
                src={item.image}
                className="rounded-[7px] w-full lg:w-[40%] h-auto"
              />
              <div className=" w-full">
                <p className="text-main font-bold">{item.room_name}</p>
                <p className=" mb-4 text-sm lg:text-md">
                  {item.room_description}
                </p>
                <div className="flex flex-wrap w-1/2 gap-2">
                  {item.room_facilities.map((facilities, index) => (
                    <p
                      key={index}
                      className="text-xs w-28 shrink-0 text-nowrap lg:text-sm"
                    >
                      {facilities}
                    </p>
                  ))}
                </div>
              </div>
              <div className="self-end flex flex-col items-end">
                <div>
                  <p>Price per night</p>
                  <p className="flex flex-row mb-3 text-right">
                    IDR{" "}
                    <span className="ml-2 font-bold text-base lgtext-lg text-main">
                      {Number(item.room_price_per_night)}
                    </span>
                  </p>
                </div>
                <p className="flex flex-row items-end mb-3">
                  IDR{" "}
                  <span className="ml-2 font-bold text-xl lgtext-2xl text-main">
                    {Number(item.room_price_per_night) * Number(stayDur)}
                  </span>
                </p>
                <div className="flex flex-row gap-3">
                  <div className="flex flex-row items-center border w-fit py-2.5 px-3 h-fit border-main rounded-[7px]">
                    <Minus size={16} className="text-main" />
                    <p className="min-w-10 text-center">{stayDur}</p>
                    <Plus size={16} className="text-main" />
                  </div>

                  <Button
                    onClick={() => {
                      item.isAvailable
                        ? alert(`${item.room_name} Successfully Booked`)
                        : null;
                    }}
                    variants={item.isAvailable ? "Primary" : "Ghosted"}
                    name="Booking Button"
                  >
                    Booking
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
