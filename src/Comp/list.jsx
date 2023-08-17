import { Component } from "react";
import { Book } from "./book.jsx";
import "./list.css";
export default class List extends Component {
  render() {
    const bookList = this.props.books.map((book, id) => {
      return <Book book={book} key={id} />;
    });
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Book - folio</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">{bookList}</div>
        </div>
      </section>
    );
  }
}
