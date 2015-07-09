// tryJSX

var React = require("react");

var Hello = React.createClass({
    render: function(){
        return (
            <div>  Watch Webpack & React! </div>
        )
    }
})

React.render(
    <Hello />,
    document.body
)


