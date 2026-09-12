import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const dist = new URL('../dist/', import.meta.url);
const read = (path) => readFile(new URL(path, dist), 'utf8');

test('home page uses a narrow bio-first publication structure', async () => {
  const html = await read('index.html');
  assert.match(html, /<h1[^>]*>Vishakh Abhayan<\/h1>/);
  assert.match(html, />Archive<\/a>/);
  assert.match(html, /<h2>Essays<\/h2>/);
  assert.match(html, /Building locally, thinking clearly/);
  assert.doesNotMatch(html, /class="hero-note"/);
});

test('archive lists published posts', async () => {
  const html = await read('blog/index.html');
  assert.match(html, /<h1[^>]*>Archive<\/h1>/);
  assert.match(html, /Building locally, thinking clearly/);
});

test('content collection creates a readable article route', async () => {
  const html = await read('blog/building-locally-thinking-clearly/index.html');
  assert.match(html, /A practical philosophy for local-first creative work/);
  assert.match(html, /Back to all writing/);
});

test('RSS and sitemap are generated', async () => {
  const rss = await read('rss.xml');
  const sitemap = await read('sitemap-0.xml');
  assert.match(rss, /Vishakh Abhayan/);
  assert.match(rss, /building-locally-thinking-clearly/);
  assert.match(sitemap, /blog\/building-locally-thinking-clearly/);
});
