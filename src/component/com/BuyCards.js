import React from 'react'
import "../css/BuyCards.css"

function BuyCards() {
  return (
    <>
    
    <div style={{ marginTop: "30px" }} className="container">
       <div className="row justify-content-center">
         <div className="col-12 col-md-4 mb-4">
           <div className="buy_card">
             <p>Silver</p>

             <button>Buy now</button>
           </div>
         </div>
         <div className="col-12 col-md-4 mb-4">
           <div className="buy_card buy_card_gold">
             <p>Gold</p>
             <button>Buy now</button>
           </div>
         </div>
         <div className="col-12 col-md-4 mb-4">
           <div className="buy_card">
             <p>Platinum</p>
             <button>Buy now</button>
           </div>
         </div>
       </div>
     </div>
    
    </>
  )
}

export default BuyCards