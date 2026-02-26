import React from 'react'

const BigCard = ({id, title, author, content, coverLink, url, isUserLogged} : {id: number, title: string, author: string, content: string, coverLink: string, url: string, isUserLogged: boolean}) => {
    console.log(content);
    return (
        <div>
            <div className='card my-5 border-0'>
                <div className='row g-3 justify-content-center'>
                    <div className='col-md-3'>
                        <img src={coverLink
                        } className='img-fluid rounded-start' alt={title} width={500} height={650} />
                    </div>
                    <div className='col-md-4'>
                        <div className='card-body'>
                            <h5 className='card-title fs-3'>{title}</h5>
                            <h6 className='card-subtitle mb-2 text-muted fs-5'>by {author}</h6>
                            <p className='fs-6'>{content}</p>
                            {
                                isUserLogged ? (
                                    <a href="" className="btn btn-primary w-50">Add to my collection</a>
                                ) : (
                                    <a href="/sign-in" className="btn btn-primary w-50">Login to add to collection</a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigCard
