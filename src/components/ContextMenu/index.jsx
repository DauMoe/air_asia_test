import { useEffect, useRef } from 'react';
import ContextItem from './ContextItem';
import './index.scss';

const ContextMenu = ({
  show,
  top,
  left,
  right,
  bottom,
  listContextItems,
  ...props
}) => {
  const contextMenuRef  = useRef();

  if (!Array.isArray(listContextItems)) throw new Error("'listContextItems' must be an JSON Array");
  return (
    <div className={"context-menu-wrapper" + (show ? " context-menu-show" : '')} ref={contextMenuRef} style={{top: top - 10, left: isNaN(+left) ? undefined : left - 8 - (contextMenuRef.current?.offsetWidth || 0), bottom: bottom, right: right}}>
      {listContextItems.map((item, index) => {
        return (
          <ContextItem 
            key={"_context_menu" + index} 
            itemContent={item.content} 
            itemIcon={item.icon}
            callback={item.cb}
          />
        )
      })}
    </div>
  )
}

export default ContextMenu;