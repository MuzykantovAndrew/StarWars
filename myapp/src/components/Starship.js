import React from 'react'
import Loading from './Loading';

class Starship extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starships: [],
            isLoading: false
        }
    }

    async componentDidMount() {
        var url = "https://swapi.dev/api/starships/";
        this.setState({
            isLoading: true
        })

        var response = await fetch(url);
        var data = await response.json();
        this.setState({
            starships: [...this.state.starships, ...data.results],
            isLoading: false
        })
        console.log(data.results)

    }

    render() {
        return (
            <ul style={{ padding: 0 }}>
                {
                    this.state.isLoading ? <Loading /> : this.state.starships.map(starship => <li className='list'>{starship.name}</li>)
                }
            </ul>
        )
    }
}

export default Starship;