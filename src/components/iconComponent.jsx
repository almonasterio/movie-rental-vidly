import React, { Component } from 'react'

export default class iconComponent extends Component {
  state={
    heartFilled: "-o"
  }
//   let iconFlag="-o"

// favBtn=()=>{
// if (iconFlag=="-o"){
// iconFlag=""
// console.log(iconFlag);
// return
// } 
// iconFlag="-o"
// console.log(iconFlag);
// }
  render() {
    return (
      <div>
        <i  className={`fa fa-heart"${this.state.heartFilled}`} aria-hidden="true"></i>
      </div>
    )
  }
}
