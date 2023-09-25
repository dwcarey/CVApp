function Display({
    personalData,
    contactData,
    qualificationData,
    employmentData,
    otherInfoData,
  }) {
    return (
      <div>
        
        <h3>Personal Details</h3>
        <p>{personalData.firstName}{personalData.lastName}</p>
        <p>Age: {personalData.age}</p>
        <p>Location: {personalData.location}</p>
  
        <h3>Contact Details</h3>
        <p>Phone Number: {contactData.phoneNumber}</p>
        <p>Email Address: {contactData.emailAddress}</p>
        <p>Other: {contactData.other}</p>
  
        <h3>Qualifications</h3>
        {qualificationData.map((qualification, index) => (
          <div key={index}>
            <p>Qualification: {qualification.qualification}</p>
            <p>Institution: {qualification.institution}</p>
            <p>Date Completed: {qualification.dateCompleted}</p>
          </div>
        ))}
  
        <h3>Employment History</h3>
        {employmentData.map((employment, index) => (
          <div key={index}>
            <p>Role: {employment.role}</p>
            <p>Organisation: {employment.Organisation}</p>
            <p>Start Date: {employment.startDate}</p>
            <p>End Date: {employment.endDate}</p>
          </div>
        ))}
  
        <h3>Other Relevant Information</h3>
        {otherInfoData.map((info, index) => (
          <div key={index}>
            <p>Title: {info.title}</p>
            <p>Information: {info.information}</p>
          </div>
        ))}
      </div>
    );
  }
  
export default Display;