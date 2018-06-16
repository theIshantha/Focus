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
Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galle' +
    'y of type and scrambled it to make a type specimen book. It has survived not onl' +
        'y five centuries, but also the leap into electronic typesetting, remaining essen' +
        'tially unchanged. It was popularised in the 1960s with the release of Letraset s' +
        'heets containing Lorem Ipsum passages, and more recently with desktop publishing' +
        ' software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is ' +
        'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' +
        ' the industry' s standard dummy text ever since the 1500 s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries,
but also the leap into electronic typesetting,
remaining essentially unchanged.It was popularised in the 1960 s with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
        <button id="my-id" className="button btn btn-outline-danger btn-sm">&nbsp;&nbsp;&nbsp;&nbsp; +1 &nbsp;&nbsp;&nbsp;&nbsp;</button>
    </div>
);

console.log(templateTwo);



var appRoot  = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);



