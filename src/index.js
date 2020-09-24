import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import OurWork from './work.js';
import Footer from './footer.js';
import MotivationPhoto from './img/download.jpg'


class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="header">
            <Header />
          </div>
          <div className="motivationBlock">
            some motivation text
          </div>
          <section>
            <div></div>
            <div></div>
            <div></div>
          </section>
          <section>

          <OurWork />
          <Footer />
        </section>
        </div>
        
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  