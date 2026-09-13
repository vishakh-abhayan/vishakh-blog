import rss from '@astrojs/rss';
import { getPublishedPosts } from '../lib/posts';

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: 'What If We Stop Asking Whether AI Thinks?',
    description: 'Notes on local AI, code, creative tools, and practical experiments.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `blog/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
