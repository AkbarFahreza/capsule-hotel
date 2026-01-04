// import { Route } from "./+types/detail";

// export async function detailoader({ params }: Route.LoaderArgs) {
//   let roomDetail = await fetchRoomDetail(params.roommid);
//   return { roomDetail };
// }
// export function RoomDetail() {
//   return <div>RoomDetail</div>;
// }

// export default RoomDetail;
import React from "react";
import { useParams } from "react-router";
import DummyData from "~/lib/datas/dummy-data";

export default function RoomDetail() {
  const params = useParams();
  const HotelData = DummyData();

  const hotelName = params.hotel_name
    ?.replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
  console.log(HotelData.filter((item) => item.hotel_name === hotelName));
  return hotelName === HotelData[0].hotel_name ? (
    <div>{hotelName}</div>
  ) : (
    <p>Error</p>
  );
}
