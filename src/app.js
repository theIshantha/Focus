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
            <li>Item two
            DOM Elements
React implements a browser-independent DOM system for performance and cross-browser compatibility. We took the opportunity to clean up a few rough edges in browser DOM implementations.

In React, all DOM properties and attributes (including event handlers) should be camelCased. For example, the HTML attribute tabindex corresponds to the attribute tabIndex in React. The exception is aria-* and data-* attributes, which should be lowercased. For example, you can keep aria-label as aria-label.

Differences In Attributes
There are a number of attributes that work differently between React and HTML:

checked
The checked attribute is supported by <input> components of type checkbox or radio. You can use it to set whether the component is checked. This is useful for building controlled components. defaultChecked is the uncontrolled equivalent, which sets whether the component is checked when it is first mounted.
                
                className
To specify a CSS class, use the className attribute. This applies to all regular DOM and SVG elements like <div>, <a>, and others.
                    
                    If you use React with Web Components (which is uncommon), use the class attribute instead.
                    
                    dangerouslySetInnerHTML
                    dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from React, but you have to type out dangerouslySetInnerHTML and pass an object with a __html key, to remind yourself that it’s dangerous. For example:
                    
function createMarkup() {
  return {__html: 'First &middot; Second'};
                      }
                      
function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
                      }
                      htmlFor
                      Since for is a reserved word in JavaScript, React elements use htmlFor instead.
                      
                      onChange
                      The onChange event behaves as you would expect it to: whenever a form field is changed, this event is fired. We intentionally do not use the existing browser behavior because onChange is a misnomer for its behavior and React relies on this event to handle user input in real time.
                      
                      selected
The selected attribute is supported by <option> components. You can use it to set whether the component is selected. This is useful for building controlled components.
                        
                        style
                        Note
                        
                        Some examples in the documentation use style for convenience, but using the style attribute as the primary means of styling elements is generally not recommended. In most cases, className should be used to reference classes defined in an external CSS stylesheet. style is most often used in React applications to add dynamically-computed styles at render time. See also FAQ: Styling and CSS.
                        
                        The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes. For example:
                        
const divStyle = {
                                color: 'blue',
                            backgroundImage: 'url(' + imgUrl + ')',
                          };
                          
function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
            </li>
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
        <button id="my-id" className="button btn btn-outline-danger btn-sm">&nbsp;&nbsp;&nbsp;&nbsp; +1 &nbsp;&nbsp;&nbsp;&nbsp;</button>
    </div>
);

console.log(templateTwo);



var appRoot  = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);



