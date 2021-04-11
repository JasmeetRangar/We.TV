import React from "react";
import Style from "style-it";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "20vw",
  },
  media: {
    objectFit: "contain",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return Style.it(
    `#monitor {
      background: #000; 
      position: relative;
      border-top: 3px solid #888; 
      padding: 0.5% 0.5% 1.5% 0.5%; 
      border-radius: 10px; 
      border-bottom-left-radius: 50% 2%; 
      border-bottom-right-radius: 50% 2%; 
      transition: margin-right 1s;
      drop-shadow: 1px 1px 1px black;
    }
    
    #monitor:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 3%;
      left: 36%;
      height: .5%; 
      width: 28%;
      background: #ddd; 
      border-radius: 50%; 
      box-shadow: 0 0 3px 0 white; 
    }
    
    #monitorscreen {
      position: relative;
      background-color: #777;
      background-size: cover; 
      background-position: top center;
      height: 0; 
      padding-bottom: 56.25%; 
      position: relative;
      overflow: hidden;
      // display: inline-block;
    }

    // OPTIONAL BREAKPOINT FOR TV GLOW ANIMATION
    // @media all and (min-width: 960px)
@media all and (min-width: 960px) {
	#monitor {
		-webkit-animation: tvflicker .2s infinite alternate; 
		-moz-animation:    tvflicker .5s infinite alternate; 
		-o-animation:      tvflicker .5s infinite alternate; 
		animation:         tvflicker .5s infinite alternate; 
	}

	@-webkit-keyframes tvflicker {
	  0%   { box-shadow: 0 0 100px 0 rgba(200,235,255,0.4); }
	  100% { box-shadow: 0 0 95px 0 rgba(200,230,255,0.45); }
	}
	@-moz-keyframes tvflicker {
	  0%   { box-shadow: 0 0 100px 0 rgba(225,235,255,0.4); }
	  100% { box-shadow: 0 0 60px 0 rgba(200,220,255,0.6); }
	}
	@-o-keyframes tvflicker {
	  0%   { box-shadow: 0 0 100px 0 rgba(225,235,255,0.4); }
	  100% { box-shadow: 0 0 60px 0 rgba(200,220,255,0.6); }
	}
	@keyframes tvflicker {
	  0%   { box-shadow: 0 0 100px 0 rgba(225,235,255,0.4); }
	  100% { box-shadow: 0 0 60px 0 rgba(200,220,255,0.6); }
	}
}
    
    #image {
    width: 100%;
    height: auto; 
    }

    h2 {
      color: white;
      font-size: 2.5em;
      background: black;
      opacity: 0.6;
      position: absolute;
      z-index: 999;
      margin: 0 auto;
      left: 0;
      right: 0;        
      text-align: center;
      top: 0%;
    }
    `,
    // TV Frame design inspired by https://codepen.io/leon-ho/pen/KqrBt
    <div id="monitor">
      <div id="monitorscreen">
        <h2>The Office (US)</h2>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg"
          alt="Crazy Boys"
          id="image"
        />
      </div>
    </div>
  );
}