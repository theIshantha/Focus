console.log('App.js is running');

// var template = {
//     title: 'React test app',
//     subtitle: 'focus app',
// }


// JSX - JavaScript XML

var app ={
    title: 'Focus App',
    subtitle: 'The TODO App',
    option: ['One', 'Two'] 

}

var template = (
    <div>
        <h1>{app.title}</h1>
        app.subtitle && <p1>{app.subtitle}</p1>

        <ol> 
            <li></li>
            <li></li>
        </ol>

    <div>
);




var appRoot  = document.getElementById('app');

ReactDOM.render(template, appRoot);



