import React from 'react'
import Modal from './Modal.js'

export default React.createClass({

  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children (just like animation)
      this.previousChildren = this.props.children
    }
  },

  render() {
    let { location } = this.props

    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )

    return (
      <div>
        <h1>Projects</h1>

        <div>
          {isModal ?
            this.previousChildren :
            this.props.children
          }

          {isModal && (
            <Modal isOpen={true} returnTo={location.state.returnTo}>
              {this.props.children}
            </Modal>
          )}
        </div>
      </div>
    )
  }
})