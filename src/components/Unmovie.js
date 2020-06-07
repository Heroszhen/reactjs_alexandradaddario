import React from 'react';
import store from '../services/store';

class Unmovie extends React.Component{
    constructor(props){
        super(props);
        //attributs
        this.state = {
            id:-1,
            film:null
        };
        
    }

    componentDidMount(){
        this.setState({id:this.props.match.params.id});
        let film = store.films[this.props.match.params.id];
        this.setState({film:film});
    }
    
    render(){
        let film = this.state.film;
        let part1;
        if(film == null){
            part1 = <div className="loader">
                <img src={require("../assets/photos/loader.gif")} alt="" />
            </div>;
        }else{
            part1 = <div className="part1">
                <div className="container pt-4 pb-4">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <img src={this.state.film.photo} alt="" />
                        </div>
                        <div className="col-md-6 ">
                            <div className="mb-4">
                                <span className="h4">Titre</span> : {this.state.film.title}
                            </div>
                            <div className="mb-4">
                                <span className="h4">Acteurs</span> : {this.state.film.actors}
                            </div>
                            <div className="mb-4">
                                <span className="h4">Durée</span> : {this.state.film.last}
                            </div>
                            <div className="mb-4">
                                <span className="h4">Résumé</span> : {this.state.film.plot}
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
        }
        return (
            <div id="onemovie" className="pb-2">
                {part1}
            </div>
        );
    }
}
export default Unmovie;