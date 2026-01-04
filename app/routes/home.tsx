import QuickBooking from "~/lib/components/quick-booking";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
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
        <QuickBooking />
      </div>
    </>
  );
}
