import React, { Component } from 'react';
import css from './Block.css';
class Block extends Component {

  render() {
    return (
      <div className={css.Block}>
        <h1>200</h1>
        <p className="bt">p200</p>
      </div>
    );
  }

}

export default Block;
