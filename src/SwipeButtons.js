import React from 'react';
import "./SwipeButtons.css";
//import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
//import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
//import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
//import BarkerCards from "./BarkerCards";
//import TinderCard from "react-tinder-card";
//import axios from "./axios";
//import { Link } from "react-router-dom";


function SwipeButtons( { redHeartPressed, greenHeartPressed } ) {

    return (
        <div className ="swipeButtons">
            <div className="redHeartPressed">
                    <IconButton 
                        onClick={() => redHeartPressed()}
                        className="swipeButtons__left">
                            <CloseIcon fontSize="large" />
                    </IconButton>
            </div>
            <div className="greenHeartPressed">
                    <IconButton 
                        onClick={() => greenHeartPressed()}
                        className="swipeButtons__right">
                            <FavoriteIcon fontSize="large" />
                    </IconButton>
            </div>
        </div>
      );
    };

export default SwipeButtons;