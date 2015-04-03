var buttons = require('sdk/ui/button/action');
var prf = "network.proxy.type";

require("sdk/simple-prefs").prefs["proxyStateNotPressed"] =
  parseInt(require("sdk/preferences/service").get(prf));

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
        require("sdk/preferences/service").set(prf,
          parseInt(require("sdk/simple-prefs").prefs["proxyStateNotPressed"]));
      else
        require("sdk/preferences/service").set(prf,
          parseInt(require("sdk/simple-prefs").prefs["proxyStatePressed"]));
    }
  });
