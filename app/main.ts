declare var require: (module: string) => any
declare var hljs: any

const Reveal = require('reveal.js')

require('reveal.js/lib/js/head.min.js')

// Hack to make Reveal.js plugins work.
;(window as any).Reveal = Reveal

// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  transition: 'slide', // none/fade/slide/convex/concave/zoom

  // Optional reveal.js plugins
  dependencies: [
    { src: 'reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'reveal.js/plugin/zoom-js/zoom.js', async: true },
    { src: 'reveal.js/plugin/notes/notes.js', async: true }
  ]
});
