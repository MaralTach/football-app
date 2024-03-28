import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <Image className="img-logo" src={logo} width="250px" />
      <h1 className="my-2 title">FOOTBALL LEGENDS</h1>
    </Container>
  );
};

export default Header;