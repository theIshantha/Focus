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
        <p></p>
        <ol> 
            <li>Item one</li>
            <li>Item two</li>
        </ol>

    </div>
);

let count = 0;

const addOne = () => {
    count++;
    console.log('addOne');
};
const minusOne = () => {
    count--;
    console.log('minusOne');
};
const reset = () => {
    console.log('reset');
};

var appRoot  = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div class="container">
            <br></br>
            <br></br>
            <br></br>
                <h1>Count : {count}</h1>
                <button id="my-id" className="button btn btn-outline-danger btn-sm" onClick={addOne} >&nbsp;&nbsp;&nbsp;&nbsp; +1 &nbsp;&nbsp;&nbsp;&nbsp;</button> &nbsp;&nbsp;
                <button id="my-id" className="button btn btn-outline-danger btn-sm" onClick={minusOne} >&nbsp;&nbsp;&nbsp;&nbsp; -1 &nbsp;&nbsp;&nbsp;&nbsp;</button>  <br></br><br></br>
                <button id="my-id" className="button btn btn-outline-danger btn-sm" onClick={reset} >&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reset
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);

};
  renderCount

