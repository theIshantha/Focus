'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var app = {
    title: 'Focus App',
    subtitle: 'The TODO App',
    options: ['One', 'Two']

};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement('p', null),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var count = 0;

var templateTwo = React.createElement(
    'div',
    { 'class': 'container' },
    React.createElement('br', null),
    React.createElement('br', null),
    React.createElement('br', null),
    React.createElement('br', null),
    React.createElement(
        'h1',
        null,
        'Count : ',
        count
    ),
    React.createElement(
        'button',
        { id: 'my-id', className: 'button btn btn-outline-danger btn-sm' },
        '\xA0\xA0\xA0\xA0 +1 \xA0\xA0\xA0\xA0'
    )
);

console.log(templateTwo);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
