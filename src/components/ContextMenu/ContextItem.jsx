import { IconContext } from 'react-icons';
import contextMenuSize from './index.scss';

const ContextItem = ({
  itemIcon,
  itemContent,
  callback,
  ...props
}) => {
  return(
    <div className='context-item-wrapper' onClick={callback}>
      {itemIcon 
        ? <IconContext.Provider value={{size: +contextMenuSize, color: '#707070', style: {marginRight: 5}}}>
            {itemIcon}
          </IconContext.Provider>
        : null
      }
      <span className='context-item-content'>{itemContent}</span>
    </div>
  );
}

export default ContextItem;