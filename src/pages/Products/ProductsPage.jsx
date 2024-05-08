import style from './ProductsPage.module.css'

import { Card } from '../../components/Card/Card'
import produtos from '../../constants/produtos.json'
import { Menu } from '../../components/Menu/Menu'

const ProductsPage = () => {
    return(
        <>
            <Menu />

          <h2>Showroom de produtos</h2>
            <div className={style.cards}>
            {produtos.map((item) => {
              return(
                <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} isValid={item.status} category={item.categoria} />
              )
             })}
            </div>
        </>
    )
}

export default ProductsPage