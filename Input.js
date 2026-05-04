import styled from "styled-components"

const StyleInput=styled.input`
width: 100%;
padding: 10px;
margin-top: 5px;
margin-botton: 10px;
border: 1px solid #ccc;
border-radius: 5px;
box-sizing:border-box;
`;
export default function Input(props){
    
    return(
       
        <StyleInput {...props}/>
    
    )
}