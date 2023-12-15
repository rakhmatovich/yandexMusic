import React from 'react'
import './PlayerStyle.css'
import { TbPlayerSkipBack } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";
import { TbPlayerSkipForward } from "react-icons/tb";
import { RiPlayListFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { CgImport } from "react-icons/cg";
import { AiOutlineStop } from "react-icons/ai";
import { GoUnmute } from "react-icons/go";


export default function Player() {
  return (
    <div className='player'>
      <div className='player-btn-left'>
      <TbPlayerSkipBack />
      <FaPlay />
      <TbPlayerSkipForward />
      <RiPlayListFill />
      <FaRegHeart />
      <FaPlus />
      <CgImport />
      <AiOutlineStop />
      </div>
      <div className='player-btn-right'>
      <GoUnmute />
      </div>
      <div className='registor'>
      <div className='voyti'>
      Зарегистрируйтесь и получите единую
        коллекцию музыки на всех устройствах.
      </div>
      <button >Войти</button>
      </div>
    
    </div>
  )
}


