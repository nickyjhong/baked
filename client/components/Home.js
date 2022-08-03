import React from 'react'
import {connect} from 'react-redux'

export function Home(props) {
  const { name } = props
  return (
    <div>
      home page: hello, { name }
    </div>
  )
}

const mapState = state => {
  return {
    name: state.auth.name
  }
}

export default connect(mapState)(Home)