"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormParser = void 0;

require("@babel/polyfill");

var _puppeteer = _interopRequireDefault(require("puppeteer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormParser =
/*#__PURE__*/
function () {
  function FormParser() {
    _classCallCheck(this, FormParser);

    _defineProperty(this, "value", 10);

    _defineProperty(this, "props", {
      x: 0,
      y: 0
    });
  }

  _createClass(FormParser, [{
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      this.props = props;
    }
  }, {
    key: "getProps",
    value: function getProps() {
      return this.props;
    }
  }, {
    key: "getMenu",
    value: function getMenu() {
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var browser, page;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _puppeteer["default"].launch();

              case 2:
                browser = _context.sent;
                _context.next = 5;
                return browser.newPage();

              case 5:
                page = _context.sent;
                _context.next = 8;
                return page["goto"]("https://google.com");

              case 8:
                _context.next = 10;
                return page.screenshot({
                  path: "google.png"
                });

              case 10:
                _context.next = 12;
                return browser.close();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }]);

  return FormParser;
}();

exports.FormParser = FormParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Gb3JtUGFyc2VyLnRzIl0sIm5hbWVzIjpbIkZvcm1QYXJzZXIiLCJ4IiwieSIsInZhbHVlIiwicHJvcHMiLCJwdXBwZXRlZXIiLCJsYXVuY2giLCJicm93c2VyIiwibmV3UGFnZSIsInBhZ2UiLCJzY3JlZW5zaG90IiwicGF0aCIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPYUEsVTs7Ozs7O21DQUNPLEU7O21DQUNPO0FBQUVDLE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLENBQUMsRUFBRTtBQUFYLEs7Ozs7OytCQUVKO0FBQ2YsYUFBTyxLQUFLQyxLQUFaO0FBQ0g7Ozs2QkFFUUEsSyxFQUFxQjtBQUMxQixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7OzZCQUVRQyxLLEVBQWM7QUFDbkIsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7OzsrQkFFaUI7QUFDZCxhQUFPLEtBQUtBLEtBQVo7QUFDSDs7OzhCQUVjO0FBQ1g7QUFBQTtBQUFBLDhCQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3lCQyxzQkFBVUMsTUFBVixFQUR6Qjs7QUFBQTtBQUNTQyxnQkFBQUEsT0FEVDtBQUFBO0FBQUEsdUJBRXNCQSxPQUFPLENBQUNDLE9BQVIsRUFGdEI7O0FBQUE7QUFFU0MsZ0JBQUFBLElBRlQ7QUFBQTtBQUFBLHVCQUdTQSxJQUFJLFFBQUosQ0FBVSxvQkFBVixDQUhUOztBQUFBO0FBQUE7QUFBQSx1QkFJU0EsSUFBSSxDQUFDQyxVQUFMLENBQWdCO0FBQUVDLGtCQUFBQSxJQUFJLEVBQUU7QUFBUixpQkFBaEIsQ0FKVDs7QUFBQTtBQUFBO0FBQUEsdUJBTVNKLE9BQU8sQ0FBQ0ssS0FBUixFQU5UOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQ7QUFRSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBiYWJlbC9wb2x5ZmlsbFwiO1xuaW1wb3J0IHB1cHBldGVlciBmcm9tIFwicHVwcGV0ZWVyXCJcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1QYXJzZXIge1xuICAgIHByaXZhdGUgdmFsdWUgPSAxMFxuICAgIHByaXZhdGUgcHJvcHM6IFByb3BzID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICBnZXRWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRQcm9wcyhwcm9wczogUHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH1cblxuICAgIGdldFByb3BzKCk6IFByb3BzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHM7XG4gICAgfVxuXG4gICAgZ2V0TWVudSgpOiBhbnkge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnJvd3NlciA9IGF3YWl0IHB1cHBldGVlci5sYXVuY2goKTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBicm93c2VyLm5ld1BhZ2UoKTtcbiAgICAgICAgICAgIGF3YWl0IHBhZ2UuZ290byhcImh0dHBzOi8vZ29vZ2xlLmNvbVwiKTtcbiAgICAgICAgICAgIGF3YWl0IHBhZ2Uuc2NyZWVuc2hvdCh7IHBhdGg6IFwiZ29vZ2xlLnBuZ1wiIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCBicm93c2VyLmNsb3NlKCk7XG4gICAgICAgIH0pKCk7XG4gICAgfVxufVxuXG4iXX0=