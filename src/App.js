import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import './index.css'

class App extends Component {
    state = { displayBio: false };
    
    // Longer Version of creator the constructor
    // constructor(){
    //      super();
    //      this.state = { displayBio: false };

    //      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render(){
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Oscar Shoudt</p>
                <p>I'm a Full-Stack Developer</p>
                {
                    this.state.displayBio ? (
                        <div>
                            {/* <p>I live in Miami, FL, and code every day.</p>
                            <p>My favorite language is Javascript, and I think React.js is awesome.</p>
                            <p>Besides coding, I also love Beer and Food!</p> */}
                            <p>From my earliest memories of playing video games, the idea of creating games and websites was a fascination that soon after turned into a passion. My first hands-on project at Wyncode which I titled “Guacamole” amazed me and truly taught me the practicality of Javascript, HTML, and CSS. The idea of implementing these strategies to generate well-designed projects and most importantly to create functionality for a responsive result is remarkable to me.</p>
                            <p>This experience inspired me to become a Front-End Developer. I enrolled at Florida International University and pursued a Computer Science degree to learn the foundations of Full-Stack Development. During this time, I attend Flatiron Academy with the intention of advancing my education in Full-Stack Development.</p>
                            <p>Languages: Ruby, Ruby on Rails, Javascript, React, HTML, CSS, SQL</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>More About Me</button>
                            </div>
                        )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

// Share this component in the others code base
export default App;
