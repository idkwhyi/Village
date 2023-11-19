import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const NavbarList = (props) => {
    const navigate = useNavigate();
    const [isHovered, setHovered] = useState(false);
    NavbarList.propTypes = {
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    };

    return (

        <>
            <button
                onClick={() => navigate(props.link)}
                className={`item-container ${isHovered ? 'item-hovered' : ''}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >{props.name}
            </button>
        </>
    )
}

export default NavbarList;