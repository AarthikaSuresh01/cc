import React,{ useState } from 'react';


const homeData=[
    {
      id:1,
      name:"Sneakers",
      price:"Rs.5000",
      imgUrl:"https://ae01.alicdn.com/kf/HTB15SASqOCYBuNkHFCcq6AHtVXay/Woman-Casual-Shoes-Breathable-2018-Sneakers-Women-New-Arrivals-Fashion-Mesh-Sneakers-Shoes-Women-Shallow-Low.jpg",
    },
    {
      id:2,
      name:"wedges",
      price:"Rs.900",
      imgUrl:"https://tse4.mm.bing.net/th?id=OIP.AMPrYuoOsMZfNThvsLTDxAHaLH&pid=Api&P=0",
      
    },
    { 
      id:3,
      name:"flats and casuals",
      price:"Rs.500",
      imgUrl:"https://tse3.mm.bing.net/th?id=OIP.KdqfgLcy3qOWS8quDY9z-QHaHa&pid=Api&P=0",
    }
]

export const D6 = () => {
  const[items,setItems]=useState(homeData)
  
  return (
    <>
     {items.map((e)=>(
      <>
      <h1 key={e.id}>{e.name}</h1>
      <p key={e.id}>{e.price}</p>
      <img src={e.imgUrl} key={e.id}></img>
      </>
     ))}
    </>
  )
}