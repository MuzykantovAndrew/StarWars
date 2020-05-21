import React from 'react'
import Loading from './Loading';

class Transport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            transports: [],
            isLoading: false
        }
    }

    async componentDidMount() {
        var url = "https://swapi.dev/api/vehicles/";
        this.setState({
            isLoading: true
        })

        var response = await fetch(url);
        var data = await response.json();
        this.setState({
            transports: [...this.state.transports, ...data.results],
            isLoading: false
        })
        console.log(data.results)

    }

    render() {
        return (
            <ul style={{ padding: 0 }}>
                {
                    this.state.isLoading ? <Loading /> : this.state.transports.map(transport => <li className='list'>{transport.name}</li>)
                }
            </ul>
        )
    }
}

export default Transport;