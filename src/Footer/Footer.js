import React from 'react'
import './Footer.css'
import '../Home/Home.css'
import {  copyright, facebook, linkedin, instagram, twitter } from 'react-icons-kit/fa/';
import { Row, Col } from 'reactstrap'
import { Icon } from 'react-icons-kit'
// import face from '../logo/facebook.png'
// import twi from '../logo/twi.png'
// import link from '../logo/link.png'
// import insta from '../logo/insta.png'
import samrat_invest from '../logo/samrat_invest.png'
class Footer extends React.Component {
    render() {
        return (
            <div className="footerRow ">

                <Row style={{ borderBottom: "1px solid gray",paddingBottom:"25px" }}>
                    <Col md="4" >
                        <Row>
                            <Col md style={{textAlign:"center"}}>
                                <img src={samrat_invest} alt=""/>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col md="3"></Col>
                            <Col md="6" style={{textAlign:"center",color:"blue" ,fontFamily:"monospace"}}>
                                <span >Global leading financial investment management company with most diverse financial inclusion.</span>
                            </Col>
                            <Col md="3"></Col>
                            
                        </Row>
                    </Col>
                    <Col md="4">
                        <Row >
                            <h3 style={{fontFamily:"cursive"}}>We are here to help you!</h3>
                        </Row>
                                <Row>
                                    <input placeholder="Name*" className="footerinp"/>
                                </Row>
                                <Row>
                                    <input placeholder="Email*" className="footerinp"/>
                                </Row>
                                <Row>
                                    <input placeholder="Subject" className="footerinp"/>
                                </Row>
                                <Row>
                                    <input placeholder="Message" className="footerinp" style={{height:"160px"}}/>
                                </Row>
                                <Row style={{textAlign:"center"}}>
                                    <button className="footersendbtn" >Send</button>
                                </Row>
                                
                            
                        
                    </Col>

                    <Col md="4">
                        <Row>
                            <Col md="6" >
                                <div >
                                    <button className="footerListButton footerListButtonxl" style={{ fontWeight: "700", fontSize: "20px" }}>About Us</button>
                                </div>
                                <div>
                                    <button className="footerListButton bluexl">Contact us</button>
                                </div>
                                <div>
                                    <button className="footerListButton greenxl">Global Community</button>
                                </div>
                                <div>
                                    <button className="footerListButton purplexl">Long-term saving</button>
                                </div>
                                <div>
                                    <button className="footerListButton redxl">For students </button>
                                </div>
                                <div>
                                    <button className="footerListButton brownxl">Directory</button>
                                </div>
                                <div>
                                    <button className="footerListButton yellowxl">Learning program</button>
                                </div>
                            </Col>


                            <Col md="6" >
                                <div >
                                    <button className="footerListButton footerListButtonxl" style={{ fontWeight: "700", fontSize: "20px" }}>Service</button>
                                </div>
                                <div>
                                    <button className="footerListButton bluexl ">Financial consultancy</button>
                                </div>
                                <div>
                                    <button className="footerListButton greenxl">Funding</button>
                                </div>
                                <div>
                                    <button className="footerListButton purplexl">Investment management</button>
                                </div>
                                <div>
                                    <button className="footerListButton redxl">Career</button>
                                </div>
                                <div>
                                    <button className="footerListButton brownxl">FAQs</button>
                                </div>
                                <div>
                                    <button className="footerListButton yellowxl">Advertise</button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>


                <Row style={{  padding: "15px " }}>
                    <Col md="3">
                        
                        <Icon style={{ marginLeft: "40px" }} icon={facebook} size={22} /> 
                        <Icon style={{ marginLeft: "40px" }} icon={twitter} size={22} />
                        <Icon style={{ marginLeft: "40px" }} icon={instagram} size={22} />
                        <Icon style={{ marginLeft: "40px" }} icon={linkedin} size={22} />
                        {/* <img src={face}/>
                        <img src={twi}/>
                        <img src={insta}/>
                        <img src={link}/> */}
                    </Col>
                    <Col md="6" style={{textAlign:"center"}}>
                        <button className="footerListButton footerListButtonxl" >Employee Policy</button>
                        <button className="footerListButton footerListButtonxl" style={{ marginLeft: "90px" }}>User Policy</button>
                        <button className="footerListButton footerListButtonxl" style={{ marginLeft: "90px" }}>Ethics</button>
                    </Col>
                    <Col md="3">
                        <span style={{ float: "right" }}>SAMRAT INDIA PVT LTD</span>
                        <Icon style={{ float: "right" }} icon={copyright} size={22} />
                        
                    </Col>

                </Row>
            </div>
        );
    }
}
export default Footer;

