"use client";

import React, { useMemo, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import countryList from 'react-select-country-list'
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import styles from '../join/sponsorTab.module.scss';
import { Button } from '@/components/ui';
import supabase from '../../../supabase-client';
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
  project: string;
  openToSpeak: boolean;
}

type CommunityFormKeys = keyof CommunityFormValues;

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
  project: Yup.string()
    .required('Project is required'),
  openToSpeak: Yup.boolean()
    .required('Open to speak is required'),
});

export const Msg = ({ data }: { data: { title: string; text: string } }) => {
  return (
    <div className="msg-container">
      <p className="msg-title">{data.title}</p>
      <code style={{ fontSize: "1rem" }}>{data.text}</code>
    </div>
  );
};


const CommunityForm: React.FC = () => {
  const countries = useMemo(() => countryList().getData(), [])
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
    project: '',
    openToSpeak: true,
  };



  const handleSubmit = async (values: CommunityFormValues) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.from("communityMembers").insert(values).single()
      if (error) {
        console.error(error)
        toast.error(Msg({ data: { title: "Something went wrong!", text: error.message } }));
      } else {
        toast.success("Thank you!");

      }
    } catch (error) {
      console.error(error)
      toast.error(Msg({ data: { title: "Error", text: "Something went wrong!" } }));
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
                  <Autocomplete placeholder="Country" suggestions={countries} onChange={(value) => setFieldValue("country", value.label)} />
                  <ErrorMessage name="country" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>

                  <textarea
                    placeholder="What&apos;s your primary focus in the payments industry? (e.g., fintech founder, payments executive, crypto specialist, banking leader)
"
                    rows={3}
                    style={{ width: '100%' }}
                    className={`${styles.inputField} ${errors.primaryFocus && touched.primaryFocus ? styles.error : ''}`}
                    name="primaryFocus"

                  />
                  <ErrorMessage name="primaryFocus" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>

                  <textarea
                    name="value"
                    placeholder="What specific value would you bring to other members of The-M3?"
                    rows={2}
                    style={{ width: '100%' }}
                    className={`${styles.inputField} ${errors.value && touched.value ? styles.error : ''}`}

                  />
                  <ErrorMessage name="value" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>
                   <textarea
                   name="whyJoin"
                    placeholder="Why do you want to join this exclusive community, and how will you actively contribute?"
                    rows={2}
                    style={{ width: '100%' }}
                    className={`${styles.inputField} ${errors.whyJoin && touched.whyJoin ? styles.error : ''}`}

                  />
                  <ErrorMessage name="whyJoin" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>
                  {/* <label htmlFor="project">⁠Share one significant payment industry achievement or project you&apos;ve led
                  </label> */}
                                     <textarea
                   name="project"
                   placeholder="Share one significant payment industry achievement or project you&apos;ve led"
                   className={`${styles.inputField} ${errors.project && touched.project ? styles.error : ''}`}

                  />
                  <ErrorMessage name="project" component="div" className={styles.errorMessage} />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="value">⁠Would you be open to speaking at any of our community events?
                  </label>
                  <div className={styles.btnGroup}>
                    <button type="button" onClick={() => setFieldValue("openToSpeak", true)} className={`${styles.btnOption} ${values.openToSpeak === true ? styles.btnOptionSelected : ""}`}>Yes</button>
                    <button type="button" onClick={() => setFieldValue("openToSpeak", false)} className={`${styles.btnOption} ${values.openToSpeak === false ? styles.btnOptionSelected : ""}`}>No</button>
                  </div>
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