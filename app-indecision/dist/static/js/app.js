"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggler = function (_React$Component) {
    _inherits(VisibilityToggler, _React$Component);

    function VisibilityToggler(props) {
        _classCallCheck(this, VisibilityToggler);

        var _this = _possibleConstructorReturn(this, (VisibilityToggler.__proto__ || Object.getPrototypeOf(VisibilityToggler)).call(this, props));

        _this.state = {
            visibility: false
        };
        _this.handleVisibility = _this.handleVisibility.bind(_this);
        return _this;
    }

    _createClass(VisibilityToggler, [{
        key: "handleVisibility",
        value: function handleVisibility() {
            this.setState(function (prevState, props) {
                return { visibility: !prevState.visibility };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container w-50 shadow-lg my-4 p-4 text-center" },
                React.createElement(
                    "p",
                    { className: "display-4" },
                    "Visibility Toggle"
                ),
                React.createElement(
                    "div",
                    { className: "p-2 my-2" },
                    React.createElement(
                        "button",
                        { className: "btn btn-primary shadow font-weight-bold", onClick: this.handleVisibility },
                        this.state.visibility ? "Hide content" : "Show content"
                    )
                ),
                this.state.visibility && React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        { className: "lead" },
                        "This is your top secret hidden content!"
                    )
                )
            );
        }
    }]);

    return VisibilityToggler;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggler, null), document.getElementById("app"));