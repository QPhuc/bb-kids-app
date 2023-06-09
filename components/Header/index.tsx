import React, { useState } from 'react'
import Image from 'next/image'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';
import Link from 'next/link';

import { StyledHeader, StyledHeaderWrapper, StyledHeaderNav, StyledHeaderRightWrapper, StyledHeaderAfterNav, StyledHeaderNavItem, StyledIcon, StyledWrapperIcon, StyledBasketIcon, StyledBasketCount, StyledNavTitle } from './styled';
import Logo from '@/assets/images/logo.jpg';
import Menu from '../Menu';

export default function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <>
      <StyledHeader>
        <Link href="/"><Image src={Logo} alt="Logo" width={80} /></Link>
        <StyledHeaderWrapper>
          <StyledHeaderNav>
            <StyledHeaderNavItem>
              <Link href='/search'>
                <StyledNavTitle
                  onMouseEnter={() => setIsShowMenu(true)}
                  onMouseLeave={() => setIsShowMenu(true)}>SALE
                </StyledNavTitle>
              </Link>
            </StyledHeaderNavItem>
            <StyledHeaderNavItem>
              <Link href='/search'><StyledNavTitle>WOMEN</StyledNavTitle></Link>
            </StyledHeaderNavItem>
            <StyledHeaderNavItem>
              <Link href='/search'><StyledNavTitle>MEN</StyledNavTitle></Link>
            </StyledHeaderNavItem>
            <StyledHeaderNavItem>
              <Link href='/search'><StyledNavTitle>GILRS</StyledNavTitle></Link>
            </StyledHeaderNavItem>
            <StyledHeaderNavItem>
              <Link href='/search'><StyledNavTitle>BOYS</StyledNavTitle></Link>
            </StyledHeaderNavItem>
            <StyledHeaderNavItem>
              <Link href='/search'><StyledNavTitle>BABY</StyledNavTitle></Link>
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
      {isShowMenu && <Menu />}
    </>
  )
}
