import { List, ListItem } from "@material-ui/core";
import "../css/menu.css";

export default function Menu() {
  return (
    <div className="subManu">
      <List>
        <ListItem>Actor</ListItem>
        <ListItem>Voice</ListItem>
        <ListItem>Alignment</ListItem>
        <ListItem style={{ color: "#3860AD" }}>Background</ListItem>
      </List>
    </div>
  );
}
