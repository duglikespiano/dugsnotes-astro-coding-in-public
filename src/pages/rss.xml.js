import rss from '@astrojs/rss';
import { formatBlogPosts } from '../js/utils';

export async function GET(context) {
	const allPostsMarkdowns = import.meta.glob('./blog/**/*.md', { eager: true });
	const postsContent = Object.values(allPostsMarkdowns);
	const formattedPosts = formatBlogPosts(postsContent);

	return rss({
		title: 'Buzz’s Blog',
		description: 'A humble Astronaut’s guide to the stars',
		site: context.site,
		items: formattedPosts.map((post) => ({
			title: post.frontmatter.title,
			pubDate: post.frontmatter.date,
			description: post.frontmatter.description,
			customData: `
			<author>${post.frontmatter.author}</author>
			`,
			link: `/blog/${post.url}/`,
		})),
		stylesheet: '/rss/styles.xsl',
	});
}
