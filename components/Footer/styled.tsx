import styled from "styled-components";

export const StyledFooter = styled.footer`
    border-top: 1px solid var(--grey-white-color);
    margin-bottom: px;
`

export const StyledFooterPromo = styled.div`
    padding: 0 16px;
    height: 40px;
`

export const StyledFooterPromoItem = styled.div`
    
`

export const StyledFooterInfo = styled.div`
    background: repeating-linear-gradient(90deg,var(--primary-color), var(--primary-color-2), 5%,var(--light-color) 0,var(--light-color) 10%);
    min-height: 10rem;
    padding: 16px 0 0;
    border-top: 1px solid var(--grey-white-color);
    border-bottom: 1px solid var(--grey-white-color);
`

export const StyledFooterMenuTitle = styled.span`
    text-transform: uppercase;
    text-align: center;
    display: block;
    letter-spacing: 0.025em;
    cursor: pointer;
    margin-bottom: 16px;
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