import React from 'react'

class Settings extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            settings : {
                target_blank_click: false
            }
        }
    }

    componentDidMount(){
        let settings = localStorage.getItem("settings")
        settings = JSON.parse(settings)
        console.log(settings)
        this.setState({
            settings: settings
        })
    }

    toggler_1(){
        let target_blank_click = !this.state.settings.target_blank_click
        this.setState({
            settings: {
                target_blank_click: target_blank_click
            }
        })

        let settings = {
            target_blank_click: !this.state.settings.target_blank_click
        }
        localStorage.setItem("settings", JSON.stringify(settings))
        console.log(this.state.settings.target_blank_click)
    }

    render(){
        return (
            <>
                <div className="bg-slate-800 rounded-md w-full pt-3 px-3 md:pt-10 md:px-10 col-span-12 mt-3 sm:mt-0">
                    <p className="text-white text-lg">General Settings</p>
                    <hr></hr>

                    <div className="my-4 mx-2">
                        <input type="checkbox" id="blanked_" checked={this.state.settings.target_blank_click} onChange={this.toggler_1.bind(this)}/>
                        <label htmlFor="blanked_" className="text-white ml-2">Buka Tab Baru Setelah Klik Tonton</label>
                    </div>
                    <a href="/">
                        <button className="bg-zinc-700 text-white p-3 rounded-md mb-3">
                            Kembali
                        </button>
                    </a>
                </div>
            </>
        )
    }
}

export default Settings