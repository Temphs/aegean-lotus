import { NextResponse } from "next/server";
import {
  VIKBOOKING_ENABLED,
  vikBookingConfig,
  type BookingRequest,
  type BookingResponse,
} from "@/lib/booking-config";

export async function POST(request: Request) {
  const body: BookingRequest = await request.json();
  const { checkIn, checkOut, guests, firstName, lastName, email } = body;

  if (!checkIn || !checkOut || !firstName || !lastName || !email) {
    return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
  }

  // ── VikBooking live mode ──────────────────────────────────
  if (VIKBOOKING_ENABLED && vikBookingConfig.apiKey) {
    try {
      const res = await fetch(
        `${vikBookingConfig.apiUrl}/wp-json/vikbooking/v1/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": vikBookingConfig.apiKey,
          },
          body: JSON.stringify({
            idroom: vikBookingConfig.roomId,
            checkin: checkIn,
            checkout: checkOut,
            adults: guests,
            customer: { first_name: firstName, last_name: lastName, email },
            notes: body.notes || "",
          }),
        }
      );
      if (!res.ok) throw new Error(`VikBooking returned ${res.status}`);
      const data: BookingResponse = await res.json();
      return NextResponse.json(data);
    } catch (err) {
      console.error("VikBooking booking error:", err);
      return NextResponse.json({ success: false, message: "Booking failed. Please try again." }, { status: 502 });
    }
  }

  // ── Demo mode ─────────────────────────────────────────────
  // Simulate a successful booking response.
  const mockResponse: BookingResponse = {
    success: true,
    bookingId: `AL-${Date.now()}`,
    message: `Thank you ${firstName}! Your enquiry has been received. We'll confirm your stay (${checkIn} → ${checkOut}) by email shortly.`,
    totalPrice: 95 * (Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000)),
    currency: "EUR",
  };

  return NextResponse.json(mockResponse);
}
