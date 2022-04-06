import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Star from "./components/Star";




class App extends Component {
  constructor() {
    super()
    this.state = { rating: 0 }
  }
   onSubmit(rating) {
    console.log(rating);
    this.setState({rating})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList rating={this.state.rating}/>
        <Star onSubmit={this.onSubmit.bind(this)}/>
         

        </div>
    );
  }
}



export default App;
