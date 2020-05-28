import React, {Component} from 'react';
import './CirclesList.css';
import Circle from './Circle'

class CirclesList extends Component {
  id = 0;

  state = {
    circles: [],
  }

  randomColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random()*255) + ')';
  }

  randomNumber() {
    return Math.floor(Math.random() * 100);
  }

  addCircle = () => {
    this.setState( prevState => {
      return {circles: [...prevState.circles, {number: this.randomNumber(), backgroundColor: this.randomColor(), id: this.id++}]}
    });
  }

  removeCircle = (circle) => {
    this.setState(prevState => ({
      circles: prevState.circles.filter(circleEle => circle !== circleEle)
    }));
  }

  render = () => {
    return (
      <>
        <button onClick={this.addCircle}>Click Me!</button>
        {
          this.state.circles.map(circleElement => (      
            <Circle removeCircle={this.removeCircle} key={circleElement.id} circleObj={circleElement} />
          ))
        }
      </>
    )
  }
}

export default CirclesList;
