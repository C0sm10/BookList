import { Component } from "react";
import { getImageUrl } from "./utils/getImage";

export class Book extends Component {
  render() {
    return (
      <div className="col-lg-4 col-sm-6" key={this.props.book.id}>
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal6"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              className="img-fluid"
              src={getImageUrl(this.props.book.img)}
              alt={this.props.book.title}
            />
          </a>

          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">
              {this.props.book.title}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.props.book.author}</li>
              <li className="list-group-item">{this.props.book.translate}</li>
            </ul>
            <div className="portfolio-caption-subheading text-muted">
              {this.props.book.overview}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
