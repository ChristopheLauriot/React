import React from 'react'
import "./Profile.css"


function toUpper(s) {
    return s.toUpperCase()
}

function Profile() {

    const name = "GAURAT"
    const firstName = "Fred"
    const profileName = "Katherine Johnson"
    const urlProfile = "https://i.imgur.com/MK3eW3Am.jpg"

    return (
        <>
            <h2>Profile</h2>
            <img
                src={urlProfile}
                alt={toUpper(profileName) + " " + urlProfile}
            />
            <hr />
            <div className="bg" style={{

                color: 'pink'
            }}>

                Hello {toUpper(name)} {toUpper(firstName)}
            </div>
        </>
    )
}

export default Profile
