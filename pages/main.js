import React from 'react';
import { useLaxElement } from 'use-lax';
import Mailto from 'react-protected-mailto';

function Main() {
    const ref = useLaxElement();

    return (
        <div id="main" ref={ref}>
            <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Caveat+Brush" rel="stylesheet" />
            <link href="/static/style.css" rel="stylesheet" />
            <link href="/static/skeleton.css" rel="stylesheet" />
            <link href="/static/normalize.css" rel="stylesheet" />
            <div>
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <div id="vision">
                                <div className="lax" data-lax-preset="fadeIn">
                                    <h4>Hey!</h4>
                                    <p>I'm Meor Danish Farhan, a 16 years old student from Malaysia.
                                        <br/> Currently taking Computer Science course at my local school.
                                        <br/> I'm passionate about learning new technologies while working
                                        <br/> constantly to improve my existing skillset. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="cosm-nopadbottom" >
                <div className="container" style={{height: "100vh"}}>
                    <div className="row">
                        <div className="seven columns">
                            <h3 data-lax-preset="leftToRight-0.8 speedy crazy zoomInOut" data-lax-optimize="true" className="lax chunkyText crazyText" style={{color: "green", position: "absolute", marginTop: "0pt", marginLeft: "-100pt", fontSize: "500px", fontFamily: "Caveat Brush"}}>X</h3>

                            <p style={{fontSize: "15vw", lineHeight: "0.9"}}>It's EMPTY.</p>

                            <p style={{fontSize: "50px", fontWeight: "400", marginLeft: "20px", marginTop: "-45px"}}><u>For Now</u></p>

                            <p style={{fontSize: "30px", marginLeft: "20px", paddingTop: "60pt"}}>One day, It's going to be full with achievements and projects.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div id="cosm" style={{backgroundColor: "#333333"}}>
                <div style={{alignContent: "center"}}>
                    <div className="container">
                        <div className="six columns">
                            <h3 className="app-title" style={{color: "white"}}><b><u>Social</u></b></h3>

                            <div className="link">
                                <img src="/static/email.svg" alt="Email" />
                                <Mailto
                                    email='dxnxsh@protonmail.com'
                                    headers={
                                        {subject:'Hi'}
                                    }/>
                            </div>


                            <div className="link">
                                <img src="/static/github.svg"
                                     alt="Github"/>
                                <a  href="https://github.com/dxnxsh" id="gitHubLink"
                                   target="_blank" rel="noopener noreferrer">github.com/dxnxsh</a>
                            </div>

                            <div className="link">
                                <img src="/static/twitter.svg"
                                     alt="Twitter"/>
                                <a href="https://twitter.com/dxnxshf" id="twitterLink"
                                   target="_blank" rel="noopener noreferrer">twitter.com/dxnxshf</a>
                            </div>

                            <div className="link">
                                <img src="/static/instagram.svg"
                                     alt="Instagram"/>
                                <a href="https://instagram.com/dxnxsh.x" id="instagramLink"
                                   target="_blank" rel="noopener noreferrer">instagram.com/dxnxsh.x</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div id="container">
                    <h3 style={{color: "white", fontWeight: "500"}}><u><strong>
                        Dxnxsh.
                    </strong></u></h3>
                </div>
            </div>
        </div>


    );
}

export default Main;