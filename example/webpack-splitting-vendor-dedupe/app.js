// try ES6 with React, JSX and Webpack

var React = require("react");

class HelloMessage extends React.Component {
    render() {
        return <div> Hello {this.props.name} </div>
    }
}


React.render(
    <HelloMessage name="ES6" />,
    document.body
)


