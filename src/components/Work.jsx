function Work({company, position, years, description}) {
    return (
        <div className="work">
            <h3>{company}</h3>
            <p>{position}</p>
            <p>{years} years</p>
            <p>{description}</p>
        </div>
    )
}

export default Work;