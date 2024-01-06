import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
        This Is a News Component...
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}
