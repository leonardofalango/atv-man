import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { CardApi } from './components/CardApi'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


const position = [-25.4249717, -49.272306]

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [search, setSearch] = useState("")



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

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>

    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.cards}>
            {produtos.map((item) => {
              return(
                <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} isValid={item.status} category={item.categoria} />
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>

          <div className={style.search}>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
            </div>
            <div>
               <input type="text" placeholder="1/43" value={search} onChange={(event) => setSearch(event.target.value)}/>
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
                />
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
           })}
            </div>
       </>
      }
     {show === "map" &&
        <>
        <MapContainer center={position} zoom={20} scrollWheelZoom={true} className={style.maps}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        </>
      }
      {show === "error" &&
      <h1>error</h1>
    }
    </div>
    </>
  )
}

export default App
