import * as SC from "./styles";

export default function Typo(props) {
    const {
        children,
    } = props

    return (
        <SC.Title>{children}</SC.Title>
    )
};