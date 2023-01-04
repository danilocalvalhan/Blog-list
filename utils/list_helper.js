const dummy = (blogs) => {
	return Array.isArray(blogs) ? 1 : false;
};

const totalLikes = (blogs) => {
	return blogs.reduce((acc, post) => acc + post.likes, 0);
};

const favoriteBlog = (blogs) => {
	if (blogs.length === 0) {return undefined}

	let mostLikedBlog = blogs[0];
	for (let i = 1; i < blogs.length; i++) {
		if (mostLikedBlog.likes < blogs[i].likes) {
			mostLikedBlog = blogs[i];
		}
	}
	return {
		title: mostLikedBlog.title,
		author: mostLikedBlog.author,
		likes: mostLikedBlog.likes,
	};
};

module.exports = { dummy, totalLikes, favoriteBlog };
