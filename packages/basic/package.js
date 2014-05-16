Package.describe({
  summary: "Common Prefix name"
});

Package.on_use(function (api, where) {
  api.export('Basic');
  api.add_files('basic.js', ['client', 'server']);
});
