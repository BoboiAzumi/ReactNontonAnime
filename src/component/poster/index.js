import React from 'react'

class Poster extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return (
            <>
                <img src="/img/kaguya.png" alt="Poster" className="mx-0 rounded-md w-auto 2xl:w-screen"/>
            </>
        )
    }
}

export default Poster