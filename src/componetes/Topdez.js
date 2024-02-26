import React from 'react'
import Title from './Title'
import card1 from './image/card1.png'
import card2 from './image/card2.png'
import card3 from './image/card3.png'
import card4 from './image/card4.png'

const Topdez = () => {
  const list = [card1, card2, card3, card4]
  return (
    <section className={` container `}>
      <div className={` row  text-center `}>
        <Title texto="Os 10 melhores fotógrafos de vida selvagem para observar"></Title>
        <p className={` mt-4 `}>Milhões de espécies de fauna e flora habitam este mundo vibrante e diversificado em que vivemos. Às vezes nem nos lembramos que existe natureza além das nossas cidades e da nossa zona de conforto. Há muita vida selvagem para cativar e capturar. Felizmente, os fotógrafos podem compartilhar a beleza deste mundo e nos trazer cenas da vida selvagem de animais que de outra forma nunca teríamos conhecido.</p>
        {list.map((item,index)=>( 
          <div className={`col-xl-3 mt-4`} key={index}>
            <img style={{width: "100%"}} src={item} alt="#" />
          </div>
        ))}
      </div>

    </section>
  )
}

export default Topdez