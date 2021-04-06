import React from 'react'

export default function SectionHeading({
    heading,
    subHeading
}) {
    return (
        <div className="sec-heading center">
            <h2>{heading}</h2>
            <p>{subHeading}.</p>
        </div>
    )
}
