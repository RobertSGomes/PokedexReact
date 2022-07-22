import styled from "styled-components";

interface Props {
    isAbsolute?: boolean;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    transform?: string;
}

export const HContainer = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: ${props => props.right ? "flex-end" : "center"};
    gap: 20px;

    width: 70%;

    position: ${props => props.isAbsolute ? "absolute" : "relative"};

    top: ${props => props.top ? props.top : "initial"};
    right: ${props => props.right ? props.right : "initial"};
    bottom: ${props => props.bottom ? props.bottom : "initial"};
    left: ${props => props.left ? props.left : "initial"};

    transform: ${props => props.transform ? props.transform : "initial"};
`