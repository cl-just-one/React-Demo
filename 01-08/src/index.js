const React = require("react");
const ReactDOM = require("react-dom");
import ComponentHeader from "./components/header";
import ComponentFooter from "./components/footer";
import ComponentBody from "./components/body";

class Index extends React.Component {
  componentWillMount() {
    console.log("Index - componentWillMount");
  }
  componentDidMount() {
    console.log("Index - componentDidMount");
  }
  render() {
    const Header = <ComponentHeader />;
    return (
      <div>
        {Header}
        <ComponentBody userid={123456} username= {"xiaohu"} />
        <ComponentFooter />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("example"));
