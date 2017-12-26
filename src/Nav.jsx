import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <nav>
              <div id="nav">
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </nav>
        );
    }
}

export default Nav;

