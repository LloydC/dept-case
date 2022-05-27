import { ReactComponent as BlackDeptIcon } from '../../assets/icons/DEPT-black-icon.svg'
import { useState } from 'react';
import useIsMobile from '../../utils/useIsMobile'; 
import MobileMenu from '../NavigationMenu/MobileMenu/MobileMenu';
import HeaderDesktop from './HeaderDesktop/HeaderDesktop';
import './Header.scss';

const Header = () => {
    const [boxVisibility, setBoxVisibility] = useState(false);
    const isMobile = useIsMobile();
   
    const HeaderMobile = boxVisibility ? <MobileMenu boxVisibility={boxVisibility} setBoxVisibility={setBoxVisibility}/> : <section>
    <div className={'navigation'}>
        <BlackDeptIcon/>
        <div className='menu'>
            <span className="name">Menu</span>
            <button className='hamburger' onClick={()=> setBoxVisibility(!boxVisibility)}>
                <span className='dash'></span>
                <span className='dash'></span>
            </button>
        </div>
    </div>
    <div className='hero'>
        <h1 className='header-title'>Work</h1>
    </div>
    <button className='cta-button-mobile'>
        View case
    </button>
</section>;

    return isMobile ? HeaderMobile : (<HeaderDesktop />);
}

export default Header;