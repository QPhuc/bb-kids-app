import styled from "styled-components";

export const StyledFooter = styled.footer`
    border-top: 1px solid var(--grey-white-color);
`

export const StyledFooterContent = styled.div`
    padding: 0 16px;
    text-align: center;
    padding-top: 8px;
`

export const StyledFooterInfo = styled.div`
    background: repeating-linear-gradient(90deg,var(--primary-color), var(--primary-color-2), 5%,var(--white-color) 0,var(--white-color) 10%);
    min-height: 10rem;
    border-top: 1px solid var(--grey-white-color);
    border-bottom: 1px solid var(--grey-white-color);
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    a {
        font-size: 40px;
    }
    input {
        height: 48px;
        width: 240px;
        padding: 16px;
        font-size: 14px;
    }
    button {
        background-color: var(--dark-color);
        color: var(--white-color);
        border: none;
        width: 48px;
        height: 48px;
        font-size: 32px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            font-size: 40px;
        }
    }
`

export const StyledFooterInfoItem = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    a {
        display: flex;
        &:first-child {
            margin: 0 4px;
        }
    }
    
`

export const StyledFooterApply = styled.p`
    font-weight: 600;
    text-decoration: underline;
`

export const StyledFooterMenuTitle = styled.span`
    text-transform: uppercase;
    text-align: center;
    display: block;
    letter-spacing: 0.025em;
    cursor: pointer;
    margin-bottom: 16px;
    font-weight: 500;
    &:hover {
        color: var(--black-color);
    }
`

export const StyledFooterMenu = styled.div`
    margin: 0 120px;
    padding: 24px 0;
`

export const StyledFooterMenuList = styled.ul`
    padding: 0;
`

export const StyledFooterMenuItem = styled.li`
    text-align: center;
    margin: 8px 0;
    line-height: 1.6;
    &:hover {
        text-decoration: underline;
    }
`