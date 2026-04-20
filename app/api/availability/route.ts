import { NextResponse } from "next/server";
import {
  VIKBOOKING_ENABLED,
  vikBookingConfig,
  type AvailabilityResponse,
} from "@/lib/booking-config";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  if (!checkIn || !checkOut) {
    return NextResponse.json({ error: "checkIn and checkOut are required" }, { status: 400 });
  }

  // ── VikBooking live mode ──────────────────────────────────
  if (VIKBOOKING_ENABLED && vikBookingConfig.apiKey) {
    try {
      const res = await fetch(
        `${vikBookingConfig.apiUrl}/wp-json/vikbooking/v1/availability?` +
          new URLSearchParams({
            idroom: vikBookingConfig.roomId,
            checkin: checkIn,
            checkout: checkOut,
            apikey: vikBookingConfig.apiKey,
          }),
        { next: { revalidate: 60 } }
      );
      if (!res.ok) throw new Error(`VikBooking returned ${res.status}`);
      const data = await res.json();
      return NextResponse.json(data as AvailabilityResponse);
    } catch (err) {
      console.error("VikBooking availability error:", err);
      return NextResponse.json({ error: "Failed to fetch availability" }, { status: 502 });
    }
  }

  // ── Demo mode (no API key yet) ────────────────────────────
  // Returns mock blocked dates so the calendar looks realistic.
  // Replace with real data once VikBooking is connected.
  const today = new Date();
  const mockBlocked: string[] = [];

  // Block some demo dates (simulate existing bookings)
  const blockRanges = [
    { start: 5, end: 9 },
    { start: 15, end: 20 },
    { start: 35, end: 40 },
  ];
  for (const range of blockRanges) {
    for (let i = range.start; i <= range.end; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      mockBlocked.push(d.toISOString().split("T")[0]);
    }
  }

  const response: AvailabilityResponse = {
    available: true,
    price: 95,
    currency: "EUR",
    minNights: 2,
    blockedDates: mockBlocked,
  };

  return NextResponse.json(response);
}
