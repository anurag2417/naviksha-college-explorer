import { Suspense } from "react";
import CollegesClient from "./CollegesClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CollegesClient />
    </Suspense>
  );
}
