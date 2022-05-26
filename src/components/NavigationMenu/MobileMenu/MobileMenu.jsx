import { ReactComponent as WhiteDeptIcon } from '../../../assets/icons/DEPT-white-icon.svg'
import { ReactComponent as ClosingIcon } from '../../../assets/icons/closing-white-icon.svg';
import './MobileMenu.scss';

const MobileMenu = ({ boxVisibility, setBoxVisibility }) => {
    return (<div className='mobile-container'><WhiteDeptIcon /><ClosingIcon onClick={()=> setBoxVisibility(!boxVisibility)}/></div>);
}

export default MobileMenu;