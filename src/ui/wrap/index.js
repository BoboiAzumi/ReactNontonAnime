import React from 'react'
import API from '../../api';

class Wrap extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    componentDidMount(){
        let version = "v1.21.BETA.0"
        console.log(API.server)
        if(!localStorage.hasOwnProperty("version") || localStorage.getItem("version") !== version){
            let settings = {
                target_blank_click: false
            }
            let history = {}

            localStorage.setItem("settings", JSON.stringify(settings))
            localStorage.setItem("server", "https://nontonanime.thedark38.repl.co")
            localStorage.setItem("interface", "OD")
            localStorage.setItem("history", JSON.stringify(history))
            localStorage.setItem("version", version)
            console.log("Version Changed, Updated "+version)
        }
    }

    render(){
        return (
            <div className="container sm:px-10 sm:pt-7 md:mx-10 md:px-24 md:pt-10">
                <div className="grid grid-flow-col md:gap-4">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Wrap