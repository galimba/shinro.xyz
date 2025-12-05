"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export function LeadGen() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      const response = await fetch(
        "https://formspree.io/f/YOUR_FORMSPREE_ID",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <section id="request-access" className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card glow-accent"
          >
            {/* Success checkmark with glow */}
            <motion.div
              className="text-shinro-accent mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
                }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold">Request received</h3>
            <p className="mt-2 text-shinro-light">
              We will be in touch within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="request-access" className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tighter headline-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Request early access
        </motion.h2>
        <motion.p
          className="mt-4 text-shinro-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Join the waitlist for Shinro SDK beta access.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              className="input flex-1"
              aria-label="Email address"
            />
            <motion.button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "submitting" ? "Sending..." : "Request Access"}
            </motion.button>
          </div>

          {/* Error message with shake animation */}
          {status === "error" && (
            <motion.p
              className="mt-2 text-shinro-heat text-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: [0, -5, 5, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
            >
              {errorMessage}
            </motion.p>
          )}
        </motion.form>

        <motion.p
          className="mt-4 text-sm text-shinro-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          By submitting, you agree to receive product updates. Unsubscribe
          anytime.
        </motion.p>
      </div>
    </section>
  );
}
