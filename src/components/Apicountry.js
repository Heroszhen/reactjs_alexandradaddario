import React from 'react';
import axios from 'axios';

class Apicountry extends React.Component{
    constructor(props){
        super(props);
        //attributs
        this.state = {
            infos:null,
            pays:""
        };
        
    }

    componentDidMount(){}

    handlePays = (event)=>{
        this.setState({pays:event.target.value});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        let url = "";
        if(this.state.pays === "")url = "https://restcountries.eu/rest/v2/all";
        else url = "https://restcountries.eu/rest/v2/name/"+this.state.pays;
        axios.get(url)
        .then(res => {
            this.setState({
                infos:res["data"]
            });
        })
    }
    
    render(){
        let infos = [];
        if(this.state.infos !== null && Array.isArray(this.state.infos)){
            let courant = this.state.infos;
            for (let i = 0; i < courant.length ; i++) {
                infos.push(
                    <div className="row mb-5 onecountry" key={i}>
                        <div className="col-md-7 mb-2">
                            <img  src={courant[i].flag} alt="" />
                        </div>
                        <div className="col-md-5">
                            <div className="mb-2">
                                <span className="h4">Nom</span> : {courant[i].name}
                            </div>
                            <div className="mb-2">
                                <span className="h4">Nom natif</span> : {courant[i].nativeName}
                            </div>
                            <div className="mb-2">
                                <span className="h4">Code pays</span> : {courant[i].alpha3Code}
                            </div>
                            <div className="mb-2">
                                <span className="h4">Capitale</span> : {courant[i].capital}
                            </div>
                            <div className="mb-2">
                                <span className="h4">Langue</span> :  
                                {courant[i]["languages"].map((v,k)=>{
                                    return <div key={k}>{v.nativeName}</div>;
                                })}
                            </div>
                            <div className="mb-2">
                                <span className="h4">Surface</span> : {courant[i].area}
                            </div>
                            <div className="mb-2">
                                <span className="h4">Population</span> : {courant[i].population}
                            </div>
                            <div className="mb-2">
                                <span className="h4">Monnaie(s)</span> :  
                                {courant[i]["currencies"].map((v,k)=>{
                                    return <span key={k}> {v.symbol}</span>;
                                })}
                            </div>
                            <div className="mb-2">
                                <span className="h4">Pays voisins</span> :  
                                {courant[i]["borders"].map((v,k)=>{
                                    return <div key={k}>{v}</div>;
                                })}
                            </div>
                        </div>
                    </div>
                );
            }
        }
        return (
            <div id="meteocountry" className="pb-2">
                <h2 className="text-center mt-4">
                    Cherchez votre pays
                </h2>
                <div className="container">
                    <form className="row justify-content-center" onSubmit={this.handleSubmit}>
                        <div className="col-8 col-md-4">
                            <div className="form-group">
                                <input type="text" className="form-control" id="pays" name="pays" placeholder="votre pays" onKeyUp={this.handlePays}/>
                            </div>    
                        </div>
                        <div className="col-4 col-md-2">
                            <button type="submit" className="btn btn-primary">Envoyer</button>
                        </div>
                    </form>
                    <div className="row justify-content-center mt-3">
                        <div className="col-12">
                            {infos}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Apicountry;