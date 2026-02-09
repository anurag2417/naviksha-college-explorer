import { Suspense } from "react";
import CollegeTypeClient from "./CollegeTypeClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CollegeTypeClient />
    </Suspense>
  );
}
