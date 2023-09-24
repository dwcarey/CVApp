function QualificationDetails() {
    return(
        <>
            <h1>Qualifications</h1>
            <button>Add</button>

            <h2>Qualification: </h2>
            <input type='text' maxLength={50} />
            <h2>Institution: </h2>
            <input type='text' maxLength={50} />
            <h2>Date Completed: </h2>
            <input type='date' />
            
        </>


    )
}


export default QualificationDetails