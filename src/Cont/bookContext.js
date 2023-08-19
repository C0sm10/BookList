export default bookContext = React.createContext([
    async componentDidMount() {
        const baseURL = "http://localhost:3002/books";
        const response = await fetch(baseURL);
        const data = await response.json();
        this.setState({ books: data });
      }
])