import React from 'react'
import { Link } from 'react-router-dom'

export default function MusicCard({ url, like, name, description }) {
    return (
        <Link className="kartina-knigi">
            <img src={url} alt="" />
            <p className="spartak">{name}</p>
            <p className="vdok">
                {description}
            </p>
        </Link>
    )
}
