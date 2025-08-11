// import LocationDetector from "@/components/LocationDetector";


// export default function Home() {
//   return <LocationDetector />;
// }

// app/page.js  (Server Component)
import { Suspense } from "react";
import LocationDetector from "@/components/LocationDetector";

export default function HomePage() {
  return (
    <Suspense fallback={<div />}>
      <LocationDetector />
    </Suspense>
  );
}

