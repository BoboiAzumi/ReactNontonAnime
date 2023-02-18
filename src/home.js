import React from 'react'
import MobileCollapse from './component/mobilecollapse'
import Wrap from './ui/wrap/index'
import Sidebar from './ui/sidebar/index'
import Content from './ui/content'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return (
            <>
                <MobileCollapse />
                    <Wrap>
                        <Sidebar />
                        <Content search="a"/>
                    </Wrap>
            </>
        )
    }
}

export default Home