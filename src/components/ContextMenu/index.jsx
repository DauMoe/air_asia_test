import ContextItem from './ContextItem';
import './index.scss';
import useGetContextContent from './useGetContextConent';

const ContextMenu = (props) => {
  const listItem = useGetContextContent();
  
  return(
    <div className='context-menu-wrapper'>
      {listItem.map((item, index) => <ContextItem key={"_context_menu" + index} itemContent={item.content} itemIcon={item.icon}/>)}
    </div>
  );
}

export default ContextMenu;