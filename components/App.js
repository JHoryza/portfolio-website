import Projects from './Projects-dist.js';
import Contact from './Contact-dist.js';
import Footer from './Footer-dist.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Projects />
                <Contact />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
