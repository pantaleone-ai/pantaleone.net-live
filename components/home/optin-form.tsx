'use client'

import React, { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch(
        'https://automate.rapigent.com/webhook/email-opt-in',
        {
          method: 'POST', // Changed to POST to allow a body
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Fixed typo
          },
          body: new URLSearchParams({ email }).toString(),
        }
      );

      if (response.ok) {
        setStatus('Sweet, thanks for signing up!');
        setEmail('');
      } else {
        setStatus('Error subscribing. Please try again.');
      }
    } catch (error) {
      setStatus('Error: ' + (error as Error).message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto m-12">
      <div className="bg-card rounded-xl shadow-md p-6 border">
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">
          Get our AI content in your inbox
        </h3>
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white"
            required
          />
          <button
            type="submit"
            className="p-2 font-semibold dark:text-white dark:blue-200 dark:to-blue-800 relative inline-flex items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-blue-600 shadow-md transition hover:scale-[0.98] active:scale-[0.95]"
          >
            Subscribe
          </button>
        </form>
        {status && <p className="mt-4 text-center text-foreground">{status}</p>}
      </div>
    </div>
  );
}