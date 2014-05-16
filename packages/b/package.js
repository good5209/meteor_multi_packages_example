Package.describe({
  summary: "Package b"
});

Package.on_use(function (api, where) {
  api.use(['basic'], ['client', 'server']);
  api.add_files('b.js', ['client', 'server']);
});
