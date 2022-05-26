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
                    <span className="content">MENU</span>
                    <button className='hamburger'>
                        <span className='dash'></span>
                        <span className='dash'></span>
                    </button>
                </div>
            </div>
            <div className='hero'>
                <h1 className='header-title'>WORK</h1>
            </div>
        </>
    ) : (<div> Desktop Bar</div>);
}

export default NavigationBar;