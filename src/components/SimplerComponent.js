// Code SimplerComponent Here
import React from 'react'
extract default const SimplerComponent extends Component {


handleClick = () => {
  // Probably do some work to update the state
  this.setState(prevState,{
    mode:prevState==='happy'?'Sad':'happy'
  })
}
    return(
      <div>
        {this.state.mode}
      </div>
    )

}
