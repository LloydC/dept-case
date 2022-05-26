import { ReactComponent as BlackDeptIcon } from '../../assets/icons/DEPTBlack.svg'
import useIsMobile from '../../utils/useIsMobile'; 
import './NavigationBar.scss';

const NavigationBar = () => {
    const isMobile = useIsMobile();

    return isMobile ? (
        <>
            <div className={'navigation'}>
                <BlackDeptIcon/>
                <div className='menu'>
                    <span className="content">Menu</span>
                    <button className='hamburger'>
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
        </>
    ) : (<div> Desktop Bar</div>);
}

export default NavigationBar;