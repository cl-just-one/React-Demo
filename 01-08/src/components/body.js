const React = require("react");
import BodyChild from "./bodyChild";
import PropTypes from 'prop-types';

import ReactMixin from "react-mixin"
import MixinLog from "./mixin"

export default class body extends React.Component {
  // componentWillMount() {
  //     console.log("body - componentWillMount")
  // }
  // componentDidMount() {
  //     console.log("body - componentDidMount")
  // }

  constructor() {
    super();
    this.state = {
      userid: 33,
      username: "",
      age: 20
    };
  }

  changeUserInfo() {
    this.setState({
      age: 1900
    });

    this.refs.submitBtn.style.color = "red"

    MixinLog.log()
  }

  setBodyAgevalue(e) {
    this.setState({
      age: e.target.value
    });
  }

  render() {
    var userName = "";
    var boolInput = false;
    var html = "Hello&nbsp;World!";

    setTimeout(() => {
      this.setState({
        username: "",
        age: 1000
      });
    }, 2000);

    return (
      <div>
        <p>这里是主体部分。</p>
        <p>
          userid: {this.state.userid} username: {this.state.username ? "用户已登录" : "用户未登陆"} {this.state.age}
        </p>
        <p>
          {this.props.userid} {this.props.username}
        </p>
        <button ref="submitBtn" disabled={boolInput} onClick={this.changeUserInfo.bind(this)}>
        提交
        </button>
        {/* refs使用 */}
        <button>ssss</button>
        <p>{html}</p>
        <p dangerouslySetInnerHTML={{ __html: html }} />
        <BodyChild {...this.state} id={2} setBodyAgevalue={this.setBodyAgevalue.bind(this)} />
      </div>
    );
  }
}

// 验证变量
body.propTypes = {
  userid: PropTypes.number.isRequired
}

// 为属性指定默认值:
body.defaultProps = {
  username: 'Stranger'
};

ReactMixin(body.prototype, MixinLog)