var buttons = require('sdk/ui/button/action');
var prf = "network.proxy.type";
var tabs = require("sdk/tabs");
var orig = parseInt(require("sdk/preferences/service").get(prf));
var socks = 1;

if ( isNaN(orig) ) orig = 0;

var { ToggleButton } = require("sdk/ui/button/toggle");

var button = ToggleButton({
    id: "toggle-proxy",
    label: "Toggle Proxy",
    icon: {
      "16": "./button16.png",
      "32": "./button32.png",
      "64": "./button64.png"
    },
    onChange: function(state) {
      if (state.checked)
        require("sdk/preferences/service").set(prf, socks);
      else
        require("sdk/preferences/service").set(prf, orig);
    }
  });
