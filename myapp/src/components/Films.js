import React from 'react'
import Loading from './Loading';

class Films extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            isLoading: false
        }
    }

    async componentDidMount() {
        var url = "https://swapi.dev/api/films/";
        this.setState({
            isLoading: true
        })

        var response = await fetch(url);
        var data = await response.json();
        console.log(data)
        this.setState({
            films: [...this.state.films, ...data.results],
            isLoading: false
        })

    }

    render() {
        return (
            <ul style={{ padding: 0 }}>
                {
                    this.state.isLoading ? <Loading /> : this.state.films.map(film => <li className='list' key={film.episode_id}>{film.title}</li>)
                }
            </ul>
        )
    }
}

export default Films;