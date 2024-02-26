import React from 'react'
import style from './CinquentaAnos.module.css'
import Title from './Title'

const CinquentaAnos = () => {
  return (
    <section className={` container-fluid `}>
      <div className={`row mb-5 pb-5`}>
        <div className={`${style.bg}  d-flex justify-content-center align-items-center`}>
          <div className={`col-xl-8 text-center mt-5 pt-5`}>
            <Title className={` fs-xl-1 fs-5 `} texto='50 Anos do Fotógrafo de Vida Selvagem do Ano'></Title>
            <p>O novo livro do Museu de História Natural lançado na quarta-feira marca cinco décadas da competição WPY, celebrando a arte da fotografia da vida selvagem. Iniciadas na década de 1960, as 160 imagens premiadas e elogiadas representam 50 anos de diferentes épocas, estilos e especialidades – apresentando algumas das imagens icônicas da vida selvagem no planeta Terra, parte de uma exposição em Londres a partir de 24 de outubro.</p>
          </div>
        </div>
      </div>

          
      
    </section>
  )
}

export default CinquentaAnos