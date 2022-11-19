import Head from 'next/head'
import { useState } from 'react'
import SubmitCard from '../components/SubmitCard'
import ThankYouCard from '../components/ThankYouCard'

const Home = () => {

  const [rating, setRating] = useState({
    value: 5,
    id: "",
  })

  const [isActive, setIsActive] = useState(false)

  function handleClick(event) {
    setRating({
        value: event.target.value,
        id: event.target.id,
      }) 
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(rating.value)
    setIsActive(true)
  }

  console.log(rating)

  
 
  return (
      <>
      <Head>
        <title>Interactive Rating</title>
        <meta name="description" content="Interactive Rating" />
      </Head>

      <main className='w-11/12 mx-auto sm:w-7/12 lg:w-6/12'>
        <section className='bg-accentDark/50 rounded-3xl p-8'>
          {!isActive && <SubmitCard 
            rating={rating}
            isActive={isActive}
            handleClick={handleClick}
            handleSubmit={handleSubmit}
          />}
          {isActive && <ThankYouCard rating={rating} />}
        </section>
      </main>
    </>
  )
}

export default Home
