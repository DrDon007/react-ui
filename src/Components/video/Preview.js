import { List, ListItem } from "@material-ui/core";
import previewImage from "../../images/previewImage.png";
import "../css/preview.css";

export default function Preview() {
  return (
    <div className="preview">
      <div className="previewImage">
        <img src={previewImage} alt="previwe image" style={{ width: "100%" }} />
      </div>
      <div className="previewText">
        <p>
          Type or paste your videoscript here. You can also request a
          translation of an English script to any of 27 other languages
        </p>
        <a href="#">Listen</a>
      </div>
    </div>
  );
}
