import React from 'react'
import { StyledFooter, StyledFooterInfo, StyledFooterContent, StyledFooterMenu, StyledFooterMenuList, StyledFooterMenuItem, StyledFooterMenuTitle, StyledFooterApply, StyledFooterInfoItem } from './styled';
import Image from 'next/image';
import Location from '@/assets/images/location.png';
import Facebook from '@/assets/images/facebook.png';
import Tiktok from '@/assets/images/tiktok.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Footer() {
    return (
        <StyledFooter>
            <StyledFooterContent>
                <h3 style={{ fontWeight: 600, margin: "8px 0" }}>SIGN UP FOR EMAIL</h3>
                <p style={{ margin: "24px 0" }}>Join the BB Kids grapevine and get 20% off your first order – plus be the first to hear about news, offers and silly stuff.
                    <br />
                    <StyledFooterApply><a href='#'>*Exclusions apply</a></StyledFooterApply>
                </p>
            </StyledFooterContent>
            <StyledFooterInfo>
                <StyledFooterInfoItem>
                    Stores
                    <a href='#'><Image src={Location} alt="localtion" width={30} height={30} /></a>
                </StyledFooterInfoItem>
                <StyledFooterInfoItem>
                    Follow us
                    <a href='#'><Image src={Facebook} alt="localtion" width={30} height={30} /></a>
                    <a href='#'><Image src={Tiktok} alt="localtion" width={30} height={30} /></a>
                </StyledFooterInfoItem>
                <StyledFooterInfoItem>
                    <input placeholder='Email address' />
                    <button><ArrowForwardIcon fontSize='inherit'/></button>
                </StyledFooterInfoItem>

            </StyledFooterInfo>
            <StyledFooterMenu>
                <div className='row'>
                    <div className='col-3'>
                        <StyledFooterMenuTitle>Customer Service</StyledFooterMenuTitle>
                        <StyledFooterMenuList>
                            <StyledFooterMenuItem><a href='#'>Need Help?</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>Accessibity Statement</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>My Account</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>Track Your Order</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>FAQs</a></StyledFooterMenuItem>
                        </StyledFooterMenuList>
                    </div>
                    <div className='col-3'>
                        <StyledFooterMenuTitle>Customer Service</StyledFooterMenuTitle>
                        <StyledFooterMenuList>
                            <StyledFooterMenuItem><a href='#'>Need Help?</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>Accessibity Statement</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>My Account</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>Track Your Order</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>FAQs</a></StyledFooterMenuItem>
                        </StyledFooterMenuList>
                    </div>
                    <div className='col-3'>
                        <StyledFooterMenuTitle>Customer Service</StyledFooterMenuTitle>
                        <StyledFooterMenuList>
                            <StyledFooterMenuItem><a href='#'>Need Help?</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>Accessibity Statement</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>My Account</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>Track Your Order</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>FAQs</a></StyledFooterMenuItem>
                        </StyledFooterMenuList>
                    </div>
                    <div className='col-3'>
                        <StyledFooterMenuTitle>Customer Service</StyledFooterMenuTitle>
                        <StyledFooterMenuList>
                            <StyledFooterMenuItem><a href='#'>Need Help?</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>Accessibity Statement</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>My Account</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>Track Your Order</a></StyledFooterMenuItem>
                            <StyledFooterMenuItem><a href='#'>FAQs</a></StyledFooterMenuItem>
                        </StyledFooterMenuList>
                    </div>
                </div>
            </StyledFooterMenu>
        </StyledFooter>
    )
}
