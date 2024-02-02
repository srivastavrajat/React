const heading= React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from React");
    
   
const root= ReactDOM.createRoot(document.getElementById("root"));

 root.render(heading);

 const parent= React.createElement("div",
 {id:"parent"},
 [React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"I'm an H1 tag"),
   React.createElement("h2",{},"I'm a h2 tag")]),
   React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I'm an H1 tag"),
   React.createElement("h2",{},"I'm a h2 tag")])]
);
root.render(parent);
//JSX is to write complex react code.

