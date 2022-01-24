import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProduct } from '../redux/actions/ProductActions';
import ItemsCarousel from 'react-items-carousel';
import { Button, Breadcrumbs, Link, Typography, IconButton, Select, InputLabel, MenuItem, FormControl, FormGroup } from '@material-ui/core';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import ReactImageMagnify from 'react-image-magnify';
import image from "../assets/images/defo.jpg";
import ruler from "../assets/images/ruler.jpg";
import patch from "../assets/images/patch.jpg";
import bag1 from "../assets/images/bag1.jpg";
import noimage from "../assets/images/noimage.jpg";
import banner from "../assets/images/product_banner.png";
import bag3 from "../assets/images/bag3.jpg";



 function Product(){
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
    return (
      <div className="defolum-container">
        <div style={{ height: 50, display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
          <div style={{ margin: '0 30px 0 30px' }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" >
                Anasayfa
          </Link>
              <Link color="inherit" href="/giyim">
                Giyim
          </Link>
              <Typography color="textPrimary">Çantalar</Typography>
            </Breadcrumbs>
          </div>
        </div>
        <div style={{ marginRight: '5%',display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <IconButton>
            <FaFacebook color="#444444" size={20} />
          </IconButton>
          <IconButton>
            <FaTwitter color="#444444" size={20} />
          </IconButton>
          <IconButton>
            <FaInstagram color="#444444" size={20} />
          </IconButton>
        </div>
        <div style={{ minHeight: 100, margin: "25px 75px 25px 75px", display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1,marginRight:'5%'}}>
            <h5 style={{ color: '#c70e0e' }}>YENİ</h5>
            <h2 style={{ fontWeight: '400' }}>Makyaj Çantası</h2>
            <h5 style={{ fontWeight: '100' }}>Lorem Ipsum</h5>

            <div style={{ margin: "25px 25px 0 0" }}>
              <span style={{ fontWeight: '100', textAlign: 'justify' }}>
                Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                because it is pain, but be causeoccasionally circumstances occur in which toil and pain can
                procure him some great pleasure. To take a trivial example,
                which of us ever undertakes laborious physical exercise,
                except to obtain some advantage from it!
              </span>
            </div>
            <div style={{ margin: "25px 25px 0 0", display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '50%' }}>
                <FormControl className="form-control">
                  <InputLabel id="demo-simple-select-label">Defo Oranı</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={0}
                    onChange={() => console.log("asasa")}>
                    <MenuItem value={0}>Seçiniz</MenuItem>
                    <MenuItem value={1}>1. derece</MenuItem>
                    <MenuItem value={2}>2. derece</MenuItem>
                    <MenuItem value={3}>3. derece</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ width: '50%', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <span style={{ marginLeft: 25, marginTop: 25 }}>
                  <img src={image} height={25} />
                  <a style={{ marginLeft: 10, textDecorationLine: 'underline', fontWeight: '100', fontSize: 14 }}>Defo Bilgilendirme</a>
                </span>
              </div>
            </div>

            <div style={{ margin: "25px 25px 0 0" }}>
              <InputLabel style={{ fontSize: 13 }}>Renk</InputLabel>
              <FormControl className="form-control">
                <div>
                  <Button>
                    <div style={{ width: 70, height: 15, borderRadius: 25, backgroundColor: 'purple' }}></div>
                  </Button>
                  <Button>
                    <div style={{ width: 70, height: 15, borderRadius: 25, backgroundColor: 'pink' }}></div>
                  </Button>
                  <Button>
                    <div style={{ width: 70, height: 15, borderRadius: 25, backgroundColor: 'green' }}></div>
                  </Button>
                  <Button disabled>
                    <div style={{ width: 70, height: 15, borderRadius: 25, backgroundColor: 'rgba(183, 23, 23, 0.5)' }}>
                    </div>
                  </Button>
                  <Button>
                    <div style={{ width: 70, height: 15, borderRadius: 25, backgroundColor: '#b71717' }}></div>
                  </Button>
                  <Button>
                    <div style={{ width: 70, height: 15, borderRadius: 25, backgroundColor: '#2988c3' }}></div>
                  </Button>
                  <Button>
                    <div style={{ width: 70, height: 15, borderRadius: 25, backgroundColor: '#e9ff45' }}></div>
                  </Button>

                </div>
              </FormControl>
            </div>

            <div style={{ margin: "25px 25px 0 0", flexDirection: 'row', display: 'flex' }}>
              <div style={{ width: '50%' }}>
                <InputLabel style={{ fontSize: 13 }}>Beden</InputLabel>
                <FormControl className="form-control">
                  <div>
                    <Button>
                      <div style={{ minWidth: 50, height: 25, border: "1px solid #707070", justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: 15, borderRadius: 25, color: '#707070' }}>
                        XS
                    </div>
                    </Button>
                    <Button>
                      <div style={{ minWidth: 50, height: 25, border: "1px solid #707070", justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: 15, borderRadius: 25, color: '#707070' }}>
                        S
                    </div>
                    </Button>
                    <Button>
                      <div style={{ minWidth: 50, height: 25, border: "1px solid #707070", justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: 15, borderRadius: 25, color: '#707070' }}>
                        M
                    </div>
                    </Button>
                    <Button>
                      <div style={{ minWidth: 50, height: 25, border: "1px solid #707070", justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: 15, borderRadius: 25, color: '#707070' }}>
                        XL
                    </div>
                    </Button>
                    <Button>
                      <div style={{ minWidth: 50, height: 25, border: "1px solid #707070", justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: 15, borderRadius: 25, color: '#707070' }}>
                        XXL
                    </div>
                    </Button>
                  </div>
                </FormControl>
              </div>
              <div style={{ width: '50%', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <span style={{ marginTop: 15,marginLeft:20 }}>
                  <img src={ruler} height={35} />
                  <a style={{ marginLeft: 10, textDecorationLine: 'underline', fontWeight: '100', fontSize: 14 }}>Beden Tablosu</a>
                </span>
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'row',margin: "50px 25px 0 0" }}>
              <div style={{ width: '50%' }}>
                <FormControl className="form-control">
                  <InputLabel id="demo-simple-select-label">Adet</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={0}
                    onChange={() => console.log("asasa")}>
                    <MenuItem disabled value={0}>Seçiniz</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ width: '50%', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>

              </div>
            </div>

            <div style={{ margin: "50px 25px 0 0", display: 'flex', flexDirection: 'row' }}>
               <div style={{width:'30%'}}>
                 <img src={patch} height={110} />
               </div>
               <div style={{width:'70%',display: 'flex', flexDirection: 'row' }}>
                  <div style={{width:'50%',display: 'flex', flexDirection: 'column'}}>
                      <span style={{fontSize:20,textDecorationLine:'line-through',color:'#3f693c'}}>79.90 TL</span>
                      <span style={{fontSize:30,fontWeight:'bold'}}>49.90 TL</span>
                      <span style={{color:'#c70e0e',fontWeight:'bold',fontSize:14}}>ÜCRETSİZ KARGO</span>
                  </div>
                  <div style={{width:'50%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <Button style={{backgroundColor:'#3f693c',color:'#ffffff'}}>
                       <span style={{padding:5}}>Sepete Ekle</span>
                    </Button>
                    <span style={{fontSize:12,color:'#3f693c',fontWeight:'100',textDecorationLine:'underline',marginTop:5}}>En geç 1 Nisanda kargoda</span>
                  </div>
               </div>
            </div>

          </div>
          <div style={{ flex: 1, flexDirection:'column',display:'flex'}}>
            <div style={{flex:2,backgroundColor:'red'}}>
            <ReactImageMagnify
                  enlargedImagePosition="over"
                  {...{
                    smallImage: {
                      alt: 'Çanta',
                      isFluidWidth: true,
                      src: bag1
                    },
                    largeImage: {
                      src: bag3,
                      width: 1000,
                      height: 800
                    }
                  }} />
            </div>
            <div style={{flex:1}}>
               
            </div>
          </div>
        </div>

      
        <img src={banner} width={'100%'}  />

      </div>
    );
  }

const mapStateToProps = function (store) {
  return {
    home: store.home,
  }
}

export default withRouter(connect(mapStateToProps, { getProduct })(Product))     
