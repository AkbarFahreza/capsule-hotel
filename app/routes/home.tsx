import QuickBooking from "~/lib/components/quick-booking";
import type { Route } from "./+types/home";
import DiscoverHotels from "~/lib/components/discover-hotels";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caspel Hotel" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  return (
    <>
      <div
        id="home-section"
        className="min-h-[50vh] md:min-h-[80vh] flex relative"
      >
        <span id="hero-image" />
      </div>
      <div className="-mt-[25vh]">
        <QuickBooking />
      </div>
      <DiscoverHotels />
    </>
  );
}
