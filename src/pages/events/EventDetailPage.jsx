"use client";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EventDetailPage() {
  const { id: eventId } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  console.log("eventId:", eventId);

  useEffect(() => {
    async function loadEvent() {
      try {
        const res = await fetch(
          `https://server-node-cjss.onrender.com/events/${eventId}`
        );
        const data = await res.json();
        setEvent(data.event);
      } catch (error) {
        console.error("Error loading event:", error);
      }
    }

    if (eventId) {
      loadEvent();
    }
  }, [eventId]);

  if (!event)
    return (
      <p className="text-gray-600 p-10 text-center text-xl animate-pulse">
        Loading event details...
      </p>
    );

  return (
    <section className="min-h-screen bg-white text-gray-900 p-6 md:p-12 flex flex-col items-center animate-fadeIn">
      {/* Banner Image */}
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg border border-gray-200">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[320px] md:h-[420px] object-cover"
        />
      </div>

      {/* Title */}
      <h1
        className="text-4xl md:text-5xl font-extrabold mt-10 text-center
        bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent"
      >
        {event.title}
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-gray-600 mt-3 text-center max-w-3xl">
        {event.subtitle}
      </p>

      {/* Event Info */}
      <div className="mt-6 text-gray-700 text-lg bg-gray-50 px-6 py-4 rounded-xl border border-gray-200 shadow-sm">
        <p className="mb-1">
          <strong className="text-sky-600">Date:</strong> {event.date}
        </p>
        <p>
          <strong className="text-purple-600">Location:</strong>{" "}
          {event.location}
        </p>
      </div>

      {/* Description */}
      <p className="mt-8 max-w-4xl text-gray-600 leading-8 text-lg text-center md:text-left">
        {event.description}
      </p>

      {/* Register Button */}
      <button
        onClick={() => navigate(`/events/${event._id}/register`)}
        className="mt-10 px-10 py-4 text-lg font-semibold rounded-xl text-white
        bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700 
        transition shadow-lg hover:shadow-xl"
      >
        Register Now →
      </button>
    </section>
  );
}
