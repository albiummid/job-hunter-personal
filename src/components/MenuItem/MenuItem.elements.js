import styled from "styled-components";

export const Item = styled.div`
display: flex;
margin: 20px auto;
padding: 5px 10px;
gap: 10px;
align-items: center;
transition:background-color 0.3s ease-in-out;
&>img{
    width: 30px;
}
&:hover{
    background-color: #e3e9ed;
}

`;
