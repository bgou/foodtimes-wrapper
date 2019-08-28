"use strict";

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = _http["default"].createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  res.end("Hello World\n");
}).listen(3000, "0.0.0.0");

console.log("Server running at http://0.0.0.0:3000/");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOlsic2VydmVyIiwiaHR0cCIsImNyZWF0ZVNlcnZlciIsInJlcSIsInJlcyIsIndyaXRlSGVhZCIsImVuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLGlCQUNaQyxZQURZLENBQ0MsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDMUJBLEVBQUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLEdBQWQsRUFBbUI7QUFBRSxvQkFBZ0I7QUFBbEIsR0FBbkI7QUFDQUQsRUFBQUEsR0FBRyxDQUFDRSxHQUFKLENBQVEsZUFBUjtBQUNELENBSlksRUFLWkMsTUFMWSxDQUtMLElBTEssRUFLQyxTQUxELENBQWY7O0FBT0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdDQUFaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHAgZnJvbSBcImh0dHBcIjtcblxuY29uc3Qgc2VydmVyID0gaHR0cFxuICAuY3JlYXRlU2VydmVyKChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy53cml0ZUhlYWQoMjAwLCB7IFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC9wbGFpblwiIH0pO1xuICAgIHJlcy5lbmQoXCJIZWxsbyBXb3JsZFxcblwiKTtcbiAgfSlcbiAgLmxpc3RlbigzMDAwLCBcIjAuMC4wLjBcIik7XG5cbmNvbnNvbGUubG9nKFwiU2VydmVyIHJ1bm5pbmcgYXQgaHR0cDovLzAuMC4wLjA6MzAwMC9cIik7XG4iXX0=