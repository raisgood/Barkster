import React from 'react';
import "./SwipeButtons.css";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";

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