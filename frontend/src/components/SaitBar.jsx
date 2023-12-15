import React from 'react'
import './SaitBarStyle.css'
import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineEllipsis } from "react-icons/ai";

const musics = [
  { id: 1, name: 'Without me - Eminem', time: '2:40' },
  { id: 2, name: 'BLIND ZONE - OBLADAET', time: '1:12' },
  { id: 3, name: 'DEF JOINT 2 -OBLADAET', time: '2:10' },
  { id: 4, name: 'Whatever It Takes - Imagine Dragons', time: '3:40' },
  { id: 5, name: 'Believer -Imagine Dragons', time: '2:50' },
]

function SaitBar() {
  return (
    <div className='side-bar'>
      <p>
        ПЛЕЙЛИСТ
      </p>
      <p className='sait-bar'>
        Уже в Чарте
      </p>

      <div className='icons'>
        <TbPlayerPlayFilled />
        <FaRegHeart />
        <AiOutlineEllipsis />
      </div>

      <div className='music-wraper'>
        {musics.map(music => (
          <div className='music' key={music.id}>
            <p className='music-number'>
              {music.id}
            </p>
            <p className='music-name'>
              {music.name}
            </p>
            <p className='music-time'>
              {music.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SaitBar