import React from 'react'

const NominationList = ({ nominated }) => {
    return (
        <div>
            { nominated.map((movie, idx) => <h6 key={idx}>{ movie }</h6>) }
        </div>
    )
}

export default NominationList
