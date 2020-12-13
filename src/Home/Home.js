import React from 'react'
import { Row, Container, Col } from 'reactstrap'
import Header from '../Header/Header'
import support from '../logo/support.png'
import './Home.css'
import first from '../logo/first.png'
import second from '../logo/second.png'
import third from '../logo/third.png'
import fourth from '../logo/fourth.png'
import fifth from '../logo/fifth.png'
import six from '../logo/six.png'
import { arrowRight } from 'react-icons-kit/fa/';
import Footer from '../Footer/Footer'
import Icon from 'react-icons-kit';


class Home extends React.Component {
    
    render() {
        return (
            
            <Container fluid style={{padding:"0px"}} >
                
                <Header/>
                {/* -------------------------------------------------body-------------------------------------------------------- */}
                {/* --------------------------------------------1 row------------------------------------------------------------ */}
                
                
                <Row style={{padding:"10px"}} >
                    <Col md="1"></Col>

                    <Col md="6" style={{padding:"20px",lineHeight:"2.1em",textAlign:"left",margin:"50px 0px 0px 0px"}}>
                        <Row><span style={{fontFamily:"adobe-caslon-w01-smbd,serif",fontSize:"35px"}}>World we define together</span></Row>
                        
                        
                        <Row style={{fontFamily:"verdana,geneva,sans-serif",fontSize:"37px",marginTop:"40px",color:"#0B3D91",borderBottom:"3px solid red",width:"560px",padding:"0px 0px 15px 0px "}}>
                            <span>Experience the</span><br/>
                            <span>Future of Financial Innovation</span>
                        </Row>

                        <Row style={{marginTop:"40px"}}>
                            <span style={{fontFamily:"open sans,sans-serif",letterSpacing:"1px",textTransform:"uppercase"}}>We evolved to <span style={{color:"blue"}}>transform the way</span> your money works for you, into a great experience. Whatever you have aspired; Serving you the <span style={{color:"blue"}}>desired value</span> and actual profit with <span style={{color:"blue"}}>easiest and smarter Personal savings</span >, Investment, Consultancy, Funding & Venture.</span>
                        </Row>

                        <Row style={{marginTop:"50px"}}>
                            <div >
                                <input required placeholder="Enter your Email address" className="emailinp"/>
                            </div>
                            <div ><button className="signbtn">Sign Up</button></div>
                            
                        </Row>
                        
                    </Col>

                    <Col md="4">
                        <img style={{width:"100%"}} src={support} alt=""/>
                    </Col>

                    <Col md="1" style={{padding:"0px"}}></Col>
                </Row>

                
                {/* -----------------------------------------------------------2 row----------------------------------------------------- */}
                <Row style={{padding:"0px"}}>
                    
                        <Col md="3" className="greyxl" >
                            
                            <img style={{width:"300px"}} src={first} alt=""/>
                            
                        </Col>
                        <Col md="3" className="greyxl">
                            <Row>
                                <h3 style={{textAlign:"left",color:"blue",marginTop:"20%"}}>8-89*% on Savings</h3>
                            </Row>

                            <Row style={{fontSize:"18px"}}>
                                <span >Securing your guaranteed return combined with your expectations on personal savings to accomplish higher goals.
                                </span><br/>
                                <span>Don't compromise with less!</span>
                            </Row>
                            <Row style={{paddingBottom:"20px"}}>
                                <button  className="btn2 blu">Open Savings Account</button>
                            </Row>
                        </Col>
                    
                    
                        <Col md="3">
                            <img src={second} style={{width:"300px"}} alt="" />
                        </Col>
                        <Col md="3">
                        <Row>
                            <h3 style={{textAlign:"left",color:"green",marginTop:"20%"}}>Savings to Fortune</h3>
                            </Row>

                            <Row style={{fontSize:"18px"}}>
                                <span >From your savings to prosperous life. A step forward to wealth making and happiness.


                                </span><br/>
                                <span>The secret of fortune</span>
                            </Row>
                            <Row>
                                <button className="btn2 green">Create your Wealth</button>
                            </Row>
                        </Col>
                    
                </Row>
                {/* --------------------------------------------------------3 row---------------------------------------------------- */}
                <Row >
                    
                        <Col md="3"  >
                            
                            <img style={{width:"300px"}} src={third} alt=""/>
                            
                        </Col>

                        <Col md="3" >
                            <Row>
                                <h3 style={{textAlign:"left",color:"purple",marginTop:"20%"}}>
                                    Sustainable Innovation
                                </h3>
                            </Row>

                            <Row >
                                <span >
                                    Empowering conscious education. Smarter approach to energy research, glocal development and technological innovation.
                                </span>
                            </Row>
                            <Row>
                                <button className="btn2 purple" >
                                    Explore
                                </button>
                            </Row>
                        </Col>
                    
                    
                        <Col md="3" className="greyxl" style={{paddingLeft:"40px"}}>
                            <Row>
                                <h3 style={{textAlign:"left",color:"red",marginTop:"20%"}}>
                                    Ideas to Problem Solver
                                </h3>
                            </Row>

                            <Row >
                                <span >
                                    From your savings to prosperous life. A step forward to wealth making and happiness.
                                </span><br/>
                                <span>The secret of fortune</span>
                            </Row>
                            <Row>
                                <button className="btn2 red">
                                    Fund Your Ideas
                                </button>
                            </Row>
                        </Col>

                        <Col md="3" className="greyxl">
                            <img src={fourth} style={{width:"300px"}} alt=""/>   
                        </Col>
                    
                </Row>
                {/* ----------------------------------------------4 row-------------------------------------------- */}
                <div style={{padding:"10px 0px 0px 0px"}} className="box">
                    <Row>
                        <Col style={{textAlign:"center"}}>
                            <h2 style={{margin:"0px"}}>
                                Become an ambassador
                            </h2>
                        </Col>
                    </Row>

                    <Row >
                        <Col md="2"></Col>
                        <Col md="8" className="animcol" >
                            <div style={{display:"inline-block"}}>
                                <img style={{width:"130px"}} src={fifth} alt=""/>
                            </div>
                            <div style={{display:"inline-block",padding:"25px 50px 30px 40px",verticalAlign:"middle"}}>
                                <div>
                                    <span style={{color:"green",fontSize:"14px",letterSpacing:"0px"}} className="fontxl">Together we can make a better & smarter world</span>
                                </div>

                                <div style={{marginTop:"10px"}}>
                                    <div>
                                        <div style={{display:"inline-block"}}>
                                            <span  className="fontxl1">
                                                Inspire
                                            </span>
                                            <span className="fontxl2">
                                                Think Value
                                            </span>
                                        </div>
                                        <div style={{display:"inline-block",marginLeft:"30px"}}>
                                            <span className="fontxl1">
                                                Drive
                                            </span>
                                            <span className="fontxl2">
                                                Create
                                            </span>
                                        </div>
                                        <div style={{display:"inline-block",marginLeft:"30px"}}>
                                            <span className="fontxl1">
                                                Engage
                                            </span>
                                            <span className="fontxl2">
                                                Imagination
                                            </span>
                                        </div>
                                        <div style={{display:"inline-block" ,marginLeft:"30px"}}>
                                            <span className="fontxl1">
                                                Honesty
                                            </span>
                                            <span className="fontxl2">
                                                Excellence
                                            </span>
                                        </div>
                                        <div style={{display:"inline-block" ,marginLeft:"30px"}}>
                                            <span className="fontxl1">
                                                Passion
                                            </span>
                                            <span className="fontxl2">
                                                Accomplish
                                            </span>
                                        </div>
                                       
                                    </div>

                                </div>
                            
                            </div>
                            <div style={{display:"inline-block",verticalAlign:"middle",letterSpacing:"none"}} >
                                <button className="savingbtn green fontxl">Apply Now</button>   
                            </div>
                            
                        </Col>
                        <Col md="2"></Col>
                    </Row>

                </div>

                {/* ----------------------------------------5 row------------------------------------------------------------ */}
                <Row>
                    <Col md="2"></Col>
                    <Col>
                        <Row>
                            <Col md="12">
                                <img src={six} style={{width:"900px"}} alt=""/> 
                            </Col>
                            
                        </Row>
                        <Row>

                            <Col md="4">
                                
                                <Row style={{verticalAlign:"inherit"}}>
                                    
                                    <button className="btn2 blu">Finance</button>
                                </Row>
                                <Row>
                                    <h3 style={{color:"blue",marginTop:"20px"}}>
                                        Understanding Financial Freedom
                                    </h3>
                                </Row>
                                <Row>
                                    <Col md="10" style={{padding:"0px"}}>
                                        <span>
                                        The Question is, whether you want to spend rest of your life in misery or spend few years on deleting out misery.
                                        </span>
                                    </Col>  
                                </Row>
                                <Row style={{textAlign:"center",padding:"20px"}}>
                                    <button  style={{color:"red",background:"transparent",border:"none"}}>Read More</button>
                                    <Icon style={{ marginLeft: "5px" }} icon={arrowRight} size={15} />
                                </Row>
                            </Col>
                            <Col md="4">
                                
                                <Row style={{verticalAlign:"center"}}>
                                    <button className="btn2 green">Climate</button>
                                </Row>
                                <Row>
                                <h3 style={{color:"green",marginTop:"20px"}}>
                                        Conscious development
                                    </h3>
                                </Row>
                                <Row>
                                    <Col md="10" style={{padding:"0px"}}>
                                        <span>
                                        Education, Energy and Opportunity must be accessible, available and affordable to everyone. 
                                        </span>
                                    </Col>  
                                </Row>
                                <Row style={{textAlign:"center",padding:"20px"}}>
                                    <button  style={{color:"red",background:"transparent",border:"none"}}>Read More</button>
                                    <Icon style={{ marginLeft: "5px" }} icon={arrowRight} size={15} />
                                </Row>
                                    
                            </Col>
                            <Col md="4">
                                
                                <Row style={{verticalAlign:"inherit"}}>
                                    <button className="btn2 purple">Agriculture</button>
                                </Row>
                                <Row>
                                <h3 style={{color:"purple",marginTop:"20px"}}>
                                    Happy Farmers, Healthy Food
                                    </h3>
                                </Row>
                                <Row>
                                    <Col md="10" style={{padding:"0px"}}>
                                        <span>
                                        Research and supply chain management, for quality production to actual crop valuation.
                                        </span>
                                    </Col>  
                                </Row>
                                <Row style={{textAlign:"center",padding:"20px"}}>
                                    <button  style={{color:"red",background:"transparent",border:"none"}}>Read More</button>
                                    <Icon style={{ marginLeft: "5px" }} icon={arrowRight} size={15} />
                                </Row>
                                    
                            </Col>
                        </Row>
                    </Col>
                    <Col md="2"></Col>
                </Row>
                <Row>
                    <Col md="12" style={{backgroundColor:"red",textAlign:"center",padding:"20px 100px 20px 100px",fontSize:"16px"}}>
                        <span className="fontxl" style={{color:"white"}}>The need for financial education and financial inclusion is <span style={{color:"green"}}>global & genuine</span>, that's why Samrat Investments’ analysts, researchers and volunteers are motivated to bring <span style={{color:"green"}}>financial benefits</span> to everyone to <span style={{color:"green"}}>evolve the life</span>.</span>
                    </Col>
                </Row>
                {/* ----------------------------------Footer------------------------------------------------- */}

                <Footer/>
            </Container>
        );
    }
}

export default Home;