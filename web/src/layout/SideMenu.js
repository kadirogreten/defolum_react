import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../redux/actions/SideMenuActions';
import { withRouter } from 'react-router-dom';
import { FaTimes, FaArrowRight, FaUserCircle } from 'react-icons/fa';
import { SwipeableDrawer, ListItem, ListItemIcon } from '@material-ui/core'
class SideMenu extends Component {

  navigate = (path) => {
    this.props.history.push(path);
    this.props.toggleMenu();
  }

  render() {
    return (
      <SwipeableDrawer
        anchor="left"
        onClose={() => console.log("close")}
        onOpen={() => console.log("open")}
        open={this.props.sideMenu.open}>
        <div className="overlay-menu-header">
          <span className="menu-text"><i></i><FaUserCircle color="#ffffff" size={22} style={{ marginRight: 10,marginBottom:2 }} />Merhaba, Giriş Yap</span>
          <button className="close-button" onClick={() => this.props.toggleMenu()}><FaTimes color="#ffffff" size={18} /></button>
        </div>
        <div className="list-group">
          <ListItem onClick={() => this.navigate("/")} button>
            <ListItemIcon>
              <FaArrowRight size={20} />
            </ListItemIcon>
            <span style={{padding:"3px 0 5px 0"}}>Anasayfa</span>
          </ListItem>
          <ListItem onClick={() => this.navigate("/login")} button>
            <ListItemIcon>
              <FaArrowRight size={20} />
            </ListItemIcon>
            <span style={{padding:"3px 0 5px 0"}}>Giriş Yap</span>
          </ListItem>
          <ListItem onClick={() => this.navigate("/register")} button>
            <ListItemIcon>
              <FaArrowRight size={20} />
            </ListItemIcon>
            <span style={{padding:"3px 0 5px 0"}}>Kayıt Ol</span>
          </ListItem>
          <ListItem onClick={() => this.navigate("/400")} button>
            <ListItemIcon>
              <FaArrowRight size={20} />
            </ListItemIcon>
            <span style={{padding:"3px 0 5px 0"}}>404</span>
          </ListItem>
          <ListItem onClick={() => this.navigate("500/")} button>
            <ListItemIcon>
              <FaArrowRight size={20} />
            </ListItemIcon>
            <span style={{padding:"3px 0 5px 0"}}>500</span>
          </ListItem>
          <ListItem onClick={() => this.navigate("/product")} button>
            <ListItemIcon>
              <FaArrowRight size={20} />
            </ListItemIcon>
            <span style={{padding:"3px 0 5px 0"}}>Ürün Sayfası</span>
          </ListItem>
        </div>
      </SwipeableDrawer>
    )
  }
}


const mapStateToProps = function (store) {
  return {
    sideMenu: store.sideMenu,
  }
}

export default withRouter(connect(mapStateToProps, { toggleMenu })(SideMenu))     