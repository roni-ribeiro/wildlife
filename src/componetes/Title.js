import React from 'react'
import style from './Title.module.css'

const Title = (porps) => {
  return (
    <h1 className={`${style.title}`}>{porps.texto}</h1>
  )
}

export default Title