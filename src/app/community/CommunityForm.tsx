"use client";

import React, { useMemo, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import countryList from 'react-select-country-list'
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import styles from '../join/sponsorTab.module.scss';
import { Button } from '@/components/ui';
import supabase from '@/supabase-client';
import { Autocomplete } from '@/components/ui/autocomplete/Autocomplete';


interface CommunityFormValues {
  fullname: string;
  email: string;
  company: string;
  linkedInProfile: string;
  country: string;
  primaryFocus: string;
  value: string;
  whyJoin: string;
  projectLed: string;
  openToSpeak: string;
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
  linkedInProfile: Yup.string()
    .required('LinkedIn profile is required'),
  country: Yup.string()
    .required('Country is required'),
  primaryFocus: Yup.string()
    .required('Primary focus is required'),
  value: Yup.string()
    .required('Value is required'),
  whyJoin: Yup.string()
    .required('Why join is required'),
  projectLed: Yup.string()
    .required('Project led is required'),
  openToSpeak: Yup.string()
    .required('Open to speak is required'),
});

const errorCodes: Record<string, string> = {
  "23505": "Email/Phone already registered"
}

const CommunityForm: React.FC = () => {
  const countries = useMemo(() => countryList().getData(), [])
  console.log('countries', countries)
  const [isLoading, setIsLoading] = useState(false);
  const initialValues: CommunityFormValues = {
    fullname: '',
    email: '',
    company: '',
    linkedInProfile: '',
    country: '',
    primaryFocus: '',
    value: '',
    whyJoin: '',
    projectLed: '',
    openToSpeak: '',
    };

  const handleSubmit = async (values: CommunityFormValues) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.from("community").insert(values).single()
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
        <h2 className={styles.title}>Join the M3 Community</h2>
        <p className={styles.description}>
          Where the brightest minds in African payments gather to solve the continent’s most complex infrastructure problems. Our community is where deep technical knowledge meets real-world experience. Gain insights, share ideas, explore innovations, and stay ahead in the fast-evolving world of fintech infrastructure.
        </p>
        <div className={styles.communityPerks}>
          <h2>Join us to</h2>
          <ul>
            <li>⁠Exclusive conversations</li>
            <li>⁠Curated events & meetups</li>
            <li>Real-world challenges, real-time solutions</li>
          </ul>

          <p>Ready to shape the next era of payments in Africa?</p>

        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, setFieldValue }) => {
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
                    placeholder="Current Role & Company"
                    className={`${styles.inputField} ${errors.company && touched.company ? styles.error : ''}`}
                  />
                  <ErrorMessage name="company" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>
                  <Field
                    type="text"
                    name="linkedInProfile"
                    placeholder="⁠LinkedIn profile url"
                    className={`${styles.inputField} ${errors.linkedInProfile && touched.linkedInProfile ? styles.error : ''}`}
                  />
                  <ErrorMessage name="linkedInProfile" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>
                  <Autocomplete suggestions={countries} onChange={(value) => setFieldValue("country", value.label)} />
                  <ErrorMessage name="country" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="primaryFocus">What&apos;s your primary focus in the payments industry? (e.g., fintech founder, payments executive, crypto specialist, banking leader)</label>
                  <Field
                    type="text"
                    name="primaryFocus"
                    placeholder="Enter here..."
                    className={`${styles.inputField} ${errors.primaryFocus && touched.primaryFocus ? styles.error : ''}`}
                  />
                  <ErrorMessage name="primaryFocus" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="value">What specific value would you bring to other members of The-M3?
                  </label>
                  <Field
                    type="text"
                    name="value"
                    placeholder="Enter here..."
                    className={`${styles.inputField} ${errors.value && touched.value ? styles.error : ''}`}
                  />
                  <ErrorMessage name="value" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="whyJoin">Why do you want to join this exclusive community, and how will you actively contribute?
                  </label>
                  <Field
                    type="text"
                    name="whyJoin"
                    placeholder="Enter here..."
                    className={`${styles.inputField} ${errors.whyJoin && touched.whyJoin ? styles.error : ''}`}
                  />
                  <ErrorMessage name="whyJoin" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="projectLed">⁠Share one significant payment industry achievement or project you've led
                  </label>
                  <Field
                    type="text"
                    name="projectLed"
                    placeholder="Enter here..."
                    className={`${styles.inputField} ${errors.projectLed && touched.projectLed ? styles.error : ''}`}
                  />
                  <ErrorMessage name="projectLed" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="value">⁠Would you be open to speaking at any of our community events?
                  </label>
                  <Field
                    type="text"
                    name="projectLed"
                    placeholder="Yes/No"
                    className={`${styles.inputField} ${errors.projectLed && touched.projectLed ? styles.error : ''}`}
                  />
                  <ErrorMessage name="projectLed" component="div" className={styles.errorMessage} />
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
            )
          }}
        </Formik>
      </div>
    </>
  );
};

export default CommunityForm;