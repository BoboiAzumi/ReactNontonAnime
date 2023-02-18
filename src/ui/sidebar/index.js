import React from 'react'
import API from '../../api'


class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            search : ""
        }
    }

    search(e){
        this.setState({
            search : e.target.value
        })
    }

    submit(e){
        e.preventDefault();
        window.location.href = "/search/"+this.state.search;
    }
    
    render(){
        return (
            <div className="hidden md:block md:w-48 lg:w-80 2xl:w-96">
                <div className="bg-slate-800 rounded-md">
                    <a href="/">
                        <button className="bg-zinc-700 text-slate-300 md:w-32 lg:w-60 2xl:w-80 py-3 mx-10 mt-10 rounded-md">Home</button>
                    </a>
                    <a href="https://github.com/boboiazumi">
                        <button className="bg-zinc-700 text-slate-300 md:w-32 lg:w-60 2xl:w-80 py-3 mx-10 mt-5 rounded-md">Github</button>
                    </a>
                    <a href={API.server}>
                        <button className="bg-zinc-700 text-slate-300 md:w-32 lg:w-60 2xl:w-80 py-3 mx-10 mt-5 rounded-md">API</button>
                    </a>
                    <div className="grid grid-flow-col gap-1">
                        <form onSubmit={this.submit.bind(this)}>
                            <input type="text" placeholder="Search" name="search" className="md:w-20 md:mt-5 lg:w-36 2xl:w-56 h-12 ml-10 pl-4 rounded-md" onChange={this.search.bind(this)}/>
                            <input type="submit" value="GO" name="submit" className="bg-zinc-700 text-slate-300 md:w-12 lg:w-20 py-3 mt-5 md:ml-0 lg:ml-3 rounded-md mb-28"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar