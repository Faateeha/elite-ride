"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

/** Strongly-typed form shape */
type BookingFormData = {
  name: string;
  email: string;
  date: string;
  time: string;
  pickup: string;
  destination: string;
  notes: string;
  serviceType: string;
  vehicleType: string;
  vehicleModel: string;
  driverOption: string;
  armedSecurityCount: string;
  escortVehicle: boolean;
};

export default function BookServicePage() {
  // ensure params has a string serviceId
  const params = useParams() as { serviceId?: string };
  const serviceId = params.serviceId;
  const router = useRouter();

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    date: "",
    time: "",
    pickup: "",
    destination: "",
    notes: "",
    serviceType: "",
    vehicleType: "",
    vehicleModel: "",
    driverOption: "",
    armedSecurityCount: "",
    escortVehicle: false,
  });

  // set serviceType from URL param when available
  useEffect(() => {
    if (typeof serviceId === "string" && serviceId.trim() !== "") {
      setFormData((prev) => ({ ...prev, serviceType: serviceId }));
    }
  }, [serviceId]);

  const vehicleOptions = {
    SUV: ["Range Rover Vogue", "Toyota Land Cruiser", "Mercedes G-Wagon"],
    Sedan: ["Mercedes S-Class", "Lexus ES350", "BMW 7 Series"],
  } as const;

  // typed handler supporting inputs, selects, textareas and checkboxes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    const key = target.name as keyof BookingFormData;

    if (target.type === "checkbox") {
      const checked = (target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...(prev as BookingFormData), [key]: checked } as BookingFormData));
    } else {
      setFormData((prev) => ({ ...(prev as BookingFormData), [key]: target.value } as BookingFormData));
    }
  };

  // special handler for vehicle type to reset model when type changes
  const handleVehicleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, vehicleType: value, vehicleModel: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("bookingData", JSON.stringify(formData)); // ✅ Save in local storage
    router.push("/booking-summary");
  };
  

  return (
    <section className="py-[8rem] px-6 md:px-20 bg-white min-h-screen text-gray-800">
      <div
        data-aos="fade-up"
        className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-red-800 mb-6 capitalize">
          Book {serviceId?.toString().replace(/-/g, " ")}
        </h1>
        <p className="text-gray-600 mb-8">
          Please fill out the form below to schedule your service. Our team will
          confirm your booking shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name and Email */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
              />
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
              />
            </div>
          </div>

          {/* Pickup and Destination */}
          <div>
            <label className="block text-sm font-medium mb-1">Pickup Location</label>
            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
            />
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Type</label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleVehicleTypeChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-red-800 outline-none"
            >
              <option value="">Select vehicle type</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
            </select>
          </div>

          {/* Vehicle Model */}
          {formData.vehicleType && (
            <div>
              <label className="block text-sm font-medium mb-1">Select Model</label>
              <select
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-red-800 outline-none"
              >
                <option value="">Choose a {formData.vehicleType}</option>
                {vehicleOptions[formData.vehicleType as keyof typeof vehicleOptions].map(
                  (model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  )
                )}
              </select>
            </div>
          )}

          {/* Driver Option */}
          <div>
            <label className="block text-sm font-medium mb-1">Driver Option</label>
            <select
              name="driverOption"
              value={formData.driverOption}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-red-800 outline-none"
            >
              <option value="">Select driver type</option>
              <option value="Regular Chauffeur">Regular Chauffeur</option>
              <option value="Police-Trained Driver">Police-Trained Driver</option>
              <option value="Armed Security">Armed Security</option>
            </select>
          </div>

          {/* Security Options (Conditional) */}
          {formData.driverOption === "Armed Security" && (
            <div className="space-y-4 border border-gray-200 rounded-lg p-4 bg-white">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Number of Armed Security
                </label>
                <input
                  type="number"
                  name="armedSecurityCount"
                  value={formData.armedSecurityCount}
                  onChange={handleChange}
                  min={1}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="escortVehicle"
                  checked={formData.escortVehicle}
                  onChange={handleChange}
                  className="w-4 h-4 text-red-800 focus:ring-red-800"
                />
                <label className="text-sm font-medium">
                  Add Escort Vehicle
                </label>
              </div>
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium mb-1">Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add any special requests..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 focus:ring-2 focus:ring-red-800 outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-800 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-medium transition"
          >
            Review Booking
          </button>
        </form>
      </div>
    </section>
  );
}
