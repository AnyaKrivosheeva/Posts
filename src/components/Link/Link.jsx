import * as SC from "./styles";

export default function Link({ children, ...props }) {
    return (
        <SC.SimpleLink {...props}>{children}</SC.SimpleLink>
    )
};