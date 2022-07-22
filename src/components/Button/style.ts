import styled from "styled-components";

export const ButtonWrapper = styled.div`
    width: inherit;
    padding: 4%;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: clamp(8px, 5vw, 1rem);
    font-weight: 600;
    color: white;
    background-color: #444;
    box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;

    cursor: pointer;

    user-select: none;

    &:active {
        box-shadow: inset -4px 4px 0 #222;
        font-size: 0.9rem;
    }
`