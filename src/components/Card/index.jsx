import React, { useEffect, useRef } from "react";
import { IconContext } from 'react-icons';
import { SlOptionsVertical } from 'react-icons/sl';
import { BsSkype, BsChatFill } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import './index.scss';
import { useHandleTeammateImage } from './useHandleTeammateImage';
import ContextMenu from "../ContextMenu";

const Card = ({
  userId,
  imageUrl,
  status,
  name,
  description,
  skypeLink,
  linkedinLink,
  position,
  progress,
  progressColorCode,
  listTeammateImages,
  listContextItems,
  cardIndex,
  whatCardClicked,
  allowOpenContextMenu,
  ...props
}) => {
  const { threeFirstTeammate, remain }  = useHandleTeammateImage(listTeammateImages);
  
  return (
    <div className='card-wrapper'>
      <ContextMenu
        show={allowOpenContextMenu}
        top={20}
        right={45}
        listContextItems={listContextItems}
      />
      <div className="card-avatar-wrapper">
        <div className='card-avatar'>
          <img width={65} height={65} src={imageUrl} className="card-avatar-image" alt='avatar'/>
          <div className='card-avatar-status'></div>
        </div>
        <div className='card-avatar-options' onClick={(e) => {e.stopPropagation(); whatCardClicked(cardIndex)}}>
          <IconContext.Provider value={{size: '16', color: "black"}}>
            <SlOptionsVertical/>
          </IconContext.Provider>
        </div>
      </div>
      <div>
        <p className='card-avatar-name mt-15'>{name}</p>
        <p className='card-avatar-description mt-5'>{description}</p>
      </div>

      <div className='card-contact'>
        <div>
          <IconContext.Provider value={{size: '16', color: "#b4b4b4"}}>
            <div className='card-contact-icon'>
              <BsSkype/>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{size: '16', color: "#b4b4b4"}}>  
            <div className='card-contact-icon' style={{marginLeft: 5}}>
              <FaLinkedinIn/>
            </div>
          </IconContext.Provider>
        </div>
        <IconContext.Provider value={{size: '16', color: "#b4b4b4"}}>
          <div className='card-contact-icon'>
            <BsChatFill/>
          </div>
        </IconContext.Provider>
      </div>

      <div className='card-line mt-20'></div>

      <div className='card-components mt-20'>
        <p className='card-components-title'>Position</p>
        <p className='card-components-content'>{position}</p>
      </div>

      <div className='card-components mt-20'>
        <p className='card-components-title'>Task</p>
        <span className={"card-progress-" + progress + (progressColorCode ? `-${progressColorCode}` : '-green')}></span>
      </div>

      
      {Array.isArray(listTeammateImages) 
        ? <div className='card-teammate-wrapper mt-20'>
            <div className='card-teammate-images-wrapper'>
              {threeFirstTeammate.map((teammateImageUrl, index) => {
                return (
                  <img src={teammateImageUrl} width={35} height={35} key={"teammate-image-" + index} className={"card-teammate-image-" + index} alt="team member"/>
                )
              })}
              {
                remain > 0
                ? <span className='card-teammate-image-4 mt-10' style={{fontSize: 12, color: "#979797"}}>{remain}+</span>
                : null
              }
            </div>
            <span className='card-teammate-text'>Explore team</span>
          </div>
        : null
      }
    </div>
  )
}
export default Card;