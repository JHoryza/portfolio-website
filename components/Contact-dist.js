function Contact() {
    return React.createElement(
        "div",
        { id: "contact" },
        React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-sm-6 offset-3" },
                    React.createElement(
                        "h1",
                        null,
                        "Contact me"
                    ),
                    React.createElement(
                        "form",
                        null,
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { htmlFor: "emailInput" },
                                "Email address"
                            ),
                            React.createElement("input", { type: "email", className: "form-control", id: "emailInput", "aria-describedby": "emailHelp", placeholder: "Enter email" })
                        ),
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement(
                                "label",
                                { htmlFor: "messageInput" },
                                "Message"
                            ),
                            React.createElement("textarea", { type: "text", className: "form-control", id: "messageInput", placeholder: "Write your message" })
                        ),
                        React.createElement(
                            "button",
                            { type: "submit", className: "btn" },
                            "Submit"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "ul",
                        { className: "list-group list-group-horizontal" },
                        React.createElement(
                            "li",
                            { className: "list-group-item" },
                            React.createElement("i", { className: "bi bi-linkedin" })
                        ),
                        React.createElement(
                            "li",
                            { className: "list-group-item" },
                            React.createElement("i", { className: "bi bi-github" })
                        ),
                        React.createElement(
                            "li",
                            { className: "list-group-item" },
                            React.createElement("i", { className: "bi bi-twitter" })
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { id: "backToTop" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement("i", { className: "bi bi-arrow-up-square-fill" }),
                        React.createElement("br", null),
                        React.createElement(
                            "span",
                            { className: "badge" },
                            "Back to top"
                        )
                    )
                )
            )
        )
    );
}

export default Contact;
