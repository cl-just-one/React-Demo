import React from 'react'

export default class bodyChild extends React.Component{
  render() {
    return (
      <div>
        <p><input type="text" onChange={this.props.setBodyAgevalue}/></p>
        <p>{this.props.userid} {this.props.id}</p>
      </div>
    )
  }
}