var React = require('react');
var ReactDOM = require('react-dom');
var request = require('request');

var Hello = React.createClass({

    getInitialState: function() {
        return {
            username: 'adam',
            data: {}
        };
    },

    componentDidMount: function() {
        request(this.props.source, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var json = JSON.parse(body);
                this.setState({
                    data: json
                });
w            }
        }.bind(this));
    },

    render: function() {

        return <h1 className="red">
            Hello {this.state.username}!
        {this.state.data.foo}
        </h1>
    }
});

ReactDOM.render(
    <Hello source="http://localhost/api.php" />,
    document.querySelector('.container')
);