const parent = React.createElement(
"div",
{ id: "Parent" },
React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "Hello i am H1"),
    React.createElement("h2", {}, "I am H2"),
]),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
