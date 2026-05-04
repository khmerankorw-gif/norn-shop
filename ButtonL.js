import Link from "next/link";
import styled from "styled-components";
import {ButtonStyle} from "@/components/form/Button";

const StyleLink = styled(Link)`${ButtonStyle}`;
export function ButtonL(props) {
    return (
    <StyleLink{...props} />
    );
}