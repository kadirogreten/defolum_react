import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, Input} from 'reactstrap';
import login_image from "../assets/images/register/register.jpg";

function Register() {
    return (
        <div className="defolum-container">
            <div style={{ minHeight: 500, marginRight: '15%', marginLeft: '15%', marginTop: '2.5%', marginBottom: '2.5%', display: 'flex', flexDirection: 'row' }}>
                <div style={{ flex: 1 }}>
                    <img height={null} width={'100%'} src={login_image} alt={"Defolum"} />
                </div>
                <div style={{ flex: 1, flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ fontWeight: 'bold', fontSize: 35 }}>Kayıt Ol</h1>
                    <label style={{ fontWeight: 100, marginRight: 50, marginLeft: 50, textAlign:'center' }}>Lorem ipsum dolas sit amet. Lorem ipsum dolas sit amet.Lorem ipsum dolas sit amet.</label>

                    <div style={{ marginTop: 25, width: '60%' }}>
                        <Input style={{ marginBottom: 10, borderColor: '#707070', borderWidth: 2 }} type="text" placeholder="Ad Soyad" />
                        <Input style={{ marginBottom: 10, borderColor: '#707070', borderWidth: 2 }} type="email" placeholder="E-posta" />
                        <Input style={{ marginBottom: 10, borderColor: '#707070', borderWidth: 2 }} type="password" placeholder="Şifre" />
                        <Input style={{ marginBottom: 10, borderColor: '#707070', borderWidth: 2 }} type="password" placeholder="Şifre Onay" />
                        <div style={{marginBottom:10,flexDirection:'row',display:'flex',marginLeft:-10}}>
                        <Checkbox
                            defaultChecked
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                        <label style={{fontSize:12}}>Önemli kampanyalardan haberdar olmak için <u>Rıza Metni</u> kapsamında elektronik ileti almak istiyorum.</label>
                        </div>

                        <Button style={{ backgroundColor: '#487444', marginBottom: 10 }} size="lg" block>Kayıt Ol</Button>
                    </div>

                    <div style={{ marginTop: 25, width: '40%', textAlign: 'center' }}>
                        <label style={{ fontWeight: '400' }}>Zaten bir hesabın var mı?</label><br />
                        <a onClick={()=>this.props.history.push("/login")} style={{ color: '#3a3a3a', cursor: 'pointer', fontSize: 16, textDecorationLine: 'underline', fontWeight: 'bold' }}>Giriş Yap</a>
                    </div>

                </div>
            </div>

        </div>
    )

}

export default Register;