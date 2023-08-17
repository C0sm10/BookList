import { Component } from "react";
import List from "./list.jsx";

export default class App extends Component {
  state = { books: [], query: "" };
  async componentDidMount() {
    const baseURL = "http://localhost:3002/books";
    const response = await fetch(baseURL);
    const data = await response.json();
    this.setState({ books: data });
  }

  render() {
    return (
      <>
        <List books={this.state.books} />
      </>
    );
  }
}
