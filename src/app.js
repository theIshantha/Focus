console.log('App.js is running');



// JSX - JavaScript XML

var app ={
    title: 'Focus App',
    subtitle: 'The TODO App',
    options: ['One', 'Two'] 

}

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
        <ol> 
            <li>Item one</li>
            <li>Item two</li>
        </ol>

    </div>
);




var appRoot  = document.getElementById('app');

ReactDOM.render(template, appRoot);



