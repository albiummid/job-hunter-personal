import styled from "styled-components";

export const SideBar = styled.div`
max-width:16rem;
min-height:100vh ;
background-color:#F8F8F8;
padding: 20px;
&>a{
    text-decoration:none;
    color: black;
}
.active{
    display: block;
    &>*{
border-left:5px solid red
    }

}

`;
