import Link from "next/link";
import Navigation from "./components/navigation";

export default function Page() {
  return (
    <div>
      <Navigation/>
      <h1>The wild Oasis! Welcome to Paradise</h1>;
      <Link href="/cabins">Explore Luxury cabins!</Link>
    </div>
  );
}
