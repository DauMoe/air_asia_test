import React from 'react';
import { IconContext } from "react-icons";
import { HiOutlineDocumentChartBar } from 'react-icons/hi2';
import { AiOutlineDownload, AiTwotoneSetting, AiOutlinePlus } from 'react-icons/ai';

const SectionHeader = () => {
  return (
    <div className="section-header-wrapper">
      <p className="section-header">Team information</p>
      <div>
        <IconContext.Provider value={{size: '20', color: "#686868"}}>
          <div className='section-icon' style={{margin : '0 10px 0 0'}}>
            <HiOutlineDocumentChartBar/>
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{size: '20', color: "#686868"}}>
          <div className='section-icon' style={{margin : '0 10px 0 0'}}>
            <AiOutlineDownload/>
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{size: '20', color: "#686868"}}>
          <div className='section-icon' style={{margin : '0 10px 0 0'}}>
            <AiTwotoneSetting/>
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{size: '20', color: "#686868"}}>
          <div className='section-icon'>
            <AiOutlinePlus/>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default React.memo(SectionHeader, (prevProps ,nextProps) => {
  return true;
});