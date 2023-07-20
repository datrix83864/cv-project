

function GeneralInfo ({name, email, phone, status}) {
    if(!status) {
    return (
        <div className="general-info">
            <h2>General Info</h2>
            <p id="name">{name}</p>
            <p id="email">Email: {email}</p>
            <p id="phone">Phone: {phone}</p>
        </div>
    )
    } else {
        return (
            <div className="general-info">
            <h2>General Info</h2>
            <p>Name: <input type="text" defaultValue={name} id='name'/></p>
            <p>Email: <input type="text" defaultValue={email} id='email'/></p>
            <p>Phone: <input type="text" defaultValue={phone} id='phone'/></p>
        </div>
        )
    }
}

export default GeneralInfo;