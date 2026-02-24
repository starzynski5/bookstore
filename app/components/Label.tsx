import React from 'react'

const Label = ({text, bootstrapIcon} : {text: string, bootstrapIcon: string}) => {
    return (
        <span className={`fs-5 ${bootstrapIcon}`}> {text}</span>
    )
}

export default Label
