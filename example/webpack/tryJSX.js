// tryJSX

var React = require("react");

var Hello = React.createClass({
    render: function(){
        return (
            <div> Hello Webpack & React! </div>
        )
    }
})

React.render(
    <Hello />,
    document.body
)


