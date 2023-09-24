function ContactDetails() {
    return(
        <>
            <h1>Contact Details</h1>
            <h2>Phone number: </h2>
            <input type='number' maxLength={10} />
            <h2>Email address: </h2>
            <input type='text' maxLength={50} />
            <h2>Other: </h2>
            <input type='text' maxLength={50} />
        </>


    )
}


export default ContactDetails