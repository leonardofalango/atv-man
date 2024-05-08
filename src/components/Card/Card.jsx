/* eslint-disable react/prop-types */
import style from './Card.module.css'

export const Card = ({isValid, name, image, desc, value}) => {
  return(
      <div className={style.card}>
        <div className={style.cardTitle}>
          <div className={style.title}>{name}</div>
          <div className={isValid? style.valid : style.notValid}></div>
        </div>

        <div className={style.cardBody}>
          <h2>{desc}</h2>
          <p>{value}</p>
          <img src={image} alt={name} height={"auto"}/>
        </div>
      </div>
  )
}
