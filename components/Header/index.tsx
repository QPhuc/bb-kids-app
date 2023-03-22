import Image from 'next/image'
import React from 'react'
import { StyledHeader, StyledHeaderWrapper, StyledHeaderNav, StyledHeaderRightWrapper, StyledHeaderAfterNav, StyledHeaderNavItem, StyledIcon, StyledWrapperIcon, StyledBasketIcon, StyledBasketCount } from './styled';
import Logo from '@/assets/logo.jpg';
import styles from './styles.module.scss';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';

export default function Header() {
  return (
    <StyledHeader>
      <Image src={Logo} alt="Logo" width={80} height={80} />
      <StyledHeaderWrapper>
        <StyledHeaderNav>
          <StyledHeaderNavItem>
            <a href=''><span className={styles.navTitle}>NEW</span></a>
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <a href=''><span className='nav-title'>NEW</span></a>
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <a href=''><span className='nav-title'>NEW</span></a>
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <a href=''><span className='nav-title'>NEW</span></a>
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <a href=''><span className='nav-title'>NEW</span></a>
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <a href=''><span className='nav-title'>NEW</span></a>
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <a href=''><span className='nav-title'>NEW</span></a>
          </StyledHeaderNavItem>
        </StyledHeaderNav>
        <StyledHeaderAfterNav>
          <StyledIcon>
            <SearchSharpIcon fontSize="inherit" />
            <StyledWrapperIcon>
              <PersonOutlineSharpIcon fontSize="inherit" />
              <KeyboardArrowDownSharpIcon fontSize="inherit" />
            </StyledWrapperIcon>
          </StyledIcon>
        </StyledHeaderAfterNav>
      </StyledHeaderWrapper>
      <StyledHeaderRightWrapper>
        <StyledBasketCount>0</StyledBasketCount>
        <StyledBasketIcon>
          <WorkOutlineSharpIcon fontSize="inherit" />
        </StyledBasketIcon>
      </StyledHeaderRightWrapper>
    </StyledHeader>
  )
}
