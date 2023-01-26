import styled, { css } from "styled-components";

export const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 22px;
    position: relative;
    width: auto;
    height: 100%;
    @media (min-width: 1024px) {
        max-width: 960px;
    }
    @media (min-width: 1216px) {
        max-width: 1152px;
    }
    @media (min-width: 1408px) {
        max-width: 1244px;
    }
    .slick-arrow {
        display: none;
    }
    .link {
        text-decoration: none;
    }
    ${(props:any) =>
        props.fluid &&
        css`
        padding: 0;
        margin: 0;
        max-width: 100%;
    `}
    ${(props:any) =>
        props.center &&
        css`
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`;