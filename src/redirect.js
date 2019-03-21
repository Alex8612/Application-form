import React from 'react'

class Moreinfo extends React.Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.toggleHidden.bind(this)} >
          More info
        </button>
        {!this.state.isHidden && <Info />}
      </div>
    )
  }
}

const Info = () => (
<div>
    Please Note: For ONLINE payments only, the
    highest single transaction value is a payment ceiling to
    prevent accidental entry of payments exceeding the normal
    sales threshold. No payments above this value will be
    processed, so ensure it adequately covers all potential
    sales transaction values that will be processed.
  </div>
)

export default Moreinfo
