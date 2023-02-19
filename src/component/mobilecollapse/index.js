import React from 'react'
import API from '../../api'

class MobileCollapse extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            toggle : false,
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

    collapseToggle(){
        if(this.state.toggle){
            this.setState({
                toggle : false
            })
        }
        else{
            this.setState({
                toggle : true
            })
        }
    }
    render(){
        return (
            <>
            <div className="md:hidden bg-slate-800 flex justify-start">
            <a href="#click">
                <button className="mx-10 py-5 my-2" onClick={this.collapseToggle.bind(this)}>
                    <svg viewBox="0 0 10 10"
                        id="espege"
                         height="30"
                         width="30"
                         role="img"
                         className={this.state.toggle ? "svg-icon fill-white rotate-90" : "svg-icon fill-white"}
                         focusable="false">
                        <path d="m1 7h8v2h-8zm0-3h8v2h-8zm0-3h8v2h-8z"/>
                    </svg>
                </button>
            </a>
            <div className="my-7">
                <h1 className="text-white text-2xl">Nonton Anime</h1>
            </div>
        </div>
        <div className="absolute z-50 md:hidden w-full shadow-lg" id="collapseToggleMobile" style={{visibility:this.state.toggle? "visible" : "hidden"}}>
            <div className="bg-slate-800 rounded-md grid grid-flow-row">
                <a href="/">
                    <button className="bg-zinc-700 text-slate-300 w-72 py-3 mx-10 mt-10 rounded-md">Home</button>
                </a>
                <a href="https://github.com/boboiazumi">
                    <button className="bg-zinc-700 text-slate-300 w-72 py-3 mx-10 mt-5 rounded-md">Github</button>
                </a>
                <a href={API.server}>
                    <button className="bg-zinc-700 text-slate-300 w-72 py-3 mx-10 mt-5 rounded-md">API</button>
                </a>
                <div className="grid grid-flow-col gap-1">
                    <form onSubmit={this.submit.bind(this)}>
                        <input type="text" placeholder="Search" name="search" className="md:w-20 md:mt-5 lg:w-36 2xl:w-56 h-12 ml-10 pl-4 rounded-md" onChange={this.search.bind(this)}/>
                        <input type="submit" value="GO" name="submit" className="bg-zinc-700 text-slate-300 w-20 py-3 mt-5 md:ml-0 lg:ml-3 rounded-md mb-28"/>
                    </form>
                </div>
            </div>
        </div>
            </>
        )
    }
}

export default MobileCollapse