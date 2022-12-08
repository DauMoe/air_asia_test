import { BsPenFill } from "react-icons/bs";
import { TiExport } from "react-icons/ti";
import { IoIosSend } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const useGetContextContent = () => {
  return [{
    icon: <BsPenFill/>,
    content: "Edit",
    cb: (e) => {e.preventDefault()}
  }, {
    icon: <TiExport/>,
    content: "Export",
    cb: () => {}
  }, {
    icon: <IoIosSend/>,
    content: "Send",
    cb: () => {}
  }, {
    icon: <RiDeleteBin6Fill/>,
    content: "Delete",
    cb: () => {}
  }]
}

export const useHandleClickContextMenu = (x, y) => {
  
};