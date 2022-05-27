import { ReactComponent as WhiteDeptIcon } from '../../../assets/icons/DEPT-white-icon.svg'
import { ReactComponent as ClosingIcon } from '../../../assets/icons/closing-white-icon.svg';
import './MobileMenu.scss';

const MobileMenu = ({ boxVisibility, setBoxVisibility }) => {
    const menuItems = ["Home","Work", "Culture", "Services","Partners", "Stories", "Careers", "Events", "Contact"];
    return (
        <div style ={{ height:'auto',display: 'flex', flexDirection: 'column', background: 'black'}}>
            <div className='mobile-container'>
                <WhiteDeptIcon /><ClosingIcon onClick={()=> setBoxVisibility(!boxVisibility)}/>
            </div>
            <ul className='list'>
                {menuItems.map((item, i) => <li key={i} className='list-item'>{item}</li>)}
            </ul>
        </div>);
}

export default MobileMenu;