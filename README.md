# Reveal Express

- Based off of [Hakim El Hattab](http://hakim.se/)'s Spectacular [Reveal.js](https://github.com/hakimel/reveal.js) and the sublime [ExpressJS](http://expressjs.com/) framework
- Designed for easily creating slides in Jade and Markdown
- Server so you don't have to deal X-Origin issues in Chrome when pulling in external Markdown files

Currently in very basic form

## Installation

1. Download or clone repo
2. Install [NodeJS](http://nodejs.org/) + NPM (Installs with Node)
3. From CLI: `npm install && npm start`
4. Open browser at `http://localhost:3000`

### To add new presentation:

#### Method I  (Full Markdown Presentation)
- Create your markdown presentation file in the "markdown" folder
- Navigate to the URL like so: `http://localhost:3000/md/[your-file-name]` (without the '.md')
- Profit

** Things to Note: **

- You can pass in a title as a query string (e.g. `http://localhost:3000/md/my-presentation?title=My+Awesome+Presentation`)
- Horizontal slides are created using three consequetive new lines
- Vertical slides are created using two consequetive new lines
- These values can be changed in `markdown-template.jade`
- See [Reveal.js Docs](https://github.com/hakimel/reveal.js) for more info



#### Method II (Using Jade + Markdown)
- Open app.js and create a new route for the presentation.

```javascript
app.get('/any-route-url', function(req, res) {
  var file= 'my-presentation';
  var opts = { title: 'My Presentation', file: file };

  return res.render(file, opts);
});
```

- Create the view based on the file from above (e.g. - `views/my-presentation.jade`)
- Use `views/reveal-template.jade` as a reference point