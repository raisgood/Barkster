import React from 'react'
import "./Header.css";
import PetsIcon from "@material-ui/icons/Pets";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__icon" />
            </IconButton>
            ): (
            <IconButton>
                <PetsIcon fontSize="large" className="header__icon" />
            </IconButton> 
            )}

            <Link to="/">
            <IconButton>
            <img
                className="header__logo"
                src="https://image.shutterstock.com/shutterstock/photos/469733438/display_1500/stock-vector-dog-logo-icon-469733438.jpg"
                alt="barker logo"
            />
            </IconButton>
            </Link>

            <Link to="/chat">
            <IconButton>
            <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
            </Link>
        </div>
    );
}

export default Header;
