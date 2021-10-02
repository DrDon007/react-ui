import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { List, ListItem } from "@material-ui/core";
import logo from "../../images/logo.png";
import video from "../../images/Vector-2.png";
import play from "../../images/browse.png";
import profile from "../../images/Ellipse.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <Drawer variant="permanent">
        <List className="mainCont">
          <ListItem>
            <img src={logo} />
          </ListItem>
          <ListItem>
            <img src={video} />
          </ListItem>
          <ListItem>
            <img src={play} />
          </ListItem>
        </List>
        <div className="profile">
          <img src={profile} />
        </div>
      </Drawer>
    </div>
  );
}

export default Sidebar;
