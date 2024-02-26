import React from 'react'
import Title from './Title'
import style from './Home.module.css'

const Home = () => {
 
  return (
   <main className={`container-fluid`}>
  <div className={`row`}>
    <div className={` ${style.bg} d-flex justify-content-center align-items-center text-center `}>
      <div className={`col-xl-8 mt-5 pt-5`}>
        <Title texto='O melhor da fotografia da vida selvagem' />
        <p className={`mt-4`}>As imagens vencedoras dos concursos nacionais e internacionais de fotografia da vida selvagem do ano mostram a beleza e a diversidade da natureza. </p>
      </div>
    </div>
  </div>
</main>
 
  )
}

export default Home