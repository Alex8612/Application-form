import React, { Component } from 'react'
import SignatureCanvas from 'react-signature-canvas'


class Signature extends Component {
  state = {trimmedDataURL: null}
  sigPad = {}
  clear = () => {
    this.sigPad.clear()
  }
  trim = () => {
    this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png')})
  }
  render () {
    let {trimmedDataURL} = this.state
    return <div >
      <div >
        <SignatureCanvas canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div>
        <button onClick={this.clear}>
          Clear
        </button>
        <button  onClick={this.trim}>
          Trim
        </button>
      </div>
      {trimmedDataURL
        ? <img
          src={trimmedDataURL} />
        : null}
    </div>
  }
}

export default Signature
