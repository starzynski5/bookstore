import React from 'react'

const GoToAction = () => {
    return (
        <div className="bg-dark py-5 px-4">
            <p className='text-white text-center fs-4'>Start Your Reading Journey Today!</p>
            <p className='text-center fs-6 pt-1' style={{color: "#D9B878"}}>Join thousands of readers discovering amazing stories. Build your personal library and track your reading progress.</p>
            <div className='d-flex justify-content-center mt-3'>
                <a href="/discovery" className="btn btn-info">Explore All Books</a>
            </div>
        </div>
    )
}

export default GoToAction
