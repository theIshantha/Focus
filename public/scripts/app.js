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

function getLocation() {
    return 'Unknown';
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
        ' About Me :- Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
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
        getLocation(),
        ' '
    )
);

var appRoot = document.getElementById('app');
var appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot);
ReactDOM.render(template1, appRoot1);
