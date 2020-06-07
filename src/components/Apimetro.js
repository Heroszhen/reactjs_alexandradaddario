import React from 'react';
import axios from 'axios';

class Apimetro extends React.Component{
    constructor(props){
        super(props);
        //attributs
        this.state = {
            all:1,
            line:"", 
            infos:null,
        };
        
    }

    componentDidMount(){}

    handleLine = (event)=>{
        let value = event.target.value;
        this.setState({line:value});
        if(value === "")this.setState({all:1});
        else this.setState({all:0});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        let url = "";
        if(this.state.line === "")url = `https://api-ratp.pierre-grimaud.fr/v4/traffic/metros`;
        else url = `https://api-ratp.pierre-grimaud.fr/v4/traffic/metros/`+this.state.line;
        axios.get(url)
        .then(res => {
            this.setState({
                infos:res["data"]["result"]
            });
        })
    }
    
    render(){
        let options = [];
        for (let i = 1; i <= 14; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }

        let infos = null;
        if(this.state.infos !== null){
            if(this.state.infos.metros === undefined){
                infos = <div>
                    <div className="mb-2">
                        <span className="h5">Ligne</span> : {this.state.infos.line}
                    </div>
                    <div className="mb-2">
                        <span className="h5">Traffic</span> : {this.state.infos.title}
                    </div>
                    <div className="mb-2">
                        <span className="h5">Alerte</span> : {this.state.infos.message}
                    </div>
                </div>;
            }else{
                infos = [];
                for (let i = 0; i < this.state.infos.metros.length ; i++) {
                    infos.push(
                        <div className="mb-4" key={i}>
                            <div className="mb-2">
                                <span className="h5">Ligne</span> : {this.state.infos.metros[i].line}
                            </div>
                            <div className="mb-2">
                                <span className="h5">Traffic</span> : {this.state.infos.metros[i].title}
                            </div>
                            <div className="mb-2">
                                <span className="h5">Alerte</span> : {this.state.infos.metros[i].message}
                            </div>
                        </div>
                    );
                }
            }
        }else{
            infos = <div></div>;
        }

        return (
            <div id="meteoapi" className="pb-2">
                <h2 className="text-center mt-4">Les informations sur le Métro de paris</h2>
                <div className="container">
                    <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                        <div className="col-8 col-md-4">
                            <div className="form-group">
                                <select className="form-control" id="type" name="type" onChange={this.handleLine}>
                                    <option value="">Toutes les lignes</option>
                                    {options}
                                </select>
                            </div>    
                        </div>
                        <div className="col-4 col-md-2">
                            <button type="submit" className="btn btn-primary">Envoyer</button>
                        </div>
                    </form>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-8 col-lg-6">
                            {infos}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Apimetro;