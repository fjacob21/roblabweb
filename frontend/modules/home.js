import React from 'react'
import jquery from 'jquery'
import Errors from './errors'
import createHistory from "history/createHashHistory"
import Text from './localization/text'

const history = createHistory();

class Home extends React.Component{
        constructor(props) {
                super(props);
        }

        render(){
                
                return (
                        <div className='home'>
                                RobLab server
                        </div>)
        }
}

module.exports = Home;
