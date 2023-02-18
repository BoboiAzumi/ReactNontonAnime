import React from 'react'
import Animelist from '../../component/animelist/index'
import Cellhandler from '../../component/animelist/cellhandler'
import Poster from '../../component/poster'
import NotFound from '../../component/NotFound'
import API from '../../api'

class Content extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        fetch(API.search+(this.props.search === "" ? "a": this.props.search),{
            crossDomain: true
        }).then((res) =>{
            if(res.status === 200){
                return res.json()
            }
        }).then((json) => {
            this.setState({
                data: json.hasOwnProperty("data") ? json.data : []
            })
        })
    }

    render(){
        return (
            <div className="grid grid-flow-row mx-10 my-10 sm:mx-0 sm:my-0">
                <Poster />
                <p className="text-white mt-9">{this.props.search === ""? "Last Update": "Hasil Pencarian : "+this.props.search}</p>
                {this.state.data.length === 0? (<p className="text-white">Tidak dapat menemukan hasil <b>{this.props.search}</b></p>) : ""}
                {this.state.data.length === 0? (<NotFound />) : ""}
                <Cellhandler>
                    {this.state.data.map((field, index) => (
                        <Animelist 
                        key = {index}
                        animeid = {field.anime_id}
                        imageanime={window.atob(field.img)}
                        title={field.title}
                        genre={field.genre.join(", ")}
                        rating="7.67"
                        status="Ongoing"/>
                    ))}
                </Cellhandler>
            </div>
        )
    }
}

export default Content