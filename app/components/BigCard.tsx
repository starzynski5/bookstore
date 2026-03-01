import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

const BigCard = ({id, title, author, content, coverLink, isUserLogged} : {id: number, title: string, author: string, content: string, coverLink: string, isUserLogged: boolean}) => {

    const router = useRouter();

    const handleSubmit = async () => {
        const res = await axios.post("/api/subscribe", {
            bookId: id
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        if (res.status === 200) {
            router.push("/dashboard");
        } else {
            router.refresh();
        }
    }

    return (
        <div>
            <div className='card my-5 border-0'>
                <div className='row g-3 justify-content-center'>
                    <div className='col-12 col-xl-3'>
                        <img src={coverLink
                        } className='img-fluid rounded-start' alt={title} width={500} height={650} />
                    </div>
                    <div className='col-xl-4'>
                        <div className='card-body'>
                            <h5 className='card-title fs-3'>{title}</h5>
                            <h6 className='card-subtitle mb-2 text-muted fs-5'>by {author}</h6>
                            <p className='fs-6'>{content}</p>
                            {
                                isUserLogged ? (
                                    <a onClick={handleSubmit} className="btn btn-primary w-50">Add to my collection</a>
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
