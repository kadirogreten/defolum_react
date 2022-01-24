import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getCartCount} from '../redux/actions/HeaderActions';
import {toggleMenu} from '../redux/actions/SideMenuActions';
import logo from '../assets/images/logo.png';
import { Button,Input } from 'reactstrap';
import {FaShoppingCart,FaUser,FaSearch } from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import {IconButton} from '@material-ui/core';
class Header extends Component {

    render(){
        return(
            <div className="header">
                <div className="header-top-banner"><label>Tüm Ürünlerde %30 İndirim</label></div>
                <div className="nav-header">
                    <div className="menu-button-container">
                        <Button onClick={()=> this.props.toggleMenu("open")} className="menu-button">
                            <AiOutlineMenu color="#000000" size={25} style={{marginBottom:2,marginLeft:10}} />
                        </Button>
                    </div>
                    <div className="nav-logo">
                            <a style={{cursor:'pointer'}} onClick={()=>this.props.history.push("/")}><img className="logo"  src={logo} alt="defolum" /></a>
                    </div>
                    <div className="nav-right">
                        <div className="nav-search">
                           <Input className="nav-search-input" type="text" placeholder="Ara..." /> 
                           <FaSearch color="#cccccc" size={20} style={{position:"relative",right:20}} />  
                        </div>   
                        <div className="nav-button-container">
                           <div className="nav-button">
                               <IconButton>
                                  <FaUser className="header-icon-user" />                               
                               </IconButton>
                             
                           </div>                          
                            <div className="nav-button">
                               <IconButton>
                               <div style={{height:15,width:15,borderRadius:7.5,backgroundColor:'#ff4d4d',position:'absolute',top:3,right:5,color:'#ffffff',fontWeight:'bold',fontSize:9,display:'flex',justifyContent:'center',alignItems:'center'}}>4</div>                           
                                 <FaShoppingCart className="header-icon-cart" />
                               </IconButton>
                            </div>  
                        </div>   
                    </div>
                </div>
                <div style={{height:2,backgroundColor:'#444444',marginLeft:25,marginRight:25,marginBottom:10}}></div>
            </div>          
        )
    }
}

const mapStateToProps = function(store) {
    return {
      header: store.header
    }
  }
  
  export default withRouter(connect(mapStateToProps,{toggleMenu,getCartCount})(Header))     