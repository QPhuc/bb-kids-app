import { CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export default function Loading() {
    return (
        <StyledContainer>
            Loading...
            <CircularProgress />
        </StyledContainer>
    )
}
