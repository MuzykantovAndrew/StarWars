import React from 'react';
import Joke from './Joke'
import Footer from './Footer';
import Header from './Header'



function App() {
    return (
        <div>
            <Header />
            <div className="card">
                <Joke question=""
                    punchLine="A man enters a pun contest in his local newspaper. He sends in ten puns, hoping at least one of them would win, but unfortunately, no pun in ten did." />
                <Joke question="Why did the chicken go to prison?"
                    punchLine="Crimes." />
                <Joke question="What’s green and has wheels?"
                    punchLine="Grass! I lied about the wheels." />
                <Joke question="What’s the dumbest animal in the jungle?"
                    punchLine="A polar bear." />
                <Joke question="Why do scuba divers jump backwards out of the boat?"
                    punchLine="Because if they jumped forward, they’d still be in the boat." />
            </div>
            <Footer />
        </div>

    )
}

export default App;

