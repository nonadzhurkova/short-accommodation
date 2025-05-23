'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AvailabilityForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: null,
    checkOut: null,
    guests: 1,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: null,
        checkOut: null,
        guests: 1,
        message: ''
      });
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="availability" className="py-8 bg-gradient-to-b from-blue-50 to-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Check Availability</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Name and Email in first row */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 text-sm bg-gray-50 focus:bg-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 text-sm bg-gray-50 focus:bg-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 text-sm bg-gray-50 focus:bg-white transition-colors"
                  placeholder="+1234567890"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Dates and Guests in second row */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in *</label>
                <DatePicker
                  selected={formData.checkIn}
                  onChange={(date) => setFormData({...formData, checkIn: date})}
                  className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 text-sm bg-gray-50 focus:bg-white transition-colors"
                  minDate={new Date()}
                  required
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select date"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-out *</label>
                <DatePicker
                  selected={formData.checkOut}
                  onChange={(date) => setFormData({...formData, checkOut: date})}
                  className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 text-sm bg-gray-50 focus:bg-white transition-colors"
                  minDate={formData.checkIn || new Date()}
                  required
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select date"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Guests *</label>
                <input
                  type="number"
                  min="1"
                  max="6"
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 text-sm bg-gray-50 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 text-sm bg-gray-50 focus:bg-white transition-colors"
                rows={2}
                placeholder="Any special requests or questions?"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2.5 text-white font-medium rounded-md text-sm shadow-sm transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Check Availability'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm">
                  Thank you! We&apos;ll get back to you soon.
                </p>
              )}
              
              {status === 'error' && (
                <p className="text-red-600 text-sm">
                  Sorry, there was an error. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
