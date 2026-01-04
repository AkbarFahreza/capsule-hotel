import { MapPin } from "lucide-react";
import DummyData from "~/lib/datas/dummy-data";
export default function BookingOptions() {
  const locationDatas = DummyData;
  return (
    <div className="flex relative flex-col text-black/80">
      <label className="text-sm mb-1">Location</label>
      <MapPin size={18} className="booking-options-icon" />
      <select
        name="Location"
        id="location"
        className="py-2 px-8 rounded-[7px] border border-dark relative "
      >
        {locationDatas.map((LocationData) => (
          <li>{LocationData.name}</li>
        ))}
      </select>
    </div>
  );
}
