'use client';

import { useState, FormEvent } from 'react';
import styles from './ForgotPassword.module.scss';
import { requestPasswordReset } from '../utils/userUtils';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      const success = await requestPasswordReset(email);
      if (success) {
        setIsSubmitted(true);
      } else {
        setError('Failed to send reset instructions. Please try again.');
      }
    } catch (error) {
      console.error('Password reset request failed:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <h1 className={styles.title}>Check Your Email</h1>
          <p className={styles.message}>
            We&apos;ve sent password reset instructions to {email}
          </p>
          <p className={styles.helpText}>
            If you don&apos;t see the email, please check your spam folder.
          </p>
          <button
            className={styles.backButton}
            onClick={() => (window.location.href = '/login')}
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Forgot Password</h1>
        <p className={styles.description}>
          Enter your email address and we&apos;ll send you instructions to reset
          your password.
        </p>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="Enter your email"
          />
          {error && <div className={styles.errorMessage}>{error}</div>}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Reset Instructions'}
        </button>

        <button
          type="button"
          className={styles.backButton}
          onClick={() => (window.location.href = '/login')}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};
