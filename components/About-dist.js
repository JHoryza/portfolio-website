function About() {
    return React.createElement(
        "div",
        { id: "about" },
        React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-3 offset-2" },
                    React.createElement("img", { src: "img/portrait.png" })
                ),
                React.createElement(
                    "div",
                    { className: "col-md-5" },
                    React.createElement(
                        "h1",
                        null,
                        "About me"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eveniet commodi reprehenderit, unde laborum dignissimos voluptatibus cumque neque dolorem assumenda dicta impedit doloremque repellat minus quia debitis quasi consequatur pariatur."
                    ),
                    React.createElement(
                        "ul",
                        { className: "list-group list-group-horizontal" },
                        React.createElement(
                            "li",
                            { className: "list-group-item" },
                            React.createElement(
                                "i",
                                { className: "bi bi-stack" },
                                " Java"
                            )
                        ),
                        React.createElement(
                            "li",
                            { className: "list-group-item" },
                            React.createElement(
                                "i",
                                { className: "bi bi-stack" },
                                " Android"
                            )
                        ),
                        React.createElement(
                            "li",
                            { className: "list-group-item" },
                            React.createElement(
                                "i",
                                { className: "bi bi-stack" },
                                " Web Front-end"
                            )
                        ),
                        React.createElement(
                            "li",
                            { className: "list-group-item" },
                            React.createElement(
                                "i",
                                { className: "bi bi-stack" },
                                " SQL"
                            )
                        )
                    )
                )
            )
        )
    );
}

export default About;
