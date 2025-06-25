"use client";

import { useState } from "react";

interface ContactFormProps {
  buttonText?: string;
  className?: string;
}

export default function ContactForm({ buttonText = "Send", className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }      } catch {
        setError("Failed to send message. Please try again.");
      } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={`text-center p-6 bg-green-50 border border-green-200 rounded-lg ${className}`}>
        <h3 className="text-green-800 font-semibold mb-2">Message Sent!</h3>
        <p className="text-green-700 text-sm">Thank you for your message. We&apos;ll get back to you soon.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-green-600 underline text-sm hover:text-green-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-4 ${className}`}>
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {error}
        </div>
      )}
      
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="p-3 rounded bg-gray-100 border"
        required
        disabled={isSubmitting}
      />
      
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="p-3 rounded bg-gray-100 border"
        required
        disabled={isSubmitting}
      />
      
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="p-3 rounded bg-gray-100 border"
        rows={4}
        required
        disabled={isSubmitting}
      />        <button
        type="submit"
        disabled={isSubmitting}
        className="self-start bg-[#EC5C39] text-white font-bold px-6 py-2 rounded-xl hover:bg-[#d44b2c] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? "Sending..." : buttonText}
      </button>
    </form>
  );
}
