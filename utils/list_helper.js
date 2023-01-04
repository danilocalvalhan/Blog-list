const dummy = (blogs) => {
	return Array.isArray(blogs) ? 1 : false;
};

const totalLikes = (blogs) => {
	return blogs.reduce((acc, post) => acc + post.likes, 0);
};

module.exports = { dummy, totalLikes };
