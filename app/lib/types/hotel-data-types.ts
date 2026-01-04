export type HotelDataTypes = [
  id: number,
  hotel_name: string,
  city: string,
  rooms: Array<[]>
];
export type RoomDataTypes = [
  room_id: number,
  room_name: string,
  room_price_per_night: number,
  isAvailable: boolean,
  room_facilities: Array<[]>
];
