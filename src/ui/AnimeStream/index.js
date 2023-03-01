import React from 'react'
import API from '../../api';
import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'

class AnimeStream extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state = {
            count : 0,
            onloaded : false,
            title: "Loading",
            source : {
                type:"video",
                sources: [
                    {
                        src: "/img/blank.mp4",
                        type: "video/mp4",
                        size:360
                    }
                ],
                poster: "/img/kaguya.png"
            },
            mega: {}
        }
        this.defaultPlyrOptions = Plyr.defaultProps.options
        this.defaultPlyrOptions.autoplay = true
        this.player = React.createRef()
    }

    async onloading(){
        let point = "";
        for(let i = 0; i < this.state.count; i++){
            point = point + ".";
        }
        this.setState({
            count: this.state.count + 1
        })
        if(this.state.count > 3){
            this.setState({
                count: 0
            })
        }
        if(!this.state.onloaded){
            this.setState({
                title: "Loading "+point
            })
            setTimeout(() => {
                this.onloading()
            }, 1000)
        }
    }

    async sourceGet(){
        this.onloading()
        let sources = []
        let getstream = await fetch(API.getstream+this.props.epsid).then((res) => res.json())
        let title = await fetch(API.gettitle+this.props.epsid).then((res) => res.json())
        title = title.data.title

        getstream = await getstream.data

        for(let i = 0; i < getstream.length; i++){
            let s = {
                src: getstream[i].stream,
                type: "video/mp4",
                size: getstream[i].quality
            }

            sources.push(s)
        }

        this.setState({
            onloaded : true,
            title: title,
            source: {
                type: "video",
                title: {title},
                sources: sources,
                poster: "/img/kaguya.png"
            }
        })
    }

    componentDidMount(){
        this.sourceGet()
        fetch(API.getmega+this.props.epsid).then((res) =>{
            return res.json()
        }).then((json) =>{
            this.setState({
                mega: json
            })
        })
    }

    /*
    {this.state.videourl === "" ? "" : (
                    <video className="w-10/12" controls>
                        <source src={this.state.videourl}></source>
                    </video>)}
    */

    render(){
        return (
            <>
            <div className="bg-slate-800 rounded-md w-full pt-3 px-3 md:pt-10 md:px-10 col-span-12 mt-3 sm:mt-0">
                <div className="block">
                    <a href={"/anime/"+this.props.animeid}>
                        <button className="bg-zinc-700 text-white p-3 rounded-md mb-3">
                            Kembali
                        </button>
                    </a>
                </div>
                <p className="text-white text-lg mb-5">{this.state.title}</p>
                <div className="block w-full mb-2">
                    <Plyr ref={(player) => (this.player.current = player)} {...{source: this.state.source, options: this.defaultPlyrOptions}}/>
                </div>
                <div className="block mb-9">
                    {this.state.mega.hasOwnProperty("data") ? (
                       <>
                        
                            <>
                                <p className="text-white">Stream Lainnya</p>
                                <table className="w-full">
                                    <tbody>{this.state.mega.data.map((data, index) => (
                                        <tr key={index}>
                                            <td className='text-white'>
                                                {data.quality+"p"}
                                            </td>
                                            <td>
                                                <a href={data.stream} className="text-white" target="blank">Link</a>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        
                       </>
                    ): (
                        <>
                        </>
                    )}
                </div>
            </div>
            </>
        )
    }
}

export default AnimeStream;