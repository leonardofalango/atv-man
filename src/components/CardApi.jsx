/* eslint-disable react/prop-types */
import style from './Card.module.css'

export const CardApi = ({name, status, species, type, gender, image}) => {
  return(
      <div className={style.card}>
        <div className={style.cardTitle}>
          <div className={style.title}>{name}</div>
        </div>

        <div className={style.cardBody}>
          <h2>{status}</h2>
          <div>{type}</div>
          <p>{species}</p>
          <p>{gender}</p>
          <img src={image} alt={name} height={"auto"}/>
        </div>
      </div>
  )
}
