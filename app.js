/*
<div id="parent">
<div id= "child">
<h1>I am an h1 tag</h1>
<h2>child</h2>
</div>
</div>
ReactElement(object)= Html(browser understand)



*/

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "I am an h1 tag"),React.createElement("h2", {}, "I am an h2 tag")]));

//jsx

const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!!");  //react element = javascrit object

console.log(parent)

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);  //create h1 tag and put in div