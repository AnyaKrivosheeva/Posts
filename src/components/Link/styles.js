import styled from "styled-components";
import { Link } from "react-router-dom";

export const SimpleLink = styled(Link)`
 color: black;
    text-decoration: none;

    &:hover {
        color:  #d81d1d;
        text-decoration: underline;
    }
`