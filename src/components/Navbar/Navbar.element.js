import styled from 'styled-components';

export const Nav = styled.nav`
margin: 15px;
box-shadow: 0 10px 30px gray;
border: 1px solid gray;
border-radius: 5px;
height: 60px;
background-color: white;
display:flex;
align-items: center;
justify-content: space-between;
padding-inline:20px;
position: sticky;
top: 0;
z-index: 999;

`;
export const NavItems = styled.ul`
display: flex;
align-items: center;
gap: 10px;
flex-wrap:nowrap;

`;
export const NavItem = styled.li`
display: flex;
list-style: none;
font-size: large;
&>select>*{
    font-size: large;
}
&>a{
    display: flex;
    color: black;
}

`;
export const Logo = styled.div``;
export const User = styled.div`
border-left:1px solid black;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`;
