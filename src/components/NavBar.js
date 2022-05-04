import styled from 'styled-components';
import {FaMoon} from 'react-icons/fa'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1.5em 3em;
    background-color: var(--color-dark-blue);
    box-shadow: 0px 1px 5px 0px var( --color-very-dark-blue-light);
`
const H3 = styled.h3`
    font-weight: 800;
`

const ModeButton = styled.button`
    display: flex;
    align-items: center;
    gap: .5em;
    background-color: none;
    border: none;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    background-color: transparent;
    color: var(--color-white-dark-mode);
    font-size: 14px;
    cursor: pointer;
`

const NavBar = () => {
  return (
    <Nav>
          <H3>Where in the world?</H3>   
          <ModeButton>
              <FaMoon />
              <p>Dark mode</p>
          </ModeButton>    
    </Nav>
  )
}

export default NavBar