function Form({ formData, updateFormData }) {


function addQualification() {
  const updatedQualificationData = [
    ...formData.qualificationData,
    { qualification: '', institution: '', dateCompleted: '' },
  ];
  updateFormData('qualificationData', updatedQualificationData);
}

function removeQualification(index) {
  const updatedQualificationData = [...formData.qualificationData];
  updatedQualificationData.splice(index, 1);
  updateFormData('qualificationData', updatedQualificationData);
}

function updateQualificationData(index, field, value) {
  const updatedQualificationData = [...formData.qualificationData];
  updatedQualificationData[index][field] = value;
  updateFormData('qualificationData', updatedQualificationData);
}

  function addEmployment() {
    const updatedEmploymentData = [...formData.employmentData, 
      { role: "", Organisation: "", startDate: "", endDate: "" }]
      updateFormData('employmentData', updatedEmploymentData);
  }
  
  function updateEmploymentData(index, field, value) {
    const updatedEmploymentData = [...formData.employmentData];
    updatedEmploymentData[index][field] = value;
    updateFormData('employmentData', updatedEmploymentData);
  }
  
  function removeEmployment(index) {
    const updatedEmploymentData = [...formData.employmentData];
    updatedEmploymentData.splice(index, 1);
    updateFormData('employmentData', updatedEmploymentData);
  }
  
  function addOtherInfo() {
    const updatedOtherInfoData = [...formData.otherInfoData, { title: "", information: "" }];
    updateFormData('otherInfoData', updatedOtherInfoData);
  }
  
  function updateOtherInfoData(index, field, value) {
    const updatedOtherInfoData = [...formData.otherInfoData];
    updatedOtherInfoData[index][field] = value;
    updateFormData('otherInfoData', updatedOtherInfoData);
  }
  
  function removeOtherInfo(index) {
    const updatedOtherInfoData = [...formData.otherInfoData];
    updatedOtherInfoData.splice(index, 1);
    updateFormData('otherInfoData', updatedOtherInfoData);
  }


  return (
    <div>
      <h2>Personal Details</h2>
      <input
        type="text"
        placeholder="First name"
        value={formData.personalData.firstName}
        onChange={(e) =>
          updateFormData('personalData', {
            ...formData.personalData,
            firstName: e.target.value
          })
        }
      />
      <input
  type="text"
  placeholder="Last name"
  value={formData.personalData.lastName}
  onChange={(e) =>
    updateFormData('personalData', {
      ...formData.personalData,
      lastName: e.target.value
    })
  }
/>

<input
  type="number"
  placeholder="Age"
  value={formData.personalData.age}
  onChange={(e) =>
    updateFormData('personalData', {
      ...formData.personalData,
      age: e.target.value
    })
  }
/>

<input
  type="text"
  placeholder="Location"
  value={formData.personalData.location}
  onChange={(e) =>
    updateFormData('personalData', {
      ...formData.personalData,
      location: e.target.value
    })
  }
/>

      <h2>Contact Details</h2>
      <input
  type="number"
  placeholder="Phone number"
  value={formData.contactData.phoneNumber}
  onChange={(e) =>
    updateFormData('contactData', {
      ...formData.contactData,
      phoneNumber: e.target.value
    })
  }
/>

<input
  type="text"
  placeholder="Email address"
  value={formData.contactData.emailAddress}
  onChange={(e) =>
    updateFormData('contactData', {
      ...formData.contactData,
      emailAddress: e.target.value
    })
  }
/>

<input
  type="text"
  placeholder="Other"
  value={formData.contactData.other}
  onChange={(e) =>
    updateFormData('contactData', {
      ...formData.contactData,
      other: e.target.value
    })
  }
/>


<h2>Qualifications</h2>
{formData.qualificationData.map((qualification, index) => (
  <div key={index}>
<input
  type="text"
  placeholder="Qualification"
  value={qualification.qualification}
  onChange={(e) =>
    updateQualificationData(index, 'qualification', e.target.value)
  }
/>

<input
  type="text"
  placeholder="Institution"
  value={qualification.institution}
  onChange={(e) =>
    updateQualificationData(index, 'institution', e.target.value)
  }
/>

<input
  type="date"
  placeholder="Date Completed"
  value={qualification.dateCompleted}
  onChange={(e) =>
    updateQualificationData(index, 'dateCompleted', e.target.value)
  }
/>

    <button onClick={() => removeQualification(index)}>Delete</button>
  </div>
))}
<button className="addButton" onClick={addQualification}>Add Qualification Information</button>

      <h2>Employment History</h2>
{formData.employmentData.map((employment, index) => (
  <div key={index}>
    <input
  type="text"
  placeholder="Role"
  value={employment.role}
  onChange={(e) =>
    updateEmploymentData(index, 'role', e.target.value)
  }
/>

<input
  type="text"
  placeholder="Organisation"
  value={employment.Organisation}
  onChange={(e) =>
    updateEmploymentData(index, 'Organisation', e.target.value)
  }
/>

<input
  type="date"
  placeholder="Start Date"
  value={employment.startDate}
  onChange={(e) =>
    updateEmploymentData(index, 'startDate', e.target.value)
  }
/>

<input
  type="date"
  placeholder="End Date"
  value={employment.endDate}
  onChange={(e) =>
    updateEmploymentData(index, 'endDate', e.target.value)
  }
/>

    <button onClick={() => removeEmployment(index)}>Delete</button>
  </div>
))}
<button className="addButton" onClick={addEmployment}>Add Employment Information</button>

<h2>Other Relevant Information</h2>
{formData.otherInfoData.map((info, index) => (
  <div key={index}>
<input
  type="text"
  placeholder="Title"
  value={info.title}
  onChange={(e) =>
    updateOtherInfoData(index, 'title', e.target.value)
  }
/>

<input
  type="text"
  placeholder="Information"
  value={info.information}
  onChange={(e) =>
    updateOtherInfoData(index, 'information', e.target.value)
  }
/>

    <button onClick={() => removeOtherInfo(index)}>Delete</button>
  </div>
))}
<button className="addButton" onClick={addOtherInfo}>Add Other Information</button>
    </div>
  );
}

export default Form;