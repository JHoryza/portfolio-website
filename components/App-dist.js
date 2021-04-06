import Contact from './Contact-dist.js';
import Footer from './Footer-dist.js';

class App extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Contact, null),
            React.createElement(Footer, null)
        );
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
