import React from 'react'

class Animelist extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return (
            <div className="w-full md:w-60 lg:w-52 2xl:w-72">
                <div className="block bg-slate-800 h-auto p-2">
                    <div className="grid grid-rows-1 grid-flow-row gap-1">
                        <a href={"/anime/"+this.props.animeid} className="w-full">
                            <div className="flex flex-wrap justify-center">
                                <img src={this.props.imageanime} alt="Anime" className="rounded-lg object-fill" />
                            </div>
                            <h4 className="text-white font-sans font-normal text-xs mt-3">{this.props.title}</h4>
                        </a>
                        <h5 className="text-slate-300 font-sans font-thin text-xs">{this.props.genre}</h5>
                        <div className="grid grid-rows-1 grid-flow-col mt-2">
                            <h5 className="text-white">{this.props.rating}</h5>
                            <h5 className="text-white text-right">{this.props.status}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Animelist