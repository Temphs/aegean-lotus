// ============================================================
// VikBooking / Channel Manager Configuration
// ============================================================
// When you have your VikBooking API key ready, fill in the
// values below and set VIKBOOKING_ENABLED = true.
// All booking/availability API routes will then use live data.
// ============================================================

export const VIKBOOKING_ENABLED = false;

export const vikBookingConfig = {
  // VikBooking REST API base URL (your WordPress site)
  apiUrl: process.env.VIKBOOKING_API_URL || "",

  // API Key from VikBooking > Configuration > API Keys
  apiKey: process.env.VIKBOOKING_API_KEY || "",

  // Room/apartment ID from VikBooking
  roomId: process.env.VIKBOOKING_ROOM_ID || "1",
};

// ============================================================
// Availability Response Types (matches VikBooking API schema)
// ============================================================
export interface AvailabilityResponse {
  available: boolean;
  price?: number;
  currency?: string;
  minNights?: number;
  blockedDates: string[]; // ISO date strings "YYYY-MM-DD"
}

export interface BookingRequest {
  checkIn: string;   // "YYYY-MM-DD"
  checkOut: string;  // "YYYY-MM-DD"
  guests: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  notes?: string;
}

export interface BookingResponse {
  success: boolean;
  bookingId?: string;
  message: string;
  totalPrice?: number;
  currency?: string;
}
