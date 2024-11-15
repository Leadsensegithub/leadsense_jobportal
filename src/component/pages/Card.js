import React from 'react'
import "../css/Card.css"
import DefaultLayout from '../com/DefaultLayout (1)'
import { useNavigate } from 'react-router-dom'
import Fotter from '../com/Fotter'
import PageHeader from '../com/PageHeader'

function Card() {
  const nav = useNavigate()
  function handleButton(){
    nav("/search")
  }
  return (
    <>
    <PageHeader/>
   < div className="buy_cards" style={{display:"flex", justifyContent:"space-around", marginTop:"150px"}}>
        <div style={{width:"22%"}} className="buy_card">
            <p>Silver</p>
            <button>Buy now</button>
        </div>
        <div style={{width:"22%"}} className="buy_card buy_card_gold">
            <p>Gold</p>
            <button>Buy now</button>
        </div>
        <div style={{width:"22%"}} className="buy_card">
            <p>Platinum</p>
            <button onClick={handleButton}>Buy now</button>
        </div>
    </div>
    </>
   
  )
}

export default Card