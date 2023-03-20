import Image from 'next/image'
import React from 'react'
import { StyledHeader, StyledHeaderWrapper, StyledHeaderNav, StyledHeaderRightWrapper, StyledHeaderAfterNav, StyledHeaderNavItem } from './styled';
import Logo from '@/assets/logo.jpg';
import styles from './styles.module.scss';

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
          
        </StyledHeaderAfterNav>
      </StyledHeaderWrapper>
      <StyledHeaderRightWrapper>

      </StyledHeaderRightWrapper>
    </StyledHeader>
  )
}
