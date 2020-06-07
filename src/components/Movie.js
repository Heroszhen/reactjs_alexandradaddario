import React from 'react';
import store from '../services/store';
import {
    Link
} from "react-router-dom";

class Movie extends React.Component{
    constructor(props){
        super(props);
        //attributs
        this.state = {
        };
    }

    
    render(){
        return (
            <div id="movie" className="pt-2 pb-2">
                <div className="container">
                    <div className="row">
                    {
                        store.films.map((value, key)=>{
                            return (
                                <div key={key} className="col-md-6 col-lg-4 text-center mb-3">
                                    <div className="card" style={{"width": "18rem","margin":"0 auto"}}>
                                        <img src={value.photo} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">
                                                {value.plot.slice(0,30)}....   
                                            </p>
                                            
                                            <Link className="btn btn-primary" to={`/unfilm/${key}`}>Voir les détailles</Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}
export default Movie;