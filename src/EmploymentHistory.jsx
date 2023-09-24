function EmploymentHistory({ totalShown }) {
    return(
        <>
            <h1>Employment History</h1>
            <button >Add</button>
            <h2>Role: </h2>
            <input type='text' maxLength={50} />
            <h2>Organisation: </h2>
            <input type='text' maxLength={25} />
            <h2>Start date: </h2>
            <input type='date' />
            <h2>End date: </h2>
            <input type='date' />
            <button >Delete</button>
        </>


    )
}


export default EmploymentHistory