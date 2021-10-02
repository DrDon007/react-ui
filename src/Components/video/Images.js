import { List, ListItem } from "@material-ui/core";
import Menu from "./Menu";
import "../css/images.css";

import Img1 from "../../images/img1.png";
import Img2 from "../../images/img2.png";
import Img3 from "../../images/img3.png";
import Img4 from "../../images/img4.png";
import Img5 from "../../images/img5.png";
import Img6 from "../../images/img6.png";
import Img7 from "../../images/img7.png";

export default function Images() {
  return (
    <div className="mainContainer" style={{ width: "50%", margin: "10px" }}>
      <div className="menu">
        <Menu />
      </div>
      <div className="optionList">
        <p>Images</p>
        <div className="rowOne">
          <img src={Img1} />
          <img src={Img2} />
          <img src={Img3} />
        </div>
        <div className="rowTwo">
          <img src={Img4} />
          <img src={Img5} />
          <img src={Img6} />
        </div>
        <div className="rowThree">
          <img src={Img7} />
        </div>
      </div>
      <div className="otheLinks">
        <List>
          <ListItem>Solid Colours</ListItem>
          <ListItem>Videos</ListItem>
        </List>
      </div>
    </div>
  );
}
