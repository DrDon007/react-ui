import Sidebar from "./Sidebar";
import SayingHi from "./SayingHi";
import Images from "./Images";
import Preview from "./Preview";
import "../css/main.css";
import "../css/responcive.css";
function BackgroundVideo() {
  return (
    <div className="backgroundVideo">
      <Sidebar />
      <div className="sideMenu">
        <SayingHi />
        <div className="content" style={{ display: "flex" }}>
          <Preview />
          <Images />
        </div>
      </div>
    </div>
  );
}

export default BackgroundVideo;
