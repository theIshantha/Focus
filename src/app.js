console.log('App.js is running');

var template = {
    title: 'React test app',
    subtitle: 'focus app',
}


// JSX - JavaScript XML

var template = ( 
    <div>
        <h1>{template.title}</h1>
        <p>{template.subtitle}</p>
    </div>
);

var user = {
    // name: 'Andrew',
    age : '26',
    location : 'Philadelphia'
};
 
function getLocation(location) {
    if(location){
        return location;
    }else{
        return 'Unknown';
    }
}

var template1 = (
    <div>
    <h1> { user.name ? user.name : 'Anonymous' } </h1>
    <p> About Me :- Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <p> Age :- 22 </p>
    <p> Location :- {getLocation(user.location)} </p>

    </div>
);



var appRoot  = document.getElementById('app');
var appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot);
ReactDOM.render(template1, appRoot1);



