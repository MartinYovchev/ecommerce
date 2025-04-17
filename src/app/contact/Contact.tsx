'use client';

import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import styles from './Contact.module.scss';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.hero}>
        <h1>Contact Us</h1>
        <p>Get in touch with our team for any inquiries or feedback</p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>Customer Support</h3>
            <p>
              Our dedicated team is available to assist you with any questions
              or concerns.
            </p>
            <a
              href="mailto:support@sneakers.com"
              className={styles.contactLink}
            >
              support@sneakers.com
            </a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>Business Inquiries</h3>
            <p>For partnership opportunities and business-related questions.</p>
            <a
              href="mailto:business@sneakers.com"
              className={styles.contactLink}
            >
              business@sneakers.com
            </a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>Visit Our Store</h3>
            <p>Come see our products in person at our flagship store.</p>
            <address className={styles.address}>
              123 Sneaker Street
              <br />
              Footwear District
              <br />
              New York, NY 10001
            </address>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.06 13.63 6.62 10.79L8.47 8.94C8.9 8.51 9.11 7.91 9.04 7.3L8.75 4.78C8.63 3.77 7.78 3.01 6.76 3.01H5.03C3.9 3.01 2.96 3.95 3.03 5.08C3.56 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>Phone Support</h3>
            <p>Speak directly with our customer service representatives.</p>
            <a href="tel:+18005555555" className={styles.contactLink}>
              1-800-555-5555
            </a>
            <p className={styles.hours}>Monday-Friday: 9am-6pm EST</p>
          </div>
        </div>

        <div className={styles.contactForm}>
          <div className={styles.formContainer}>
            <h2>Send Us a Message</h2>
            <p>
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>

            {submitted ? (
              <div className={styles.successMessage}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                    fill="currentColor"
                  />
                </svg>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for contacting us. We&apos;ll respond to your
                  inquiry as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.errorInput : ''}
                  />
                  {errors.name && (
                    <span className={styles.errorMessage}>{errors.name}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.errorInput : ''}
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? styles.errorInput : ''}
                  />
                  {errors.subject && (
                    <span className={styles.errorMessage}>
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? styles.errorInput : ''}
                  />
                  {errors.message && (
                    <span className={styles.errorMessage}>
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className={styles.mapSection}>
        <h2>Our Location</h2>
        <div className={styles.mapContainer}>
          {/* Placeholder for a map - in a real app, you would integrate with Google Maps or similar */}
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapMarker} />
            <p>Map view is not available in this demo.</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsButton}
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          <div className={styles.faqItem}>
            <h3>What is your return policy?</h3>
            <p>
              We offer a 30-day return policy for all unworn items in their
              original packaging. Please visit our Returns page for more
              information.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How can I track my order?</h3>
            <p>
              Once your order ships, you will receive a confirmation email with
              tracking information. You can also check your order status by
              logging into your account.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Do you ship internationally?</h3>
            <p>
              Yes, we ship to most countries worldwide. Shipping rates and
              delivery times vary by location.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I know if a shoe is in my size?</h3>
            <p>
              Each product page includes a size guide. If your size is out of
              stock, you can sign up for notifications when it becomes
              available.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <h2>Connect With Us</h2>
        <p>
          Follow us on social media for the latest updates, promotions, and
          sneaker releases.
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.582 7.15a2.513 2.513 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.382c-.85.255-1.513.918-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814c.255.85.918 1.513 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.513 2.513 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.85zM10 15V9l5.2 3-5.2 3z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
