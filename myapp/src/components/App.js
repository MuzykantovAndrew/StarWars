import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            age: 0,
            gender: '',
            hometown: 'Kyiv',
            games: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        const { name, value, type, checked } = event.target;
        if (type === 'checkbox' && checked) {
            this.setState(prevState => ({
                games: [...prevState.games, value, ". "]
            }))
        } else if (type === 'checkbox' && !checked) {
            const newDied = [...this.state.games];
            const index = newDied.indexOf(value)
            newDied.splice(index, 2);
            this.setState({
                games: newDied
            });
        }
        else {
            this.setState({
                [name]: value
            })
        }
    }

    render() {
        return (
            <main>
                <form>
                    <input type='text'
                        placeholder="First Name"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                        name='firstname'
                    /><br />

                    <input type='text'
                        placeholder="Last Name"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        name='lastname'
                    /><br />

                    <input type='text'
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        name='age'
                    /><br />

                 
                    <ul style={{ display: 'initial' }}>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value='Female'
                                    onChange={this.handleChange}
                                    name='gender'
                                />Female
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value='Male'
                                    onChange={this.handleChange}
                                    name='gender'
                                />Male
                            </label>
                        </li>

                        <li>
                            <label>
                                <input
                                    type="radio"
                                    value='Other'
                                    onChange={this.handleChange}
                                    name='gender'
                                />Other</label>
                        </li>
                    </ul>
                    <br />
                  
                    <select onChange={this.handleChange}
                        name='hometown'>
                        <option selected>Donetsk</option>
                        <option >Kyiv</option>
                        <option >Kharkiv</option>
                        <option >Odessa</option>
                        <option >Lviv</option>
                        <option >Dnipro</option>
                    </select>
                    <br />
             
                    <ul style={{ display: 'initial' }}>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    value='Fornite'
                                    onChange={this.handleChange}
                                    name='games'
                                />Fornite
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    value='Valorant'
                                    onChange={this.handleChange}
                                    name='games'
                                />Valorant
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    value='LeagueOfLegends'
                                    onChange={this.handleChange}
                                    name='games'
                                />LeagueOfLegends
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    value='LegendsOfRuntera'
                                    onChange={this.handleChange}
                                    name='games'
                                />LegendsOfRuntera
                            </label>
                        </li>
                    </ul>

                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2><font color="#3AC1EF">Entered information:</font></h2>
                <p>Your name: {this.state.firstname} {this.state.lastname} </p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your hometowntown: {this.state.hometown}</p>
                <p>Your your favourite games: {this.state.games}</p>
            </main>
        )
    }
}

export default App
