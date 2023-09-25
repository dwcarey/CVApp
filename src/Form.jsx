import React, { useState } from "react";


function Form() {
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    location: "",
  });

  const [contactData, setContactData] = useState({
    phoneNumber: "",
    emailAddress: "",
    other: "",
  });

  const [qualificationData, setQualificationData] = useState([
    { qualification: "", institution: "", dateCompleted: "" },
  ]);

  const [employmentData, setEmploymentData] = useState([
    { role: "", Organisation: "", startDate: "", endDate: "" },
  ]);

  const [otherInfoData, setOtherInfoData] = useState([
    { title: "", information: "" },
  ]);

  function addQualification() {
    setQualificationData([...qualificationData, { qualification: "", institution: "", dateCompleted: "" }]);
  }

  function removeQualification(index) {
    const updatedQualificationData = [...qualificationData];
    updatedQualificationData.splice(index, 1);
    setQualificationData(updatedQualificationData);
  }

  function updateQualificationData(index, field, value) {
    const updatedQualificationData = [...qualificationData];
    updatedQualificationData[index][field] = value;
    setQualificationData(updatedQualificationData);
  }

  function addEmployment() {
    setEmploymentData([...employmentData, { role: "", Organisation: "", startDate: "", endDate: "" }]);
  }
  
  function updateEmploymentData(index, field, value) {
    const updatedEmploymentData = [...employmentData];
    updatedEmploymentData[index][field] = value;
    setEmploymentData(updatedEmploymentData);
  }
  
  function removeEmployment(index) {
    const updatedEmploymentData = [...employmentData];
    updatedEmploymentData.splice(index, 1);
    setEmploymentData(updatedEmploymentData);
  }
  
  function addOtherInfo() {
    setOtherInfoData([...otherInfoData, { title: "", information: "" }]);
  }
  
  function updateOtherInfoData(index, field, value) {
    const updatedOtherInfoData = [...otherInfoData];
    updatedOtherInfoData[index][field] = value;
    setOtherInfoData(updatedOtherInfoData);
  }
  
  function removeOtherInfo(index) {
    const updatedOtherInfoData = [...otherInfoData];
    updatedOtherInfoData.splice(index, 1);
    setOtherInfoData(updatedOtherInfoData);
  }


  return (
    <div>
      <h2>Personal Details</h2>
      <input
        type="text"
        placeholder="First name"
        value={personalData.firstName}
        onChange={(e) =>
          setPersonalData({ ...personalData, firstName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last name"
        value={personalData.lastName}
        onChange={(e) =>
          setPersonalData({ ...personalData, lastName: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Age"
        value={personalData.age}
        onChange={(e) =>
          setPersonalData({ ...personalData, age: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Location"
        value={personalData.location}
        onChange={(e) =>
          setPersonalData({ ...personalData, location: e.target.value })
        }
      />

      <h2>Contact Details</h2>
      <input
        type="number"
        placeholder="Phone number"
        value={contactData.phoneNumber}
        onChange={(e) =>
          setContactData({ ...contactData, phoneNumber: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Email address"
        value={contactData.emailAddress}
        onChange={(e) =>
          setContactData({ ...contactData, emailAddress: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Other"
        value={contactData.other}
        onChange={(e) =>
          setContactData({ ...contactData, other: e.target.value })
        }
      />

<h2>Qualifications</h2>
{qualificationData.map((qualification, index) => (
  <div key={index}>
    <input
      type="text"
      placeholder="Qualification"
      value={qualification.qualification}
      onChange={(e) =>
        updateQualificationData(index, "qualification", e.target.value)
      }
    />
    <input
      type="text"
      placeholder="Institution"
      value={qualification.institution}
      onChange={(e) =>
        updateQualificationData(index, "institution", e.target.value)
      }
    />
    <input
      type="date"
      placeholder="Date Completed"
      value={qualification.dateCompleted}
      onChange={(e) =>
        updateQualificationData(index, "dateCompleted", e.target.value)
      }
    />
    <button onClick={() => removeQualification(index)}>Delete</button>
  </div>
))}
<button onClick={addQualification}>Add</button>

      <h2>Employment History</h2>
{employmentData.map((employment, index) => (
  <div key={index}>
    <input
      type="text"
      placeholder="Role"
      value={employment.role}
      onChange={(e) =>
        updateEmploymentData(index, "role", e.target.value)
      }
    />
    <input
      type="text"
      placeholder="Organisation"
      value={employment.Organisation}
      onChange={(e) =>
        updateEmploymentData(index, "Organisation", e.target.value)
      }
    />
    <input
      type="date"
      placeholder="Start Date"
      value={employment.startDate}
      onChange={(e) =>
        updateEmploymentData(index, "startDate", e.target.value)
      }
    />
    <input
      type="date"
      placeholder="End Date"
      value={employment.endDate}
      onChange={(e) =>
        updateEmploymentData(index, "endDate", e.target.value)
      }
    />
    <button onClick={() => removeEmployment(index)}>Delete</button>
  </div>
))}
<button onClick={addEmployment}>Add</button>

<h2>Other Relevant Information</h2>
{otherInfoData.map((info, index) => (
  <div key={index}>
    <input
      type="text"
      placeholder="Title"
      value={info.title}
      onChange={(e) =>
        updateOtherInfoData(index, "title", e.target.value)
      }
    />
    <input
      type="text"
      placeholder="Information"
      value={info.information}
      onChange={(e) =>
        updateOtherInfoData(index, "information", e.target.value)
      }
    />
    <button onClick={() => removeOtherInfo(index)}>Delete</button>
  </div>
))}
<button onClick={addOtherInfo}>Add</button>
    </div>
  );
}

export default Form;