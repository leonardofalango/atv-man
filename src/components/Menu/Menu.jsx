import { useNavigate } from 'react-router-dom'

import style from './Menu.module.css'

export const Menu = () => {
    const navigate = useNavigate()
  
    return (
      <>
      <div className={style.menu}>
        <button className={style.btnButton} onClick={() => navigate("/products")}>Produtos</button>
        <button className={style.btnButton} onClick={() => navigate("/rickandmorty-api")}>API</button>
        <button className={style.btnButton} onClick={() => navigate("/maps")}>Mapa</button>
        <button className={style.btnButton} onClick={() => navigate("/graphs")}>Gráficos</button>
      </div>
  
      <div  className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
      </div>
      </>
    )
  }
  