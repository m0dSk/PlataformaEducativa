import React from "react";
import "./sidebar.css";
import { SideBarBottom, SidebarData, SidebarMore } from "../../../data/sidebar";
import SidebarOption from "./sidebar-option";


function Sidebar() {
  const topOptions = SidebarData;
  const more = SidebarMore;
  const bottomOptions = SideBarBottom;
    return <div className="sidebar">
      <div className="sidebar-top">
        <div>
          {topOptions.map((option)=>{
            return<SidebarOption option={option} isActive={option.name==='Calls'?true:false} />
          })}
        </div>

        <div>
          <SidebarOption option={more}/>
        </div>
      </div>

      <div className="sidebar-bottom">
        {bottomOptions.map((option)=>{
          return <SidebarOption option={option} />
        })}
        </div>
    </div>
  }
  
  export default Sidebar;
  