import React from 'react'
import API from '../../api'

class AnimeDetail extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            info : {},
            eps : [],
            isTargetBlank : false
        }
    }

    componentDidMount(){
        if(localStorage.getItem("server") === "https://nontonanime.thedark38.repl.co"){
            fetch(API.info+this.props.animeid)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.setState({
                    info : json.data
                })
            }).catch((e) =>{
                console.log(e)
            })

            fetch(API.episode+this.props.animeid)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.setState({
                    eps : json.data.episode_list
                })
                //console.log(json.data.episode_list)
            }).catch((e) =>{
                console.log(e)
            })
        }
        else{
            fetch(API.getallinfo+this.props.animeid)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                console.log(API.getallinfo+this.props.animeid)
                if(json.status === 302){
                    document.location.href = "/movie/"+this.props.animeid
                }
                this.setState({
                    info : json.data,
                    eps: json.data.episode_list
                })
                //console.log(this.state.info)
            }).catch((e) =>{
                console.log(e)
            })
        }

        let isTargetBlank = JSON.parse(localStorage.getItem("settings")).target_blank_click;
        this.setState({
            isTargetBlank: isTargetBlank
        })

        
    }

    render(){
        return (
            <div className="bg-slate-800 rounded-md md:w-full pt-10 px-10 col-span-12 mt-4 sm:mt-0">
                <div className="block xl:grid xl:grid-flow-col xl:gap-8 mb-7">
                    <div className="flex justify-center xl:block mb-3">
                        <img src={this.state.info.hasOwnProperty("img") ? window.atob(this.state.info.img) : "/img/kaguya.png"} alt="Anime Gambar" className="w-96"/>
                    </div> 
                    <div className="block col-span-10">
                        <p className="text-white text-lg">Anime Detail</p>
                        <table className=" text-stone-300 w-52 md:w-96 border-collapse">
                            <tbody>
                                {this.state.info.hasOwnProperty("info") ? Object.keys(this.state.info.info).map((data, index) => (
                                    <tr key={index}>
                                        <td>
                                            {data}
                                        </td>
                                        <td>
                                            :
                                        </td>
                                        <td>
                                            <p className="text-ellipsis">{this.state.info.info[data]}</p>
                                        </td>
                                    </tr>
                                )) 
                                    : 
                                ""}
                            </tbody>
                        </table>
                    </div>
                </div>
                {this.state.info.hasOwnProperty("info") ? this.state.info.sinopsis !== "" ? (
                    <>
                        <p className="text-lg text-white">Sinopsis</p>
                        <p className="text-white mb-10">{this.state.info.sinopsis}</p>
                    </>
                ) : "" : ""}
                <table className="w-full mb-10 text-white">
                    <tbody>
                        {this.state.eps.map((data, index) => (
                            <tr key={index} className="bordereps">
                                <td>
                                    {data.text}
                                </td>
                                <td>
                                    <a href={"/stream/"+this.props.animeid+"/"+data.episode_id} target={this.state.isTargetBlank ? "blank" : ""}>
                                        <button className="rounded-md bg-blue-500 px-5 py-2">
                                            Tonton
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AnimeDetail