import { useState } from "react";
import styled from "styled-components"
 const Image=styled.img`
    max-width: 100%;
    `;
    const ImageButtons=styled.div`
    display: flex;
    flex-grow: 0;
    gap:10px;
    `;
    const BigImage = styled.img`
    max-height: 200px;
    max-width: 100%;
    `;
    const ImageButton = styled.div`
    border: 2px solid #aaa;
    ${props =>props.active ?`
        border-color: #ccc;
        `:`
        border-color: transparent;
        opacity: 0.5;
        `}
    box-sizing: border-box;
    height: 67px;
    padding: 2px;
    margin-top: 10px;
    border-radius: 3px;
    cursor: pointer;
    `;
    const BigImageWraper=styled.div`
    text-align: center;
    `;
export default function ProductImages({images}){
   const [activeImage,setActiveImage] = useState(images?.[0]);
return(
    <>
    <BigImageWraper>
    <BigImage src={activeImage} />
    </BigImageWraper>
    <ImageButtons>
        {images.map(image =>(
            <ImageButton key={image} active={image === activeImage} onClick={()=>setActiveImage(image)}>
                <Image src={image} alt=""/>
            </ImageButton>
        ))}
    </ImageButtons>
    </>
)
}