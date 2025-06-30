"use client";

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import styles from './sponsorTab.module.scss';
import { Button } from '@/components/ui';
import supabase from '@/supabase-client';


interface SponsorFormValues {
  fullname: string;
  email: string;
  company: string;
  phone: string;
}

const validationSchema = Yup.object({
  fullname: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  company: Yup.string()
    .min(2, 'Company name must be at least 2 characters')
    .required('Company/Business name is required'),
  phone: Yup.string()
    .matches(/^[+]?[\d\s\-\(\)]+$/, 'Invalid phone number format')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
});

const errorCodes: Record<string, string> = {
  "23505": "Email already registered"
}

const SponsorForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const initialValues: SponsorFormValues = {
    fullname: '',
    email: '',
    company: '',
    phone: '',
  };

  const handleSubmit = async (values: SponsorFormValues) => {
    setIsLoading(true);
    try {
      const {error} = await supabase.from("sponsors").insert(values).single()
      if (error) {
        console.error(error)
        toast.error(`${errorCodes[error.code] || 'Something went wrong!'}`);
      } else {
        toast.success("Thank you!");
      }
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong!");
    }
    setIsLoading(false);
  };

  return (
    <>
    <ToastContainer />
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
        {({ errors, touched }) =>{ 
          return (
          <Form className={styles.form}>
            <div className={styles.fieldGroup}>
              <Field
                type="text"
                name="fullname"
                placeholder="Full name"
                className={`${styles.inputField} ${errors.fullname && touched.fullname ? styles.error : ''}`}
              />
              <ErrorMessage name="fullname" component="div" className={styles.errorMessage} />
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
                name="company"
                placeholder="Company / Business name"
                className={`${styles.inputField} ${errors.company && touched.company ? styles.error : ''}`}
              />
              <ErrorMessage name="company" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.fieldGroup}>
              <Field
                type="tel"
                name="phone"
                placeholder="Phone number"
                className={`${styles.inputField} ${errors.phone && touched.phone ? styles.error : ''}`}
              />
              <ErrorMessage name="phone" component="div" className={styles.errorMessage} />
            </div>

            <Button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
              isLoading={isLoading}
            >
              SUBMIT
            </Button>
          </Form>
        )}}
      </Formik>
    </div>
    </>
  );
};

export default SponsorForm;