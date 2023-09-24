function PersonalDetails() {
    return(
        <>
            <h1>Personal Details</h1>
            <h2>First name: </h2>
            <input type='text' maxLength={25} />
            <h2>Last name: </h2>
            <input type='text' maxLength={25} />
            <h2>Age: </h2>
            <input type='number' maxLength={10} />
            <h2>Location: </h2>
            <input type='text' maxLength={25} />
        </>


    )
}


export default PersonalDetails