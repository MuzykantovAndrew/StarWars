import React from 'react'
import "./css/authorization.css"

class Authorization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: ""
        };
        this.changeUserStatus = this.changeUserStatus.bind(this);
    }

    componentDidMount() {
        this.setState({
            isLoggedIn: false
        })
    }

    changeUserStatus() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        return (
            <div id="authorization">
                <h1 className='textLog'
                    style={{ color: this.state.isLoggedIn ? 'blue' : 'red' }}>
                    {this.state.isLoggedIn ? "Logged in" : "Logged out"}
                </h1>

                <button className='btnLog'
                    style={{ color: this.state.isLoggedIn ? 'red' : 'blue' }}
                    onClick={this.changeUserStatus}
                >
                    {this.state.isLoggedIn ? "LOG OUT" : "LOG IN"}
                </button>
            </div>
        )
    }

}

export default Authorization;