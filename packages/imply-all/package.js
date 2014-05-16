Package.describe({
  summary: "Main package imply add all other packages"
});

Package.on_use(function (api, where) {
  api.imply(['basic', 'a', 'b']);
});
