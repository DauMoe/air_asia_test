import ContextItem from './ContextItem';
import './index.scss';
import useGetContextContent from './useGetContextConent';

const ContextMenu = ({
  x,
  y,
  ...props
}) => {
  const listItem = useGetContextContent();
  
  return(
    <div className='context-menu-wrapper' style={{top: x, left: y}}>
      {listItem.map((item, index) => {
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
  );
}

export default ContextMenu;