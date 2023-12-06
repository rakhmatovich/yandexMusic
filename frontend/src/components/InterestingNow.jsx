import React from 'react'

export default function InterestingNow({ image, heading, title }) {
    return (
        <div className="oblojka">
            <img className="img-music" src={image} alt="" />
            <div className="playlist">
                <p>
                    <a>
                        {heading}
                    </a>
                </p>
                <p>{title}</p>
            </div>
        </div>
    )
}
