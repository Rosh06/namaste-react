const heading = React.createElement(
    "h1",
    { id: "headid"},
    "Hello from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);