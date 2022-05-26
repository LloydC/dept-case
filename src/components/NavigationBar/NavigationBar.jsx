import { ReactComponent as BlackDeptIcon } from '../../assets/icons/DEPT-black-icon.svg'
import { useState } from 'react';
import useIsMobile from '../../utils/useIsMobile'; 
import MobileMenu from '../NavigationMenu/MobileMenu/MobileMenu';
import './NavigationBar.scss';

const NavigationBar = () => {
    const [boxVisibility, setBoxVisibility] = useState(false);
    const isMobile = useIsMobile();
   
    const HeaderMobile = boxVisibility ? <MobileMenu boxVisibility={boxVisibility} setBoxVisibility={setBoxVisibility}/> : <section>
    <div className={'navigation'}>
        <BlackDeptIcon/>
        <div className='menu'>
            <span className="content">Menu</span>
            <button className='hamburger' onClick={()=> setBoxVisibility(!boxVisibility)}>
                <span className='dash'></span>
                <span className='dash'></span>
            </button>
        </div>
    </div>
    <div className='hero'>
        <h1 className='header-title'>Work</h1>
    </div>
    <button className='cta-button'>
        View case
    </button>
</section>;

    return isMobile ? HeaderMobile : (<div> Desktop Bar</div>);
}

export default NavigationBar;