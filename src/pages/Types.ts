type Post = {
	frontmatter: {
		title: string;
		date: string;
		tags?: string[];
		category: string;
		author: string;
	};
	url: string;
};
