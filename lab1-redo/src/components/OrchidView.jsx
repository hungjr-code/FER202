import React, { Component } from 'react'
import orchid from '../ListOfOrchids';
import OrchidPresentation from './OrchidContainer';
export class OrchidView extends Component {
    constructor() {
        super();
        this.state = {
           orchids: orchid
        };
     }
  render() {
    return <OrchidPresentation orchids={this.state.orchids}/>
  }
}
export default OrchidView;
