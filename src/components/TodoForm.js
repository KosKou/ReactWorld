import React, {Component} from 'react';

class TodoForm extends Component{
    constructor () {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        //Enlazamos los metodos con el state para que no se pierda el SCOPE, saber a donde actualizar
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();             //Evita refrescar la pagina
        this.props.onAddTodo(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        });
    }

    handleInputChange(e) {
        //Value es el valor de lo que escribe en el input
        //Name es el nombre del input que esta escribiendo
        const {value, name} = e.target;     //Captado por e.target
        console.log(value, name);
        this.setState({
            //Actualiza el campo del state captado del nombre del input
            //Reemplaza su valor por el value, captado del input
            [name]: value
        });
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.handleInputChange}
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"
                            value={this.state.priority}
                            onChange={this.handleInputChange}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }

}

export default TodoForm;