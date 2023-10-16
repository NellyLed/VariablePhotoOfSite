import { NavLink } from 'react-router-dom';
import nav from '../style/NavLink.module.css';
const MyNavLink = ({ children, ...props }) => {
    return (
        <NavLink {...props} className={nav.isActive}>
            {children}
        </NavLink>
    );
};
export default MyNavLink;
