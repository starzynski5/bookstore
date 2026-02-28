import axios from 'axios'
import React from 'react'

const SubscribedBookCard = ({id, title, author, coverLink, url} : {id: number, title: string, author: string, coverLink: string, url: string}) => {
    const handleUnsubscribe = async () => {
        const res = await axios.post(`/api/books/unsubscribe`, { bookId: id });

        const message = res.data.message;

        console.log(message);
    }

    return (
        <div className='card'>
            <img className='card-img-top' src={coverLink} alt={title} />
            <div className='card-body px-3'>
                <span className='h6 card-title'>{title}</span>
                <span className='fs-7 card-title my-3'>by {author}</span>
                <a onClick={handleUnsubscribe} className="btn btn-danger my-0">Unsubscribe</a>
            </div>
        </div>
    )
}

export default SubscribedBookCard
