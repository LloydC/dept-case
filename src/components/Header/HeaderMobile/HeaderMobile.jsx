import { ReactComponent as BlackDeptIcon } from '../../assets/icons/DEPTBlack.svg'
import './HeaderMobile.scss';

const HeaderMobile = () => {
    return (
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
    );
}

export default HeaderMobile;