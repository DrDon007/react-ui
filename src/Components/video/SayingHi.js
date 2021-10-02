import { List, ListItem } from "@material-ui/core";
import "../css/sayinghi.css";
export default function SayingHi() {
  return (
    <div className="banner">
      <div className="bannerTitle">
        <p>Saying Hi to my customers</p>
      </div>
      <div className="bannerButton">
        <List>
          <ListItem className="cancel">cancel</ListItem>
          <ListItem className="save">Save</ListItem>
        </List>
      </div>
    </div>
  );
}
