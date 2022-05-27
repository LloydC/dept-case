import React from 'react'
import { ReactComponent as BlackDeptIcon } from '../../../assets/icons/DEPT-black-icon.svg'
import './HeaderDesktop.scss';

const HeaderDesktop = () => {
  return (
    <div className='header-container'>
        <div className='navigation'>
            <BlackDeptIcon/>
            <div className='menu'>
                <span className="name">Menu</span>
                <button className='hamburger'>
                    <span className='dash'></span>
                    <span className='dash'></span>
                </button>
            </div>
        </div>
        <div className='underliner'></div>
        <div className='content'>
            <div className='header-title-container'>
                <h1 className="title">Work</h1>
            </div>
            <div className="cta-button-container">
                <button className='cta-button-desktop'>View case</button>
            </div>
        </div>
    </div>
  )
}

export default HeaderDesktop;
