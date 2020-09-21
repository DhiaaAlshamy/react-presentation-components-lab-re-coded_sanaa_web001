import React from 'react'
class SimpleComponent extends Component {

this.state={
  mood:'happy'
}
handleClick = () => {
  // Probably do some work to update the state
}


  render() {
    return(
      <div>
        {this.state.mode}
      </div>
    )
  }
}
