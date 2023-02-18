import React from 'react'

class Wrap extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
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