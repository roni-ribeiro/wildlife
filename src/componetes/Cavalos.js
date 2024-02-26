import React from 'react'
import Title from './Title'
import cavalos from './image/cavlos.png'
import araia from './image/araia.png'
import tartaruga from './image/tartaruga.png'

const Cavalos = () => {
  return (
    <section className={` container-fluid `}>
      <div className={`row justify-content-center `}>
        <div className={`col-xl-10 text-center `}>
          <Title texto='Origem dos cavalos domésticos pode ser finalmente revelada'></Title> 
          <p className={`mt-4`}>Há cerca de 4,2 mil anos, a equitação permitiu que pessoas viajassem para lugares mais distantes e mais rápido do que nunca, estimulando a migração pela Europa e Ásia.</p>
          
        </div>
        <img className={`mt-5 `} style={{width: "100%" }} src={cavalos} alt="" />
        <a className={`text-center mt-5 mb-5`} href="#">saiba mais</a>
      </div>
      <div className={` container`}>
        <div className={`row mb-5 pb-5  `}>
          <div className={`col-xl-6 mt-3`}>
            <img style={{width: "100%"}} src={araia} alt="#" />
          </div>
          <div className={`col-xl-6 mt-3`}>
            <img style={{width: "100%"}} src={tartaruga} alt="#" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Cavalos