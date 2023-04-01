import Image from 'next/image'
import React from 'react'
import { StyledHeader, StyledHeaderWrapper, StyledHeaderNav, StyledHeaderRightWrapper, StyledHeaderAfterNav, StyledHeaderNavItem, StyledIcon, StyledWrapperIcon, StyledBasketIcon, StyledBasketCount, StyledNavTitle } from './styled';
import Logo from '@/assets/images/logo.jpg';
import styles from './styles.module.scss';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';
import Link from 'next/link';

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/"><Image src={Logo} alt="Logo" width={80} height={80} /></Link>
      <StyledHeaderWrapper>
        <StyledHeaderNav>
          <StyledHeaderNavItem>
            <a href=''><StyledNavTitle className={styles.navTitle}>SALE</StyledNavTitle></a>
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <a href=''><StyledNavTitle className='nav-title'>WOMEN</StyledNavTitle></a>
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <a href=''><StyledNavTitle className='nav-title'>MEN</StyledNavTitle></a>
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <a href=''><StyledNavTitle className='nav-title'>GILRS</StyledNavTitle></a>
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <a href=''><StyledNavTitle className='nav-title'>BOYS</StyledNavTitle></a>
          </StyledHeaderNavItem>
          <StyledHeaderNavItem>
            <a href=''><StyledNavTitle className='nav-title'>BABY</StyledNavTitle></a>
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
          <StyledIcon>
          <WorkOutlineSharpIcon fontSize="inherit" />
          </StyledIcon>
        </StyledBasketIcon>
      </StyledHeaderRightWrapper>
    </StyledHeader>
  )
}
