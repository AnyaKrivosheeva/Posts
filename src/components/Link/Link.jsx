import * as SC from "./styles";

export default function Link({ simple = true, children, ...props }) {
    return (
        simple
            ? <SC.SimpleLink {...props}>{children}</SC.SimpleLink>
            : <SC.NavigationLink {...props}>{children}</SC.NavigationLink>
    )
};