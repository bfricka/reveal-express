(function() {
  var express = require('express')
    , http = require('http')
    // , less = require('less-middleware')
    , app = express()
    , staticApp = express['static'];

  // Begin config

  app.configure(function() {
    app.set('port', 3000);
    app.set('views', "" + __dirname + "/views");
    app.set('view engine', 'jade');

    app.use(express.compress());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    // app.use(less({
    //   src: __dirname + "/public",
    //   compress: true
    // }));
    app.use(staticApp(__dirname + "/public"));

    app.use(function(req, res) {
      res.status(404);
      if (req.accepts('html')) {
        return res.render("404", {
          title: '404 Not Found'
        });
      } else if (req.accepts('json')) {
        return res.send({
          error: 'Not Found'
        });
      } else {
        return res.type('txt').send('404 Not Found');
      }
    });
  });

  // Begin Routes
  app.get('/', function(req, res) {
    var opts = { title: 'RevealJS', file: 'index' };
    return res.render('index', opts);
  });

  app.get('/js-training', function(req, res) {
    var file= 'js-training';
    var opts = { title: 'JavaScript Training', file: file };
    return res.render(file, opts);
  });

  // Init
  var port = app.get('port');
  http
    .createServer(app)
    .listen(port, function() {
      return console.log("Server started on port " + port);
  });
}).call(this);
