import React from 'react'
import './Footer.css'; 
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="footer">
            <ul>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/track")}>Track</li>
                <li onClick={() => navigate("/reminder")}>Reminder</li>
                <li onClick={() => navigate("/stats")}>Stats</li>
            </ul>
        </div>
    )
}

export default Footer;