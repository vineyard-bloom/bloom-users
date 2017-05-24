import * as React from 'react'

export class StateManager<State> {
  protected stateOwner: React.Component<any, State>

  constructor(stateOwner: React.Component<any, State>) {
    this.stateOwner = stateOwner
  }

  getState(): State {
    return this.stateOwner.state
  }

  onChange = e => {
    const target = e.target
    this.stateOwner.setState({
      [target.name]: target.value
    })
  }
}