import BurdeosLogo from '../../assets/BurdeoTextLogo.png';
import { NavLink } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import {FaRegUser} from 'react-icons/fa';
import {BiCart} from 'react-icons/bi';

import './UserMenu.css';

export const UserMenu = () => {
	return (
		<>
			<header className='userMenu'>
				<div className='userMenu__logo'>
					<img src={BurdeosLogo} alt='Burdeos Logo' />
				</div>
				<div className='userMenu__menu'>
					<ul>
						<li className='userMenu__nav__item'>
							<NavLink
								className={({ isActive }) =>
									`userMenuItem ${isActive ? 'userMenuActive' : ''}`
								}
								to={'/'}
							>
								Home
							</NavLink>
						</li>
                        <li className='userMenu__nav__item'>
							<NavLink
								className={({ isActive }) =>
									`userMenuItem ${isActive ? 'userMenuActive' : ''}`
								}
								to={'/some'}
							>
								About Us
							</NavLink>
						</li>
                        <li className='userMenu__nav__item'>
							<NavLink
								className={({ isActive }) =>
									`userMenuItem ${isActive ? 'userMenuActive' : ''}`
								}
								to={'/some'}
							>
								Shop
							</NavLink>
						</li>
                        <li className='userMenu__nav__item'>
							<NavLink
								className={({ isActive }) =>
									`userMenuItem ${isActive ? 'userMenuActive' : ''}`
								}
								to={'/some'}
							>
								Coffee
							</NavLink>
						</li>
					</ul>
				</div>
                <div className="userMenu__huincha">
                    50% de descuento en todos los productos
                </div>
                <div className="userMenu_opciones">
                    <button className='userMenu_opciones__item'>
                        <MdSearch/>
                    </button>
                    <button className='userMenu_opciones__item'>
                        <FaRegUser/>
                    </button>
                    <button className='userMenu_opciones__item'>
                        <BiCart/>
                    </button>
                </div>
			</header>
		</>
	);
};
