function Education({school, study, start, end}) {
    return (
        <div className="education">
            <h2>Education</h2>
            <p>{school}</p>
            <p>Degree: {study}</p>
            <p>Dates {start} - {end}</p>
        </div>
    )
}

export default Education;