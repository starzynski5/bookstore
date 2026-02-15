import React from 'react'

const BookCard = () => {
    return (
        <div className='card border-dark col-2 m-4' style={{borderRadius: "20px"}}>
            <img className='card-img-top' style={{borderTopLeftRadius: "20px", borderTopRightRadius: "20px", height: "250px", objectFit: "cover"}} src='https://m.media-amazon.com/images/I/61HkdyBpKOL.jpg' />
            <div className='card-body'>
                <p className='card-title fs-3'>1984</p>
                <p className='card-text font-weight-light fs-6'>by George Orwell</p>
                <p className='card-text fs-6'>Powieść dystopijna ukazująca świat totalitarnego państwa rządzonego przez...</p>
            </div>
        </div>
    )
}

export default BookCard