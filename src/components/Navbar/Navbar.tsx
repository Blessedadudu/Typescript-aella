import './Navbar.scss'
import Starwars from '../../assets/star-wars.svg'
import { NavLink } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { useSelector } from 'react-redux';
// import { RootState } from 'typesafe-actions';

const Navbar = () => {
    const CartCount = useSelector((state: any) => state.Cart.amount)

    return (
        <div className='Navbar flex--2 border--main'>
            <NavLink to='/'>
                <img src={Starwars} alt='' className='logo'/>
            </NavLink>
            <div className='navLink flex--1'>
                <NavLink activeClassName="activeNow" to='/films'>films</NavLink>
                <NavLink activeClassName="activeNow" to='/people'>people</NavLink>
                <NavLink activeClassName="activeNow" to='/planets'>planets</NavLink>
                <NavLink activeClassName="activeNow" to='/spaceships'>starships</NavLink>
            </div>
            <div className="cart--icon">
                <span>{CartCount}</span>
                <MdFavorite className='icon-favorite'/>
            </div>
        </div>
    )
}

export default Navbar