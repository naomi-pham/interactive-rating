import Image from 'next/image'
import React from 'react'

const SubmitCard = ({rating, isActive, handleClick, handleSubmit}) => {

    const {value} = rating
    const ratings = ["1", "2", "3", "4", "5"]

    return (
        <div className="card">
            <Image width={48} height={48} src="/images/icon-star.svg" alt="star-icon" className="circle bg-accentDark p-3" />
            <div className='card-text'>
                <h3>How did we do?</h3>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>

            <div className="card-rating">
                {ratings.map(number => (
                    <button 
                        id={number}
                        key={number}
                        className={`w-12 sm:w-14 circle ${value === number  ? "bg-light text-white" : "bg-accentDark text-light"} hover:bg-light`}
                        value={number}
                        onClick={handleClick}
                    >
                        {number}
                    </button>
                ))}      
            </div>

            <button
                className={`btn rounded-full mt-2 ${isActive ? "bg-white text-primary" : "bg-primary"}`}
                onClick={handleSubmit}
                isActive={isActive}
            >
                Submit
            </button>            
        </div>
    )
}

export default SubmitCard
