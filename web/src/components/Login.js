import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import login_image from "../assets/images/login/login.jpg";
import { makeLogin, setInput } from '../redux/actions/LoginActions';
import {CircularProgress,Fab} from '@material-ui/core';

class Login extends Component {

    render() {
        return (
            <div className="defolum-container">
                <div style={{ minHeight: 500, marginRight: '10%', marginLeft: '10%', marginTop: '2.5%', marginBottom: '2.5%', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: 1 }}>
                        <img height={null} width={'100%'} src={login_image} alt={"Defolum"} />
                    </div>
                    <div style={{ flex: 1, flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: 35 }}>Giriş Yap</h1>
                        <label style={{ fontWeight: 100, marginRight: 50, marginLeft: 50,textAlign:'center' }}>Lorem ipsum dolas sit amet. Lorem ipsum dolas sit amet.Lorem ipsum dolas sit amet.</label>
                        <div style={{ marginTop: 25, width: '50%' }}>
                            <Input onChange={(e) => this.props.setInput("email", e.target.value)} style={{ marginBottom: 10, borderColor: this.props.login.error_email ? '#ff4d4d' : '#707070', borderWidth: 2 }} type="text" placeholder="E-posta" />
                            <Input onChange={(e) => this.props.setInput("password", e.target.value)} style={{ marginBottom: 10, borderColor: this.props.login.error_password ? '#ff4d4d' :  '#707070', borderWidth: 2 }} type="password" name="password" placeholder="Şifre" />
                             <Fab variant="extended" size="large"  onClick={() => this.props.makeLogin([{
                                key: "email",
                                value: this.props.login.email.trim(),
                                required: true
                            }, {
                                key: "password",
                                value: this.props.login.password.trim(),
                                required: true

                            }])} style={{ backgroundColor: '#487444', marginBottom: 10, width:'100%', borderRadius:5, color:'#ffffff',fontWeight:'600',fontSize:17,fontFamily:"inherit" }}>{this.props.login.isFetching ? <CircularProgress size={20} style={{color:'#ffffff',marginTop:2}} /> : "Giriş Yap".toLocaleUpperCase('tr')}</Fab>
                            <a href="#" style={{ color: '#3b3b3b', cursor: 'pointer', fontSize: 14, textDecorationLine: 'underline' }}>Şifremi Unuttum</a>
                        </div>

                        <div style={{ marginTop: 50, width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ height: 2, backgroundColor: '#bbbbbb', width: '35%' }}></div>
                            <div style={{ width: '30%', height: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <label style={{ color: "#4b4b4b", fontSize: 18, fontWeight: '600' }}>veya</label>
                            </div>
                            <div style={{ height: 2, backgroundColor: '#bbbbbb', width: '35%' }}></div>
                        </div>

                        <div style={{ marginTop: 50, width: '40%' }}>
                            <Button style={{ backgroundColor: '#3b5998', border: 'none', marginBottom: 10, fontSize: 14 }} block><FaFacebookF /> Login with Facebook</Button>
                            <Button style={{ backgroundColor: '#d34836', border: 'none', marginBottom: 10, fontSize: 14 }} block><FaGooglePlusG style={{ fontSize: 20 }} /> Login with Google</Button>
                        </div>

                        <div style={{ marginTop: 25, width: '40%', textAlign: 'center' }}>
                            <label style={{ fontWeight: '400' }}>Hesabın yok mu?</label><br />
                            <a style={{cursor:'pointer'}} onClick={()=>this.props.history.push("/register")} style={{ color: '#3a3a3a', cursor: 'pointer', fontSize: 16, textDecorationLine: 'underline', fontWeight: 'bold' }}>Kayıt Ol</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = function (store) {
    return {
        login: store.login
    }
}

export default withRouter(connect(mapStateToProps, { makeLogin, setInput })(Login))
