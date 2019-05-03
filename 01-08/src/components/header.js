const React = require("react");

export default class Header extends React.Component {
  componentWillMount() {
    console.log("Header - componentWillMount");
  }
  componentDidMount() {
    console.log("Header - componentDidMount");
  }

  render() {
    return (
      <header>
        <h1>这里是头部！</h1>
      </header>
    );
  }
}
