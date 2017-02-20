// try ES6 with React, JSX and Webpack

var React = require("react");

class HelloMessage extends React.Component {
    render() {
        return <div>
          <p> Hello {this.props.name} </p>
          <p> This time, the document would request 3 chunks: Runtime (a.k.a manifest), Vendor and App. </p>
        </div>
    }
}


React.render(
    <HelloMessage name="webpack" />,
    document.body
)


