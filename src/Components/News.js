import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
 
  constructor() {
    super();
    this.state={
      articles :[],
      loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5b68d031045f48289fab1625b977b870";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles})
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.state.articles.map((element)=>{
            return   <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0,15)} description={element.description.slice(0,30)} imgUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        
        </div>
      </div>
    );
  }
}
