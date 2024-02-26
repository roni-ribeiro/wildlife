import React from 'react'
import Title
 from './Title'
import Cards from './Cards'
const TheWord = () => {
  return (
    <section className={` container `}>
      <div className={` row  text-center justify-content-center `}>
        <div className={` col-xl-8 mt-5 pt-5`}>

          <Title texto='Viaje pelo Mundo'></Title>

           <p className={` mt-4 `}>Uma jornada visual através da vida selvagem. Cada foto revela a beleza e diversidade da natureza, transportando você para os cantos mais remotos do planeta</p>
        </div>
         <Cards />
      </div>

    </section>
  )
}

export default TheWord