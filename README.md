<h1>Lautakunta.fi</h1>

Simple Eleventy-generated site built from a SoundCloud RSS feed. Features an index
page with a list of all episodes and single episode pages with the episode description
and an embedded SoundCloud player.

The player is from [eleventy-plugin-embed-soundcloud](https://www.npmjs.com/package/eleventy-plugin-embed-soundcloud).
Using the player slows down building a lot (from half a second to half a minute),
so it may be a good idea to disable it when tinkering with the site (just remember
to enable it when you publish!).

Forked from [Phil Hawksworth's Medium Export](https://github.com/philhawksworth/medium-export).
