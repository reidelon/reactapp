"use strict";

var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight</h1>
                <p>React, React Router, andt flux for a web app.</p>
            </div>

        );
    }
});

module.exports = Home;