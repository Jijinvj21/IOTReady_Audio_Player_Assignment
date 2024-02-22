import "./Header.scss";
import Dropdown from "../Dropdown/Dropdown";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  IoIosArrowBack,
  IoReorderThreeOutline,
  MdPlaylistPlay,
  TbMusicUp,
  LuListMusic,
} from "../../assets/Icons/react-Icons";
import { Link } from "react-router-dom";
function Header() {
  


  const items = [
    {
      key: "1",
      label: <LuListMusic size={20} />,
      link: "/",
    },
    {
      key: "2",
      label: <TbMusicUp size={20} />,
      link: "/add_music",
    },
    {
      key: "3",
      label: <MdPlaylistPlay size={20} />,
      link: "/playlist",
    },
  ];

  return (
    <div className="header_section">
      <Container>
        <div className=" d-flex justify-content-between align-items-center p-3">
        <Link to={"/"}>
          <LuListMusic size={25}/> 
          </Link>
          <Link to={"/"}>
            <p className="m-0  fs-2 ">AUDIO PLAYER</p>
          </Link>
          <Dropdown icon={<IoReorderThreeOutline size={28} />} items={items} />
        </div>
      </Container>
    </div>
  );
}

export default Header;
