import styled from "styled-components";

export const ImgDiv = styled.div`
max-width: 400px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
a{
    color: black;
}
&>img{
    max-width: 100%;
}
`;
export const Form = styled.div`

`;
export const LoginForm = styled.form`
max-width: 400px;
h1{
    margin-bottom: 50px;
}
`;
export const LoginContainer = styled.div`
display: flex;
margin: 200px auto;
flex-wrap: wrap;
max-width: 900px;
gap: 20px;
padding: 40px;
align-items: center;
justify-content: center;
box-shadow: 0px 10px 30px gray;
border-radius: 10px;

@media (max-width:720px){
    margin: 200px 20px;
}
`;

export const ClientForm = styled.form`

`;
export const ApplicantForm = styled.form``;
export const InputGroup = styled.div`
display: flex;
margin-bottom:10px;
justify-content: center;
align-items: center;
border-radius: 5px ;
padding: 5px 10px;
gap: 10px;
border: 1px solid teal;
i{
font-size: large;
}
input{
    width: 100%;
    background-color: white;
    font-size: large;
    height: 40px;
    border: none;
    &:focus{
        background-color:white;
        outline: none;
    }
}
`;
export const SignUp = styled.div`
max-width: 400px;
.toggleBar{
    display: flex;
    justify-content: center;
    gap:20px;
  margin: 20px auto;
  p{
      cursor: pointer;
      padding: 5px 10px;
  }
    .active{
        background-color: antiquewhite;
        border-bottom: 5px solid teal;
    }
}
`;
export const Button = styled.button`
padding: 14px 20px;
font-weight:400;
font-size: large;
cursor: pointer;
background-color: transparent;
border: 1px solid teal;
color: teal;
border-radius: 5px;
transition: all 0.4s ease-in-out;
&:hover{
    color: white;
    background-color: teal;
}



`;
