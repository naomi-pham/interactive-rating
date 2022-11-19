import Image from 'next/image'
import React from 'react'

const ThankYouCard = ({rating}) => {
    return (
        <div className='card items-center justify-center text-center'>
            <Image 
                src="/images/illustration-thank-you.svg" 
                alt="thank you illustration" 
                width={150}
                height={150}
            />
            <p className='rounded-full py-1 px-3 font-bold text-primary bg-accentDark'>
                You selected {rating.value} out of 5
            </p>
            <div className='card-text mt-2'>
                <h3>Thank you</h3>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch.</p>
            </div>

        </div>
    )
}

export default ThankYouCard