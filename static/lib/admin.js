"use strict";

define("admin/plugins/composer-pnlpal", ["settings"], function (Settings) {
  const ACP = {};

  ACP.init = function () {
    Settings.load("composer-pnlpal", $(".composer-pnlpal-settings"));

    $("#save").on("click", function () {
      Settings.save("composer-pnlpal", $(".composer-pnlpal-settings"));
    });
  };

  return ACP;
});
