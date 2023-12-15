import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import HomeTabs from './HomeTabs'
import "./ChartUzStyle.css"

const chart = [
  { id: 1, url: "/images/eminem.png", name: "Rap God", time: "6:09" },
  { id: 2, url: "/images/temp.png", name: "Toma Esfrega", time: "1:24" },
  { id: 3, url: "/images/bibi-phonk.png", name: "Bibi Phok Br", time: "1:59" },
  { id: 4, url: "/images/Piala.jfif", name: "Piala", time: "3:30" },
  { id: 5, url: "/images/Nazare.jfif", name: "Na Zare", time: "5:06" },
  { id: 6, url: "/images/2003.jfif", name: "2003", time: "2:16" },
  { id: 7, url: "/images/asphalt8.jfif", name: "Asphalt8", time: "2:15" },
  { id: 8, url: "/images/tiiya.jfif", name: "Ti i Ya", time: "2:28" },
  { id: 9, url: "/images/kaktitam.jfif", name: "Kak Ti Tam", time: "2:29" },
  { id: 10, url: "/images/starboy.jfif", name: "Starboy", time: "3:50" },
];

function ChartUz() {
  return (
    <Layout>
      <HomeTabs />
      <div className="chart">Chart</div>
      <p className="treki">Треки, популярные на Яндекс Музыке</p>
      {chart.map((item) => (
        <div className="chartmusic" key={item.id}>
          <img className="eminem" src={item.url} alt="" />
          <span>{item.name}</span>
          <p>{item.time}</p>
        </div>
      ))}

      <div className="line" />
    </Layout>
  );
}

export default ChartUz
// function ChartUz(){
//   return (
//     <Layout className='chartuz'>
//         <HomeTabs />
//        <div className='chart'>Chart</div>
//        <p className='treki'>Треки, популярные на Яндекс Музыке</p>
//         <div className='chartmusic'>
//           <img className='eminem' src="/images/eminem.png" alt="" />
//            Rap God
//            <p>6:09</p>
//         </div>
//         <div className='chartmusic'>
//           <img className='eminem' src="/images/temp.png" alt="" />
//           Toma Esfrega
//           <p>1:24</p>
//         </div>
//         <div className='chartmusic'>
//           <img className='eminem' src="/images/bibi-phonk.png" alt="" />          
//            Bibi Phonk Br
//            <p>1:59</p>
//         </div>
//         <div className='chartmusic'>
//           <img className='eminem' src="/images/Piala.jfif" alt="" />
//            Piala
//            <p>3:30</p>
//         </div>
//         <div className='chartmusic'>
//           <img className='eminem' src="/images/Nazare.jfif" alt="" />
//            Na Zare
//            <p>5:06</p>
//         </div>
//         <div className='chartmusic'>
//           <img className='eminem' src="/images/2003.jfif" alt="" />
//            2003
//            <p>2:16</p>
//         </div>
//         <div className='chartmusic'>
//           <img className='eminem' src="/images/asphalt8.jfif" alt="" />
//            ASPHALT 8
//            <p>2:15</p>
//         </div>
//         <div className='chartmusic'>
//           <img className='eminem' src="/images/tiiya.jfif" alt="" />
//            Ti i Ya
//            <p>2:28</p>
//         </div>
//         <div className='chartmusic'>
//           <img className='eminem' src="/images/kaktitam.jfif" alt="" />
//           Kak Ti Tam
//           <p>2:29</p>
//         </div>
//         <div className='chartmusic'>
//           <img className='eminem' src="/images/starboy.jfif" alt="" />
//            StarBoy
//            <p>3:50</p>
//         </div>




//        <div className='line'/>
//     </Layout>
//   )
// }
