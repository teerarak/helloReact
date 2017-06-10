import React, { Component } from 'react'
class Contents extends Component {
  constructor () {
    super()
    this.state = {
      message: 'Like',
      dataComment: [],
      newComment: '',
      comment: false,
      like: true,
      checkEdit: false,
      index: -1,
      editComment: ''
    }
    this.editInput = this.editInput.bind(this)
  }

  chMsg () {
    if (this.state.like) {
      this.setState({message: 'Unlike',like: false})
    } else {
      this.setState({message: 'Like',like: true})
    }
  }
  addComment (event) {
    if (event.key === 'Enter') {
      let myArray = this.state.dataComment
      myArray.push(this.state.newComment)
      this.setState({
        dataComment: myArray,
        comment: true,
        newComment: ''
      })
    }
  }
  onHandleChangeEdit (e) {
    this.setState({editComment: e.target.value})
  }
  onHandleChange (e) {
    this.setState({newComment: e.target.value})
  }
  deleteComment (id) {
    let tmpData = this.state.dataComment
    tmpData.splice(id, 1)
    this.setState({dataComment: tmpData})
  }
  editComment (id) {
    if (this.state.checkEdit) {
      let tmpData = this.state.dataComment
      tmpData.splice(id, 1, this.state.editComment)
      this.setState({
          dataComment: tmpData,
          editComment: '',
          checkEdit: !this.state.checkEdit
      })
    } else {
        this.setState({
            index: id,
            editComment: this.state.dataComment[id],
            checkEdit: !this.state.checkEdit
        })
    }
  }
  editInput (id) {
    let checkEdit = this.state.checkEdit
    let editIndex = this.state.index
    let editInput = null
    if (checkEdit && id === editIndex) {
        editInput = <input value={this.state.editComment} onChange={this.onHandleChangeEdit.bind(this)}/>
    }
    return (editInput)
  }
  render () {
    return (
      <div>
        <h2>Profile</h2>
        <p className="flow-text"> Name : {this.props.firstName} {this.props.lastName}</p>
        <p className="flow-text"> Age : {this.props.age}</p>
        <ul>
            {this.state.dataComment.map((data, index) => <li key={index}> {data} 
            {this.editInput(index)} 
            <button className="btn-flat" onClick={this.editComment.bind(this, index)}>edit</button> 
            <button className="btn-flat" onClick={this.deleteComment.bind(this, index)}>X</button></li>)}
        </ul>
        <button className="btn-flat" onClick={this.chMsg.bind(this)}>{this.state.message}</button><br/>
        <div className="input-field">
            <input placeholder="Comment" className="validate" type="text" value={this.state.newComment} onKeyUp={this.addComment.bind(this)} onChange={this.onHandleChange.bind(this)}/>
        </div>
      </div>
    )
  }
}
export default Contents
