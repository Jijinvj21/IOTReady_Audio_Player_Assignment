import "./Header.scss"
import Dropdown from "../Dropdown/Dropdown"
import { Container } from "react-bootstrap"
import { IoIosArrowBack, IoReorderThreeOutline } from "../../assets/Icons/react-Icons"
function Header() {
  return (
    <Container>
        <div className="d-flex justify-content-between align-items-center p-3">
            <IoIosArrowBack style={{color:"white"}} size={25} />
            <p className="m-0 text-white">AUDIO PLAYER</p>
            <IoReorderThreeOutline style={{color:"white"}} size={25} />


        </div>
    </Container>
  )
}

export default Header