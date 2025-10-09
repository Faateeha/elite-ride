"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookingSummaryPage() {
  
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [bookingData, setBookingData] = useState<any>(null);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const savedData = localStorage.getItem("bookingData");
    if (savedData) {
      setBookingData(JSON.parse(savedData));
    } 
  }, []);
  useEffect(() => {
    if (bookingData) {
      let cost = 0;

      if (bookingData.serviceType?.includes("airport")) cost += 50000;
      else cost += 30000;

      if (bookingData.driverOption === "Regular Chauffeur") cost += 20000;
      if (bookingData.driverOption === "Police-Trained Driver") cost += 40000;
      if (bookingData.driverOption === "Armed Security") cost += 60000;

      // Armed security extras
      if (bookingData.armedSecurityCount)
        cost += Number(bookingData.armedSecurityCount) * 10000;

      if (bookingData.escortVehicle) cost += 30000;
    

      setTotalCost(cost);
    }
  }, [bookingData]);

  const handleConfirmBooking = () => {
    localStorage.setItem(
      "confirmedBooking",
      JSON.stringify({ ...bookingData, totalCost })
    );
    router.push("/booking-confirmed");
  };

  if (!bookingData)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading booking details...</p>
      </div>
    );
  

  return (
    <section className="py-[8rem] px-6 md:px-20 bg-white min-h-screen text-gray-800">
      <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-red-800 mb-6">Booking Summary</h1>
        <p className="text-gray-600 mb-8">
          Review your booking details below. A confirmation email will be sent to{" "}
          <strong>{bookingData.email}</strong>.
        </p>

        <div className="space-y-3">
          <p><strong>Name:</strong> {bookingData.name}</p>
          <p><strong>Service Type:</strong> {bookingData.serviceType}</p>
          <p><strong>Date:</strong> {bookingData.date}</p>
          <p><strong>Time:</strong> {bookingData.time}</p>
          <p><strong>Pickup:</strong> {bookingData.pickup}</p>
          <p><strong>Destination:</strong> {bookingData.destination}</p>
          <p><strong>Vehicle Type:</strong> {bookingData.vehicleType}</p>
          <p><strong>Vehicle Model:</strong> {bookingData.vehicleModel}</p>
          <p><strong>Driver Option:</strong> {bookingData.driverOption}</p>

         {/* Security Info (Show if entered) */}
{(bookingData.armedSecurityCount || bookingData.escortVehicle) && (
  <>
    <p>
      <strong>Number of Armed Security:</strong>{" "}
      {bookingData.armedSecurityCount
        ? bookingData.armedSecurityCount
        : "None"}
    </p>
    <p>
      <strong>Escort Vehicle:</strong>{" "}
      {bookingData.escortVehicle ? "Yes" : "No"}
    </p>
  </>
)}


          {bookingData.notes && (
            <p>
              <strong>Notes:</strong> {bookingData.notes}
            </p>
          )}
        </div>

        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl">
          <h2 className="text-xl font-semibold text-red-800">Price Estimate</h2>
          <p className="mt-2 text-gray-700 text-lg">
            Estimated Total: <span className="font-bold">₦{totalCost.toLocaleString()}</span>
          </p>
        </div>

        <button
          onClick={handleConfirmBooking}
          className="w-full mt-8 bg-red-800 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition"
        >
          Confirm Booking
        </button>
      </div>
    </section>
  );
}
