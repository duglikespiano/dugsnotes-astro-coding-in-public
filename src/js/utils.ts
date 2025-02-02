export function slugify(text: string) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

export function formatDate(date: Date) {
	return new Date(date).toLocaleDateString('en-US', {
		timeZone: 'UTC',
	});
}

export function formatBlogPosts(
	posts: any,
	{ filterOutDrafts = true, filterOutFuturePosts = true, sortByDate = true, limit = 10 } = {}
) {
	const filteredPosts = posts.reduce((acc: any, post: any) => {
		const { date, draft } = post.frontmatter;
		if (filterOutDrafts && draft) return acc;
		if (filterOutFuturePosts && new Date(date) > new Date()) return acc;
		acc.push(post);
		return acc;
	}, []);

	if (sortByDate) {
		filteredPosts.sort((a: any, b: any) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
	} else {
		filteredPosts.sort(() => Math.random() - 0.5);
	}

	if (typeof limit === 'number') {
		return filteredPosts.slice(0, limit);
	}
	return filteredPosts;
}
