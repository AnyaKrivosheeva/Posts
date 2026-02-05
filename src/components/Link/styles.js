import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const linkStyle = css`
 color: black;
    text-decoration: none;

    &:hover {
        color:  #d81d1d;
        text-decoration: underline;
    }
`

export const SimpleLink = styled(Link)`${linkStyle}`;

export const NavigationLink = styled(NavLink)`${linkStyle}`;