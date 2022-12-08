import { IconContext } from 'react-icons';
import { SlOptionsVertical } from 'react-icons/sl';
import { BsSkype, BsChatFill } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import './index.scss';

const ShowContextMenu = () => {

}

const CardAvatar = ({
  userId,
  imageUrl,
  status,
  name,
  description,
  skypeLink,
  linkedinLink,
  position,
  progress,
  ...props
}) => {
  return (
    <div className='card-wrapper'>
      <div className="card-avatar-wrapper">
        <div className='card-avatar'>
          <img width={65} height={65} src={imageUrl} className="card-avatar-image" alt='avatar'/>
          <div className='card-avatar-status'></div>
        </div>
        <div className='card-avatar-options' onClick={ShowContextMenu}>
          <IconContext.Provider value={{size: '16', color: "black"}}>
            <SlOptionsVertical/>
          </IconContext.Provider>
        </div>
      </div>
      <div>
        <p className='card-avatar-name'>{name}</p>
        <p className='card-avatar-description'>{description}</p>
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

      <div className='card-line'></div>

      <div className='card-components mt-20'>
        <p className='card-components-title'>Position</p>
        <p className='card-components-content'>{position}</p>
      </div>

      <div className='card-components mt-20'>
        <p className='card-components-title'>Task</p>
        <span className={"card-progress-" + progress}></span>
      </div>
    </div>
  )
}

export default CardAvatar;