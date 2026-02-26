import React from 'react'

const Card = ({title, author, content, coverLink, url} : {title: string, author: string, content: string, coverLink: string, url: string}) => {
    return (
        <div className='card'>
            <img className='card-img-top' src={coverLink} alt={title} />
            <div className='card-body px-3'>
                <span className='h6 card-title'>{title}</span>
                <span className='fs-7 card-title'>by {author}</span>
                <span className='fs-6 card-text'>{content.slice(0, 50)}...</span><br/>
                <a href={`/book/${url}`} className="btn btn-primary">View Details</a>
            </div>
        </div>
    )
}

export default Card
