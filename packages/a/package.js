Package.describe({
  summary: "Package a"
});

Package.on_use(function (api, where) {
  api.use(['basic'], ['client', 'server']);
  api.add_files('a.js', ['client', 'server']);
});
