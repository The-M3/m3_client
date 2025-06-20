"use client";

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './sponsor.module.scss';
import { Button } from '@/components/ui';

interface SponsorFormValues {
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
}

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  companyName: Yup.string()
    .min(2, 'Company name must be at least 2 characters')
    .required('Company/Business name is required'),
  phoneNumber: Yup.string()
    .matches(/^[+]?[\d\s\-\(\)]+$/, 'Invalid phone number format')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
});

const SponsorForm: React.FC = () => {
  const initialValues: SponsorFormValues = {
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
  };

  const handleSubmit = (values: SponsorFormValues, { setSubmitting, resetForm }: any) => {
    console.log('Form submitted:', values);
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your interest in sponsoring The M3! We will get back to you soon.');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className={styles.sponsorForm}>
      <h2 className={styles.title}>We’re happy to have you Sponsor The M3</h2>
      <p className={styles.description}>
        Drop your details in the form below and we’ll get in touch with you within 24hrs
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.fieldGroup}>
              <Field
                type="text"
                name="fullName"
                placeholder="Full name"
                className={`${styles.inputField} ${errors.fullName && touched.fullName ? styles.error : ''}`}
              />
              <ErrorMessage name="fullName" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.fieldGroup}>
              <Field
                type="email"
                name="email"
                placeholder="Email address"
                className={`${styles.inputField} ${errors.email && touched.email ? styles.error : ''}`}
              />
              <ErrorMessage name="email" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.fieldGroup}>
              <Field
                type="text"
                name="companyName"
                placeholder="Company / Business name"
                className={`${styles.inputField} ${errors.companyName && touched.companyName ? styles.error : ''}`}
              />
              <ErrorMessage name="companyName" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.fieldGroup}>
              <Field
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                className={`${styles.inputField} ${errors.phoneNumber && touched.phoneNumber ? styles.error : ''}`}
              />
              <ErrorMessage name="phoneNumber" component="div" className={styles.errorMessage} />
            </div>

            <Button
              className={styles.submitButton}
            >
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SponsorForm;