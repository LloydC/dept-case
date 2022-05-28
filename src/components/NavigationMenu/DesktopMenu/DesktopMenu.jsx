import { ReactComponent as WhiteDeptIcon } from '../../../assets/icons/DEPT-white-icon.svg'
import { ReactComponent as ClosingIcon } from '../../../assets/icons/closing-white-icon.svg';
import './DesktopMenu.scss';

const DesktopMenu = ({ boxVisibility, setBoxVisibility }) => {
    const menuItems = ["Home","Work", "Culture", "Services","Partners", "Stories", "Careers", "Events", "Contact"];
    return (
        <div style ={{ height:'100vh',display: 'flex', flexDirection: 'column', background: 'black', paddingRight: '1.6rem'}}>
            <div className='desktop-container'>
                <WhiteDeptIcon /><ClosingIcon onClick={()=> setBoxVisibility(!boxVisibility)}/>
            </div>
            <ul className='list-menu-desktop'>
                {menuItems.map((item, i) => <li key={i} className='list-item-menu-desktop'>{item}</li>)}
            </ul>
        </div>);
}

export default DesktopMenu;