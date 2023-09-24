import { useState } from "react"
import PersonalDetails from "./PersonalDetails"
import ContactDetails from "./ContactDetails"
import QualificationDetails from "./QualificationDetails"
import EmploymentHistory from "./EmploymentHistory"
import OtherInfo from "./OtherInfo"

function Form() {
    return(
        <>
            <PersonalDetails />
            <ContactDetails />
            <QualificationDetails />
            <EmploymentHistory />
            <OtherInfo />
        </>


    )
}


export default Form





//section 1
//first name
//last name
//age
//location

//section 2
//phone number
//email address
//website/other

//section 3
//education/qualifications
    //qualification
    //institution
    //completed date

//section 4
//employment history
    //role
    //company
    //period
    //role information

//section 5
//extra information/roles
    