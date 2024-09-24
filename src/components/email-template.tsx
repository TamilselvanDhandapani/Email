import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;  // Changed to string to allow flexibility for phone numbers
  company: string;
  jobTitle: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, lastName, email, phone, company, jobTitle
}) => (
  <>
    <h1> Hello Team </h1>
    <h2>{firstName} {lastName} has requested a demo about {company}</h2>
    <h2>Email: {email}</h2>
    <h2>Phone: {phone}</h2>
    <p>Job Title: {jobTitle}</p>
  </>
);
