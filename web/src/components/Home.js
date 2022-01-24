import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getHome} from '../redux/actions/HomeActions';
import {CarouselItem,CarouselControl,Carousel,CarouselIndicators,Button} from 'reactstrap';
import {FaRecycle,FaShippingFast } from 'react-icons/fa';
import {MdAvTimer,MdLockOutline } from 'react-icons/md';

import homeImage from "../assets/images/carousel.png";
import banner from "../assets/images/home/banner.png";
import product_1 from "../assets/images/home/product_1.png";
import product_2 from "../assets/images/home/product_2.png";
import product_3 from "../assets/images/home/product_3.png";
import product_4 from "../assets/images/home/product_4.png";
import product_5 from "../assets/images/home/product_5.png";
import product_6 from "../assets/images/home/product_6.png";
import product_7 from "../assets/images/home/product_7.png";
import product_8 from "../assets/images/home/product_8.png";

import fashion_1 from "../assets/images/home/fashion_1.png";
import fashion_2 from "../assets/images/home/fashion_2.png";
import fashion_3 from "../assets/images/home/fashion_3.png";

const items = [
  {
    src: homeImage,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: homeImage,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: homeImage,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  componentDidMount(){
    this.props.getHome();
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.key}>
         <div className="row" style={{backgroundColor:"#f6f6f5",zIndex:4}}>
            <div className="col-md-8">
                 <img className="d-block w-100" height={null} width={"100%"} src={item.src} alt={item.altText} />
            </div>
            <div className="col-md-4">
                <span style={{position:"absolute", left : -150, top:100,marginRight:200, fontSize:45,fontWeight:"lighter"}}>Tüm Ürünlerde<br /><b style={{fontWeight:"bold"}}>%40</b><br/>İndirim<br/>
                <Button style={{backgroundColor:"#3f693c",borderColor :"transparent",outline:"none",cursor:"pointer",width:125}}>
                          <label style={{color:"#ffffff",fontSize:20,cursor:"pointer"}}>Keşfet</label>
                </Button>
                </span>
            </div>          
         </div>
        </CarouselItem>
      );
    });
      return (
      <div className="defolum-container">
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
           <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
           <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
         </Carousel>
         <div className="exp-bar">
             <div className="exp-title">
                <FaRecycle className="icon-cycle" /><label>defolum kimdir?</label>
             </div>
             <div className="exp-body">
               <label>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is
                      pain, but be causeoccasionally circumstances occur in which toil and pain can procure him some great pleasure. 
                      To take a trivial example, which of us ever undertakes laborious physical 
                      exercise, except to obtain some advantage from it!</label>
             </div>
         </div>
         <div className="product-container-text">
                <label>İndirimdeki Ürünler</label>     
                <div className="underline-hover"></div>         
        </div>  
         <div className="center-wrapper">
            <div className="product-container" >                                
                <div className="product-card">
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_5}/>
                   </div>
                   <div className="product-card-footer">
                         <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
                <div className="product-card">
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_6}/>
                   </div>
                   <div className="product-card-footer">
                         <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
                <div className="product-card">
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_7}/>
                   </div>
                   <div className="product-card-footer">
                         <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
                <div className="product-card">
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_8}/>
                   </div>
                   <div className="product-card-footer">
                         <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
                <div className="product-card">
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_1}/>
                   </div>
                   <div className="product-card-footer">
                         <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
                <div className="product-card">
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_2}/>
                   </div>
                   <div className="product-card-footer">
                         <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
                <div className="product-card">
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_3}/>
                   </div>
                   <div className="product-card-footer">
                         <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
                <div className="product-card">
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_4}/>
                   </div>
                   <div className="product-card-footer">
                        <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
                <div className="product-container-see-all">
                   <a href="/">Tümünü Gör</a>   
                </div>   
            </div>
        </div>

        <div style={{marginBottom:50,position:"relative",justifyContent:"center",alignItems:"center",display:"flex",textAlign:"center"}}>
          <img width={"100%"} height={null} alt="" src={banner} />
          <div className="centered">
              <label style={{fontWeight:"lighter"}}>Lorem Ipsum</label>
              <label style={{fontWeight:"bold",fontSize:25}}>Tüm Ürünlerde %25 İndirim</label>
              <label style={{fontWeight:"lighter",fontSize:"larger"}}>100 TL üzeri alışverişlerde</label>
              <label style={{fontWeight:"bold",fontSize:25,color:"#3f693c"}}>ÜCRETSİZ KARGO</label>
            
          </div>
          <button className="center-banner-button">BAŞLA</button>
        </div>

        <div className="product-container-text">
                <label>Yeni Gelenler</label>     
                <div className="underline-hover"></div>         
        </div>  
        <div className="sub-text">See how passion can make the web a better place for you.</div>
        <div className="center-wrapper">
            <div className="product-container" >                                
                <div className="product-card">
                   <div className="category">
                     <span>Kategori 1</span>
                   </div>
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_5}/>
                   </div>
                   <div className="product-card-footer">
                        <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
                <div className="product-card">
                   <div className="category">
                     <span>Kategori 2</span>
                   </div>
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_6}/>
                   </div>
                   <div className="product-card-footer">
                         <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
                <div className="product-card">
                   <div className="category">
                     <span>Kategori 3</span>
                   </div>
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_7}/>
                   </div>
                   <div className="product-card-footer">
                        <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
                <div className="product-card">
                    <div className="category">
                     <span>Kategori 4</span>
                   </div>
                   <div className="product-card-image">
                      <img height={300} width={null}  alt=""  src={product_8}/>
                   </div>
                   <div className="product-card-footer">
                        <a href="/product" className="product-name">Lorem Ipsum</a>
                        <label className="price">39.90 TL</label>
                   </div>
                </div>
               
                <div className="product-container-see-all">
                   <a href="/">Tümünü Gör</a>   
                </div>   
            </div>
        </div>
        <div className="product-container-text">
                <label>Moda Rehberi</label>     
                <div className="underline-hover"></div>         
        </div>  
        <div className="sub-text">See how passion can make the web a better place for you.</div>
        <br/>


        <div className="center-wrapper">
            <div className="fashion-container" >                                
                <div className="fashion-card">                  
                   <div className="fashion-card-image">
                      <img height={400} width={null}  alt=""  src={fashion_1}/>
                   </div>
                   <div className="fashion-card-footer">
                        <a className="fashion-header" href="/">Fashion Inspired by Nature & come new ideas</a>
                        <a className="fashion-text" href="/">The wise man therefore always holds in these matters to this principle of selection:rejects…</a>
                        <a className="read-all" href="/">Devamını Oku...</a> 
                   </div>
                </div>
                <div className="fashion-card">                  
                   <div className="fashion-card-image">
                      <img height={400} width={null}  alt=""  src={fashion_2}/>
                   </div>
                   <div className="fashion-card-footer">
                        <a className="fashion-header" href="/">Fashion Inspired by Nature & come new ideas</a>
                        <a className="fashion-text" href="/">The wise man therefore always holds in these matters to this principle of selection:rejects…</a>
                        <a className="read-all" href="/">Devamını Oku...</a> 
                   </div>
                </div>
                <div className="fashion-card">                  
                   <div className="fashion-card-image">
                      <img height={400} width={null}  alt=""  src={fashion_3}/>
                   </div>
                   <div className="fashion-card-footer">
                        <a className="fashion-header" href="/">Fashion Inspired by Nature & come new ideas</a>
                        <a className="fashion-text" href="/">The wise man therefore always holds in these matters to this principle of selection:rejects…</a>
                        <a className="read-all" href="/">Devamını Oku...</a> 
                   </div>
                </div>
             
                <div className="product-container-see-all">
                   <a href="/">Tümünü Gör</a>   
                </div>   
            </div>
        </div>
     
         <div className="center-wrapper">
           <div style={{minHeight:150,display:"flex",flexDirection:"row",width:"80%"}}>
            <div style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
              <FaShippingFast className="footer-icon-normal" />
              <label className="footer-icon-text">Hızlı Kargo</label>
            </div>
            <div style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
              <MdAvTimer className="footer-icon-larger" />
              <label className="footer-icon-text">İade İmkanı</label>
            </div>
            <div style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
              <MdLockOutline className="footer-icon-normal" />
              <label className="footer-icon-text" >Güvenli Alışveriş</label>
            </div>
        </div>

        </div>
      </div>
    
     );

  }
}

const mapStateToProps = function(store) {
  return {
    home: store.home,
  }
}

export default withRouter(connect(mapStateToProps,{getHome})(Home))     
