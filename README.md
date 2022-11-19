## Interactive rating

### 1. Get rating value onClick

`pages/index.js`

Set rating value & id equal to the selected value & id.  

```jsx
import {useState} from "react"

...

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
  setIsActive(true)
}

return (
  <>
    <SubmitCard 
      rating={rating}
      isActive={isActive}
      handleClick={handleClick}
      handleSubmit={handleSubmit}
    />
  </>
  )

```

### 2. Change rating background

`components/SubmitCard.js`

When the rating value matches rating number, change `background-color` to light. 

```jsx
const ratings = ["1", "2", "3", "4", "5"]

...

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
```

