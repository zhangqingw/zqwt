import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'
export default class Home extends Component{
constructor(){
    super()
}
render(){
    return(
        <div id="header">
			<div id="head">
				<p style={{marginLeft:'50px'}}>WIFI</p>
				<p style={{marginLeft:'90px'}}>9:15PM</p>
				<p style={{marginLeft:'120px'}}>82%</p>
			</div>
			<div id="content">
				<router-view></router-view>
			</div>
            <div id="u1">
				<li><NavLink to="/box1">首页</NavLink></li>
				<li><NavLink to="/box2">礼账</NavLink></li>
				<li><NavLink to="/box3">礼事</NavLink></li>
				<li><NavLink to="/box4">我的</NavLink></li>
			</div>
        </div>
    )
}
}
