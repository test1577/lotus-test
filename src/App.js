import styled from "styled-components";
import TextSrc from "./components/TextSrc";
import SelectSrc from "./components/SelectSrc";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import "./App.css";
const maxScreenTablet = 768;
const maxScreenMobile = 414;
const StyledHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  background-color: #d9d9d9;
  display: flex;
  padding: 10px;
  padding-bottom: 20px;
  div {
    display: flex;
    align-items: center;
  }
  > div {
    padding: 10px;
    box-sizing: border-box;
  }
  @media (max-width: ${maxScreenTablet}px) {
    padding-bottom: 10px;
    flex-wrap: wrap;
    div {
    }
  }
  @media (max-width: ${maxScreenMobile}px) {
  }
`;

const StyledLogo = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  & > button {
    display: none;
  }
  text-align: left;
  width: 300px;
  @media (max-width: ${maxScreenTablet}px) {
    & > button {
      display: inline-block;
    }
    flex-basis: 50%;
    order: 1;
  }
  @media (max-width: ${maxScreenMobile}px) {
  }
`;
const StyledSearchbar = styled.div`
  width: 100%;
  @media (max-width: ${maxScreenTablet}px) {
    order: 4;
  }
  @media (max-width: ${maxScreenMobile}px) {
  }
`;
const StyledBeark = styled.div`
  padding: 0px !important;
  border: none !important;
  @media (max-width: ${maxScreenTablet}px) {
    order: 1;
    // flex-basis: 100%;
    height: 0;
  }
`;
const StyledCart = styled.div`
  width: 50px;
  @media (max-width: ${maxScreenTablet}px) {
    justify-content: flex-end;
    align-items: right !important;
    text-align: right;
    flex-basis: 50%;
    order: 1;
  }
  @media (max-width: ${maxScreenMobile}px) {
  }
`;
const StyledMember = styled.div`
  display: none !important;
  @media (max-width: ${maxScreenTablet}px) {
    display: inline-block !important;
  }
  @media (max-width: ${maxScreenMobile}px) {
  }
`;
const StyledMenuAddress = styled.div`
  width: 400px;
  @media (max-width: ${maxScreenTablet}px) {
    flex-basis: 50%;
    order: 3;
  }
  @media (max-width: ${maxScreenMobile}px) {
  }
`;
function App() {
  return (
    <div className="App">
      <StyledHeader>
        <StyledLogo>
          <IconButton aria-label="menu">
            <MenuIcon />
          </IconButton>
          Logo
        </StyledLogo>
        <StyledSearchbar>
          <TextSrc />
        </StyledSearchbar>
        <StyledCart>
          <IconButton aria-label="cart">
            <CartIcon />
          </IconButton>
          <StyledMember>
            <IconButton>
              <PersonIcon />
            </IconButton>
            8000 pts.
          </StyledMember>
        </StyledCart>
        <StyledBeark />
        <StyledMenuAddress>
          <SelectSrc
            icon={
              <IconButton  style={{ marginRight: 10 }} >
                <LocationOn/>
              </IconButton>
            }
          />
        </StyledMenuAddress>
      </StyledHeader>
    </div>
  );
}

export default App;
