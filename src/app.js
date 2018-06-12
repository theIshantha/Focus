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

let count = 0;

const templateTwo =  (
    <div class="container">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <h1>Count : {count}</h1>
        <button type= "button" class="btn btn-primary"> +1 </button>
    </div>
);






var appRoot  = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);



