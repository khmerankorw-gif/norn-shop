import styled from "styled-components";

const StyledTable = styled.table`
width: 100%;
th{
text-align:left;
text-decoration: uppercase;
color:gray;
font-weight:500;
font-size:.9rem;

}
td{
border-top: 1px solid rgba(0,0,0,.1);
padding: 10px;
}
`;
export default function Table(props){
    return <StyledTable{...props}/>
}