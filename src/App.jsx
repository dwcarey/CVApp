import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Display from './Display';

function App() {
  const [formData, setFormData] = useState({
    personalData: {
      firstName: '',
      lastName: '',
      age: '',
      location: '',
    },
    contactData: {
      phoneNumber: '',
      emailAddress: '',
      other: '',
    },
    qualificationData: [
      { qualification: '', institution: '', dateCompleted: '' },
    ],
    employmentData: [
      { role: '', Organisation: '', startDate: '', endDate: '' },
    ],
    otherInfoData: [
      { title: '', information: '' },
    ],
  });

  // Function to update form data
  const updateFormData = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  return (
    <div className='appContainer'>
      <h1 className='headerText'>CV Generator</h1>
      <div className='formContainer'>
        <Form formData={formData} updateFormData={updateFormData} />
      </div>
      <div className='displayContainer'>
        <Display
        personalData={formData.personalData}
        contactData={formData.contactData}
        qualificationData={formData.qualificationData}
        employmentData={formData.employmentData}
        otherInfoData={formData.otherInfoData}
      />

      </div>
      <div className='footer'>
        <p>Such Wizardry</p>
      </div>
    </div>
  );
}

export default App;