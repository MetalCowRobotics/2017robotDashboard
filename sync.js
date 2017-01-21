function sync() {
  var dashdata = require(./dashdata.json);
  document.getElementById("control-title").innerHTML = dashdata.dashboard.control.string1;
};
