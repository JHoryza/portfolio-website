import About from './About-dist.js';
import CallToAction from './CallToAction-dist.js';
import Projects from './Projects-dist.js';
import Contact from './Contact-dist.js';
import Footer from './Footer-dist.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <About />
                <CallToAction />
                <Projects />
                <Contact />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
