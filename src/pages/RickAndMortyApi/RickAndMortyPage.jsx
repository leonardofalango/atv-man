
import { useState, useEffect } from 'react'
import { CardApi } from '../../components/Card/CardApi'
import { api } from "../../api/rmApi"

import style from './RickAndMortyPage.module.css'
import { Menu } from '../../components/Menu/Menu'

const RickAndMortyPage = () => {
    const [page, setPage] = useState("")
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    const [modal, setModal] = useState()
    const [showModal, setShowModal] = useState(false)

    const renderModal = () => {
      if (showModal) return modal
    }


    useEffect(() => {
    api.get(`/character/?page=${page}&name=${search}`).then((response) => {
        if(!response.data.results){
        console.log("Vazio")
        }

        setData(response.data.results)
    }).catch((error) => {
        if(error.response.status === 404){
        setShow('error')
        }
        console.error(error)
    })
    }, [page, search])

  return(
    <> 
      <Menu />
      {renderModal()}
          <h2>Rick and Morty API</h2>

          <div className={style.search}>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
            </div>
            <div>
               <input type="text" placeholder="Nome do personagem" value={search} onChange={(event) => setSearch(event.target.value)}/>
            </div>
          </div>

            <div className={style.cards}>
            {data.map((item) => { 
             return(
              <div key={item.id}>
                <CardApi
                  name={item.name}
                  status={item.status}
                  species={item.species}
                  type={item.type}
                  gender={item.gender}
                  image={item.image}

                  setShowModal={setShowModal}
                  setModal={setModal}
                />
              </div>
              )
           })}
            </div>
       </>
  )
}

export default RickAndMortyPage