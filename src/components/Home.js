import React from 'react';

import store from '../services/store';

class Home extends React.Component{
    constructor(props){
        super(props);
        //attributs
        this.state = {
            bigimgurl:"",
            showbigimage:0
        };
    }

    openBigImage = (event)=>{
        let url = event.target.src;
        this.setState({
            bigimgurl:url,
            showbigimage:1
        });
    }
    closeBigImage = ()=>{
        this.setState({
            bigimgurl:"",
            showbigimage:0
        });
    }

    render(){
        let bigimage;
        if(this.state.showbigimage){
            bigimage = <div id="bigimage"><img src={this.state.bigimgurl} alt="" onClick={this.closeBigImage} /></div>;
        }else{
            bigimage = <div></div>;
        }
        return (
            <div id="home">
                {bigimage}
                <div className="container">
                {
                    store.photos.map((value, key)=>{
                        return (
                            <div key={key} className="onephoto">
                                <img src={value} alt="" onClick={this.openBigImage} />
                            </div>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}
export default Home;