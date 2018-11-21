import React,{Component,Fragment} from 'react'
import connect from "react-redux/es/connect/connect";
import {withRouter} from 'react-router-dom'
import * as actionCreators from './store/actionCreators'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {

        return(
            <Fragment>
                home
            </Fragment>
        )
    }

}
const mapStateToProps=(state)=>({
    menuList:state.home.menuLeftList,
    menuLeftShow:state.header.menuLeftShow
})

const mapDispatchToProps=(dispatch)=>({
    getMenuList(){
        dispatch(actionCreators.getMenuLeftList())
    }
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))