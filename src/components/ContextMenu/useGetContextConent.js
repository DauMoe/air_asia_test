import { BsPenFill } from "react-icons/bs";
import { TiExport } from "react-icons/ti";
import { IoIosSend } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";

const useGetContextContent = () => {
  return [{
    icon: <BsPenFill/>,
    content: "Edit",
    callback: () => {}
  }, {
    icon: <TiExport/>,
    content: "Export",
    callback: () => {}
  }, {
    icon: <IoIosSend/>,
    content: "Send",
    callback: () => {}
  }, {
    icon: <RiDeleteBin6Fill/>,
    content: "Delete",
    callback: () => {}
  }]
}

export default useGetContextContent;