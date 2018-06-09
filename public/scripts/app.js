'use strict';

console.log('App.js is running');

var template = {
    title: 'React test app',
    subtitle: 'focus app'

    // JSX - JavaScript XML

};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        template.title
    ),
    React.createElement(
        'p',
        null,
        template.subtitle
    )
);

var user = {
    name: 'Andrew',
    age: '26',
    location: 'Philadelphia'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

var template1 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Ishantha Udara '
    ),
    React.createElement(
        'p',
        null,
        ' About Me :- Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    ),
    React.createElement(
        'p',
        null,
        ' Age :- 22 '
    ),
    React.createElement(
        'p',
        null,
        ' Location :- ',
        getLocation(user.location),
        ' '
    )
);

var appRoot = document.getElementById('app');
var appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot);
ReactDOM.render(template1, appRoot1);
