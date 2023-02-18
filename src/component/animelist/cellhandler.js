import React from 'react'

class Cellhandler extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid-flow-row-dense gap-4">
                {this.props.children}
            </div>
        )
    }
}

export default Cellhandler