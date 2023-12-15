import React from 'react'
import './PlayerStyle.css'
import { FaPlay } from "react-icons/fa";
import { CgPlayBackwards } from "react-icons/cg";
import { CgPlayForwards } from "react-icons/cg";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { CgImport } from "react-icons/cg";
import { AiOutlineStop } from "react-icons/ai";
import { RxShuffle } from "react-icons/rx";
import { PiRepeatBold } from "react-icons/pi";
import { GoUnmute } from "react-icons/go";


export default function Player() {
  return (
    <div className='player'>
      <div className='player-btn-left'>
        <CgPlayBackwards />
        <FaPlay />
        <CgPlayForwards />
        <AiOutlineUnorderedList />
      </div>


      <div className='music'>
        <div>
          <img className='music-img' src="/images/60sek.jfif" />
        </div>
        <div className='music-text'>
          <p>
            ПРОВИНЦИЯ
          </p>
          <p>
            f0lk
          </p>
        </div>
      </div>

      <div className='like'>
        <FaRegHeart />
        <FaPlus />
        <CgImport />
        <AiOutlineStop />
      </div>
      <div className='player-btn-right'>
      <RxShuffle />
      <PiRepeatBold />
        <GoUnmute />
      </div>
    </div>
  )
}


