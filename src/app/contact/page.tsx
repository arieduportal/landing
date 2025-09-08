'use client'; // Ensure this is a Client Component in Next.js

import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Contact() {
    const [formStatus, setFormStatus] = useState({ loading: false, message: '', type: '' });
    const [XToken, setXToken] = useState('');

    // Clear message after 5 seconds
    useEffect(() => {
        if (formStatus.message) {
            const timer = setTimeout(() => {
                setFormStatus({ loading: false, message: '', type: '' });
            }, 5000); // 5 seconds
            return () => clearTimeout(timer); // Cleanup on unmount or new message
        }
    }, [formStatus.message]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormStatus({ loading: true, message: '', type: '' });

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('https://api.axiolot.com.ng/email/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Track-Id': 'AE_1B267-619C4-812CC46E-E281',
                    'X-XSRF-TOKEN': XToken
                },
                credentials: 'include',
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            if (response.ok && responseData.status) {
                setFormStatus({
                    loading: false,
                    message: responseData.message || 'Your message has been sent successfully!',
                    type: 'success',
                });
                form.reset(); // Clear form after successful submission
            } else {
                throw new Error(responseData.message || 'Failed to send message');
            }
        } catch (error: any) {
            setFormStatus({
                loading: false,
                message: error.message || 'An error occurred. Please try again later.',
                type: 'error',
            });
        }
    };

    <Head>
        <title>Contact Us | Axiolot Hub - Your Trusted Partner In Technology Solutions For Schools</title>
    </Head>
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-2xl md:max-w-4xl lg:max-w-6xl sm:mx-auto">
                <div data-wow-delay="0.2s" className="absolute wow slideInUp inset-0 bg-gradient-to-r from-royal-lilac to-rasin-black shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div data-wow-delay="0.6s" className="relative wow bounceInUp px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
                        <p className="mt-4 text-gray-600">
                            We’re here to assist you with any questions, support needs, or feedback about Axiolot Hub’s school management solutions. Reach out to us through the form below, or use our contact details to get in touch directly.
                        </p>

                        {/* Contact Form */}
                        <h2 className="mt-6 text-lg font-semibold text-gray-900">Send Us a Message</h2>
                        <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-royal-lilac focus:border-royal-lilac sm:text-sm"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-royal-lilac focus:border-royal-lilac sm:text-sm"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-royal-lilac focus:border-royal-lilac sm:text-sm"
                                    placeholder="Subject of your message"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-royal-lilac focus:border-royal-lilac sm:text-sm"
                                    placeholder="Your message or inquiry"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={formStatus.loading}
                                    className={`w-2/3 md:w-1/3 mx-auto flex justify-center py-3.5 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white ${formStatus.loading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-royal-lilac hover:bg-rasin-black focus:ring-royal-lilac'
                                        } focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                >
                                    {formStatus.loading ? (
                                        <span className="flex items-center">
                                            <svg
                                                className="animate-spin h-5 w-5 mr-2 text-white"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </div>
                            {formStatus.message && (
                                <div className={`mt-4 rounded-xl border ${formStatus.type === 'success' ? 'bg-green-200 border-green-400' : 'bg-red-200 border-red-400'
                                    }`}>
                                    <p
                                        className={`py-3 text-sm text-center ${formStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                                            }`}
                                    >
                                        {formStatus.message}
                                    </p>
                                </div>
                            )}
                        </form>

                        {/* Contact Information */}
                        <h2 className="mt-8 text-lg font-semibold text-gray-900">Contact Information</h2>
                        <p className="mt-2 text-gray-600">
                            Prefer to reach us directly? Use the details below to get in touch with our team.
                        </p>
                        <ul className="list-none mt-4 text-gray-600 space-y-3">
                            <li>
                                <strong>Email:</strong>{' '}
                                <a href="mailto:support@axiolot.com.ng" className="text-blue-600 hover:underline">
                                    support@axiolot.com.ng
                                </a>
                            </li>
                            <li>
                                <strong>Phone:</strong>{' '}
                                <a href="tel:+2347073184665" className="text-blue-600 hover:underline">
                                    +234 70 7318 4665
                                </a>
                            </li>
                            <li>
                                <strong>WhatsApp:</strong>{' '}
                                <a href="https://wa.me/+2347081317077" className="text-blue-600 hover:underline">
                                    +234 70 8131 7077
                                </a>
                            </li>
                        </ul>

                        {/* Address */}
                        <h2 className="mt-8 text-lg font-semibold text-gray-900">Our Address</h2>
                        <p className="mt-2 text-gray-600">
                            Visit or send mail to our office in Lagos, Nigeria.
                        </p>
                        <address className="mt-4 text-gray-600 not-italic">
                            Axiolot Hub<br />
                            Block 4, Opp. St.Faith Schools Ebony Paint Road<br />
                            Enugu State, Nigeria<br />
                            Postal Code: 400012
                        </address>
                        <p className="mt-2 text-gray-600">
                            <a
                                href="https://maps.app.goo.gl/QYmH3ZuJpraisbTJA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                View on Google Maps
                            </a>
                        </p>

                        {/* Social Media */}
                        <h2 className="mt-8 text-lg font-semibold text-gray-900">Connect With Us</h2>
                        <p className="mt-2 text-gray-600">
                            Follow us on social media for updates, tips, and news about our school management solutions.
                        </p>
                        <div className="mt-4 flex space-x-4">
                            <a
                                href="https://twitter.com/axiolothub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-rasin-black"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Twitter">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com/axiolothub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-rasin-black"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Facebook">
                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103v3.333h-2.027c-1.811 0-2.411 1.234-2.411 2.912v1.21h4.554l-.701 3.667H13.125v7.98H9.101z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/company/axiolothub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-rasin-black"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>

                        {/* Business Hours */}
                        <h2 className="mt-8 text-lg font-semibold text-gray-900">Business Hours</h2>
                        <p className="mt-2 text-gray-600">
                            Our team is available to assist you during the following hours:
                        </p>
                        <ul className="list-none mt-4 text-gray-600 space-y-2">
                            <li>Monday – Friday: 9:00 AM – 5:00 PM WAT</li>
                            <li>Saturday: 10:00 AM – 2:00 PM WAT</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
