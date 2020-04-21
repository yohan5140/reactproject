import React, { Component } from 'react';

class MapTest extends Component {
  state = {
    no: ["1"],
    name: ["QHM000040720"],
    title: ["아서왕 : 아서"],
  }
  render() {
    const { no } = this.state;
    const { name } = this.state;
    const { title } = this.state;
    return (
      <div>
        <tr>
           <td>{no}</td>
           <td>{name}</td>
           <td>{title}</td>
        </tr>
      </div>
    );
  }
}

export default MapTest;