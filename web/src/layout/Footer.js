import React, { Component } from 'react';
import {FaInstagram,FaTwitter,FaFacebook,FaYoutube,FaRegEnvelopeOpen } from 'react-icons/fa';
import {Input,InputGroup,InputGroupAddon} from "reactstrap";

class Footer extends Component {

    render(){
        return(
            <div className="footer">
                <div className="center-wrapper-footer">
                  <div className="footer-email">
                   <div className="email-text">
                       <div className="email-text-icon">
                          <FaRegEnvelopeOpen size={60} />
                       </div>
                       <div className="email-text-right">
                           <label className="email-text-title">Get Our Latest Update In Your Email</label>
                           <label className="email-text-exp">Subscribe now to get 15% off on any product</label>
                       </div>
                   </div>
                   <div className="send-email">
                        <InputGroup>
                            <Input placeholder="E-posta adresinizi yazınız." />
                                <InputGroupAddon addonType="prepend">
                                    <button className="defolum-button">Gönder</button>
                                </InputGroupAddon>                      
                        </InputGroup>
                    </div>
                 </div>
                </div>          
                <div className="footer-services">
                   <div className="adress-bar">
                      <div className="brand">defolum</div>
                      <div className="contact">
                          <div className="contact-adress">
                             <label className="make-bolder">Sorularınız için bize 7/24 ulaşın!</label>
                             <label className="make-bolder">0900 328 98 76</label>
                             <label className="adress">450 CD, Country Latin literature, Popular Belief Lorem Ipsum</label>
                          </div>
                          <div className="view-map">
                            <button className="defolum-button" >
                                        Haritada Gör
                            </button>
                          </div>
                      </div>
                   </div>
                   <div className="services-bar">
                       <div className="service">
                           <div className="service-header">Servislerimiz</div>
                           <div className="service-items">
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                           </div>
                       </div>
                       <div className="service">
                           <div className="service-header">Servislerimiz</div>
                           <div className="service-items">
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                           </div>
                       </div>
                       <div className="service">
                           <div className="service-header">Servislerimiz</div>
                           <div className="service-items">
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                           </div>
                       </div>
                       <div className="service">
                           <div className="service-header">Servislerimiz</div>
                           <div className="service-items">
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                           </div>
                       </div>
                       <div className="service">
                           <div className="service-header">Servislerimiz</div>
                           <div className="service-items">
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                               <label>Lorem Ipsum</label>
                           </div>
                       </div>
                       
                   </div>
                </div>
                <div className="footer-social">
                     <div className="footer-rights">
                        <label>Copyright © 2019 Coder Bitches. All rights reserved.</label>
                     </div>
                     <div className="footer-social-buttons">
                         <FaFacebook  size={25} style={{marginRight:10,cursor:"pointer"}} />
                         <FaTwitter   size={25} style={{marginRight:10,cursor:"pointer"}} />
                         <FaInstagram size={25} style={{marginRight:10,cursor:"pointer"}} />
                         <FaYoutube size={30} style={{marginRight:10,cursor:"pointer"}} />
                     </div>
                </div>
            </div>
        )
    }
}


export default Footer;