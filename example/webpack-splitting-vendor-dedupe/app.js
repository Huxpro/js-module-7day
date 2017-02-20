// try ES6 with React, JSX and Webpack

var React = require("react");

class HelloMessage extends React.Component {
    render() {
        return <div> 
            Hello {this.props.name}
            With CommonsChunkPlugin, the vendor is now Entry Chunk.
        </div>
    }
}

React.render(
    <HelloMessage name="Webpack" />,
    document.body
)


