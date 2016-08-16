import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import MessageList from '../../components/MessageList'

function setup() {


  const enzymeWrapper = shallow()

  return {
    props,
    enzymeWrapper
  }
}
