import React from 'react'
import './OrchidContainer.css';

function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? '#ffc107' : '#e4e5e9', fontSize: '1.2em' }}>
        ★
      </span>
    );
  }
  return stars;
}


export default function OrchidPresentation({orchids}) {
        console.log(orchids);
    return (
    <div className='container'>
        {orchids.map((orchid)=>(
           <div className='column' key={orchid.Id}>
           <div className='card'>
            {orchid.isSpecial &&(
            <div className="ribbon"><span>Special</span></div>
            )}
           <img src={orchid.image}/>
             <h3>{orchid.name}</h3>
             <div className='title'>
             <p>{orchid.category}</p>
             <p>{orchid.origin}</p>
             <p>{orchid.color}</p>
             <p>{renderStars(orchid.rating)}</p>
             </div>
             <p><button>Detail</button></p>
           </div>
         </div>
        ))}
    </div>
  )
}

