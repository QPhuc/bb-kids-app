import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    flex: 1;
    height: 80px;
    padding: 0 16px;
    justify-content: space-between;
    border: 1px solid #f0f0f0;
`

export const StyledHeaderWrapper = styled.div`
    display: flex;
    align-items:center;
    flex: 1;
    justify-content: space-around;
`

export const StyledHeaderNav = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    list-style-type: none;
`

export const StyledHeaderNavItem = styled.li`
    padding: 32px 24px;
    font-weight: 700;
    line-height: 1.6;
    position: relative;
    :hover {
        cursor: pointer;
    }
`

export const StyledHeaderAfterNav = styled.div`
    
`

export const StyledHeaderRightWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const StyledIcon = styled.span`
    font-size: 28px;
`

export const StyledWrapperIcon = styled.div`
    display: inline-block;
`

export const StyledBasketCount = styled.span`
    
`

export const StyledBasketIcon = styled.span`
    display: block;
`