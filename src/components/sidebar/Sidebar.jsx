import "./sidebar.css";
// import {
//   LineStyle,
//   Timeline,
//   TrendingUp
// } from "@material-ui/icons";
// import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">START HERE</h3>
          <ul className="sidebarList">
            {/* <Link to="/" className="link"> */}
            <li className="sidebarListItem">
              <h5>Longitude</h5> 
            </li>
            <li className="sidebarListItem">
              {/* <LineStyle className="sidebarIcon" /> */}              
              <input className="textBox" type="text" placeholder="38.1343" />
            </li>
            {/* </Link> */}
            <li className="sidebarListItem">
              <h5>Latitude</h5> 
            </li>
            <li className="sidebarListItem">
              {/* <Timeline className="sidebarIcon" /> */}
              <input className="textBox" type="text" placeholder="37.83" />
            </li>
            <li className="sidebarListItem">
              <h5>Radius</h5> 
            </li>
            <li className="sidebarListItem">
              {/* <Timeline className="sidebarIcon" /> */}
              <input className="textBox" type="text" placeholder="5000" />
            </li>
            <li className="sidebarListItem">
              <button className="searchButton">Search</button> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}