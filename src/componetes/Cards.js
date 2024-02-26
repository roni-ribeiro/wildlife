import React from 'react'
import style from './Cards.module.css'
import card1 from './image/card-1.png'
import card2 from './image/card-2.png'
import card3 from './image/card-3.png'

const Cards = () => {
  const lista= [
    {
      image: card1,
      describe: 'Ralph Pace, competição de imagens de vida selvagem Big Picture, vida aquática'
    },
    {
      image: card2,
      describe: 'Retrato impressionante de Suricata pelo fotógrafo holandês Marsel van Oosten'
    },
    {
      image: card3,
      describe: 'Judo Komodo por Andrey Gudkov. Dois grandes dragões de Komodo machos sibilando.'
    }
  ]

  return (
    <div className={` container mb-5 mt-5`}>
      <div className={`row`}>
        {lista.map((item,index)=>(
          <div key={index} className={`col-xl-4 position-relative  d-flex justify-content-center mb-4`}>
            <img className={`${style.img}`} src={item.image} alt="#" />
            <div className={`position-absolute top-50  col-xl-6  col-6  lh text-xl-start  `}>
              <p className={`lead fw-semibold  `}>{item.describe}</p>
            </div>
          </div>
        ))}
        

      </div>
    </div>
  )
}

export default Cards