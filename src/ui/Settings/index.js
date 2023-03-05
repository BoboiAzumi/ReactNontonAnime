import React from 'react'

class Settings extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            settings : {
                target_blank_click: false
            },
            server: "",
            interface_: ""
        }
    }

    componentDidMount(){
        let settings = localStorage.getItem("settings")
        let server = localStorage.getItem("server")
        let interface_ = localStorage.getItem("interface")
        settings = JSON.parse(settings)
        this.setState({
            settings: settings,
            server: server,
            interface_: interface_
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

    serverSelected(e){
        let server = e.target.value
        localStorage.setItem("server", server)
        this.setState({
            server: server
        })
    }

    interfaceSelected(e){
        let interface_ = e.target.value
        localStorage.setItem("interface", interface_)
        this.setState({
            interface_: interface_
        })
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
                    <p className="text-white text-lg">Server Settings</p>
                    <hr></hr>
                    <div className="my-4 mx-2">
                        <p className="text-white text-md">API Server</p>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={localStorage.getItem("server")} onChange={this.serverSelected.bind(this)}>
                            <option value="https://nontonanime.thedark38.repl.co">https://nontonanime.thedark38.repl.co (Python)</option>
                            <option value="https://nontonanimejsserver1.cyclic.app" >https://nontonanimejsserver1.cyclic.app (NodeJS)</option>
                            <option value="http://localhost:5000" >http://localhost:5000 (Development)</option>
                        </select>
                        <p className="text-white text-md">Interface</p>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={localStorage.getItem("interface")} disabled={localStorage.getItem("server") === "https://nontonanime.thedark38.repl.co" ? true : false} onChange={this.interfaceSelected.bind(this)}>
                            <option value="OD">OD</option>
                            <option value="nnmx">NNMX</option>
                        </select>
                    </div>

                    <a href="/">
                        <button className="bg-zinc-700 text-white p-3 rounded-md mb-3">
                            Simpan
                        </button>
                    </a>
                </div>
            </>
        )
    }
}

export default Settings