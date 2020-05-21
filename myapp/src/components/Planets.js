import React from 'react'
import Loading from './Loading';

class Planets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [],
            isLoading: false
        }
    }

    async componentDidMount() {
        var url = "https://swapi.dev/api/planets/";
        this.setState({
            isLoading: true
        })

        var response = await fetch(url);
        var data = await response.json();
        this.setState({
            planets: [...this.state.planets, ...data.results],
            isLoading: false
        })
        console.log(data.results)

    }

    render() {
        return (
            <ul style={{ padding: 0 }}>
                {
                    this.state.isLoading ? <Loading /> : this.state.planets.map(planet => <li className='list'>{planet.name}</li>)
                }
            </ul>
        )
    }
}

export default Planets;