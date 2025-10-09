"use client";

import Link from "next/link"; // ✅ Import Link
import { useEffect, useState } from "react";

export default function BookingConfirmedPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    // ✅ Read booking data from localStorage
    const storedBooking = localStorage.getItem("confirmedBooking");
    if (storedBooking) {
      setBooking(JSON.parse(storedBooking));
    }
  }, []);

  if (!booking)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading confirmation details...</p>
      </div>
    );

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <div className="max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-red-700 mb-4">
          🎉 Booking Confirmed!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for choosing our service, <strong>{booking.name}</strong>!<br />
          Your booking for <strong>{booking.serviceType}</strong> has been successfully confirmed. A confirmation email
          has been sent to <strong>{booking.email}</strong>.
        </p>

        <div className="bg-red-50 border border-green-200 text-left rounded-xl p-4 mb-6">
          <h2 className="text-lg font-semibold text-red-700 mb-2">Booking Summary</h2>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Time:</strong> {booking.time}</p>
          <p><strong>Pickup:</strong> {booking.pickup}</p>
          <p><strong>Destination:</strong> {booking.destination}</p>
          <p><strong>Vehicle:</strong> {booking.vehicleModel}</p>
          <p><strong>Total Cost:</strong> ₦{booking.totalCost?.toLocaleString()}</p>
          <p><strong>Driver Option:</strong> {booking.driverOption}</p>
          {booking.armedSecurityCount && (
            <p>
              <strong>Number of Armed Security:</strong>{" "}
              {booking.armedSecurityCount}
            </p>
          )}

          {booking.escortVehicle !== undefined && (
            <p>
              <strong>Escort Vehicle:</strong>{" "}
              {booking.escortVehicle ? "Yes" : "No"}
            </p>
          )}

          {booking.notes && (
            <p>
              <strong>Notes:</strong> {booking.notes}
            </p>
          )}
        </div>

        
        <Link
          href="/"
          className="bg-red-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition inline-block"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}


  