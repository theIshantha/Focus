let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};



const renderCounterApp = () => {
    const templateTwo = (
        <div className="container">
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
renderCounterApp();

