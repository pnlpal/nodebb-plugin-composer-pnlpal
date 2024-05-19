"use strict";

const Controllers = {};

Controllers.renderAdminPage = function (req, res) {
  res.render("admin/plugins/composer-pnlpal", {
    title: "Composer (pnlpal)",
  });
};

module.exports = Controllers;
