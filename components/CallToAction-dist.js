function CallToAction() {
    return React.createElement(
        "div",
        { id: "cta" },
        React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "form",
                    { className: "form-inline" },
                    React.createElement(
                        "label",
                        null,
                        "Want to work with me?"
                    ),
                    React.createElement(
                        "a",
                        { href: "#contact" },
                        React.createElement("input", { type: "button", value: "Let's Chat", className: "btn" })
                    )
                )
            )
        )
    );
}

export default CallToAction;
