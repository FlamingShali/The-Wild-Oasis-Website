import { getBookedDatesByCabinId } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response;
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}

// export async function POST(){}
