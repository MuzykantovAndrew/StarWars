import React from 'react'
import Loading from './Loading';

class Characters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: [],
            isLoading: false
        }
    }

    async componentDidMount() {
        var url = "https://swapi.dev/api/people/";
        this.setState({
            isLoading: true
        })

        var response = await fetch(url);
        var data = await response.json();

        console.log(data)
        this.setState({
            characters: [...this.state.characters, ...data.results],
            isLoading: false
        })
    }

    render() {
        return (
            <ul style={{ padding: 0 }}>
                {
                    this.state.isLoading ? <Loading /> : this.state.characters.map(character => <li className='list' >{character.name}</li>)
                }
            </ul>
        )
    }
}

export default Characters;