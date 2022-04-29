import ReactDOM  from "react-dom";
import React from "react";
import App from "./App";
import './index.css';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-KCQG27M'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(<App/>, document.getElementById('root'));