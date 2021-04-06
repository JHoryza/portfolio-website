import Contact from './Contact-dist.js';
import Footer from './Footer-dist.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Contact />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
