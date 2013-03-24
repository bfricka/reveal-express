// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls : true,
  progress : true,
  history  : true,
  center   : true,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: '/lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: '/plugins/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '/plugins/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: '/plugins/highlight/highlight.js', async: true, callback: function() {
      // Allow manual setting of languages in hljs fenced blocks
      [].slice.call( document.querySelectorAll( 'pre code' ) ).forEach( function( element ) {
          var lang = element.className.match(/lang\-(\w+)/);
          if (lang && lang.length > 1) {
            lang = lang[1];
            var html = element.innerHTML;
            var highlighted = hljs.highlight(lang, html);
            element.innerHTML = highlighted.value;
          } else {
            hljs.highlightBlock( element );
          }
      } );
    } },
    { src: '/plugins/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
    { src: '/plugins/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    // { src: '/plugins/search/search.js', async: true, condition: function() { return !!document.body.classList; } }
    // { src: '/plugins/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
  ]
});