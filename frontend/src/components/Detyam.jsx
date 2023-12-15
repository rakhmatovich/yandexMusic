import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import HomeTabs from './HomeTabs'
import "./ChartUzStyle.css"
import MusicCard from './MusicCard'


const forChildren = [
  { id: 1, url: '/images/mauguli.png', name: 'Mauguli', description: "", like: 10 },
  { id: 2, url: '/images/jivotnieafriki.jpg', name: 'Виктор Пелевин. «Путешествие в Элевсин»', description: '', like: 10 },
  { id: 3, url: '/images/skazkiafriki.webp', name: 'TED Лучшее', description: '', like: 10 },
  { id: 4, url: '/images/skazki-i-legendi.png', name: 'Хью Хауи. «Укрытие. Книга  1. Иллюзия»', description: '', like: 10 },
]

function Detyam(){
  return (
<Layout >
    <HomeTabs />
    <div className="Knigi">
          <h1>Подкасты и книги</h1> 
          <p></p>
          <p>Слушайте не только музыку</p>
        </div>
        <div className="vse-knigi">
          {forChildren.map(pbItem => (
            <MusicCard
              key={pbItem.id}
              url={pbItem.url}
              name={pbItem.name}
              description={pbItem.description}
              like={pbItem.like}
            />
          ))}
        </div>
 <div className='line'/>
    </Layout>
  )
}

export default Detyam