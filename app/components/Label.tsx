import React from 'react'

const Label = ({text, bootstrapIcon, fs} : {text: string, bootstrapIcon: string, fs: number}) => {
    return (
        <span className={`fs-${fs} ${bootstrapIcon}`}> {text}</span>
    )
}

export default Label
