/* eslint-disable react/prop-types */
import style from './Card.module.css'
import Draggable from 'react-draggable'

export const CardApi = ({name, status, species, type, gender, image, setShowModal, setModal}) => {

  
  const openModal = () => {
    setModal(
      <div className={style.fullScreen}>
        <Draggable>
        <div className={style.modal}>
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
        <button onClick={closeModal}>Fechar</button>
      </div>
      </div>
        </Draggable>
      </div>
    )
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

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
        <button className={style.btn} onClick={openModal}>info</button>
      </div>
  )
}
