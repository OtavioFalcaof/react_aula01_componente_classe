import React, { Component } from "react";

export default class ClassComponent extends Component {

    state = {
        Linguagem : "React"
    }

    render() {
        return (
            <div>

                <h1>Olá mundo {this.state.Linguagem}</h1>
                <h2>Esse é o meu componente de classe :]</h2>
                
            </div>
        )
    }
}