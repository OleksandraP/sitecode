import React, {Component} from 'react';
import Nav from './Nav.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <h1>Hello React :)</h1>
                <div id="page1">
                    <a id="about" className="smooth"></a>
                    About page content goes here.
                </div>

                <div id="page2">
                    <a id="portfolio" className="smooth"></a>
                    Portfolio page content goes here.
                </div>

                <div id="page3">
                    <a id="contact" className="smooth"></a>
                    Contact page content goes here.
                </div>
            </div>
        );
    }
}

export default App;


