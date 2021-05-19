{
    'use strict';

    const Model = (function () {
        const data = {
            posts: [
                Post(
                    1,
                    `I'm a frontend developer with 2.5 years of experience working in large - scale enterprise applications.
                     🏭🚀The techologies I work on: React⚛️, GraphQL🕸, Node.js🚀 ...etc.
                    `,
                    'codecrook'
                )
            ],
            comments: []
        };

        const Post = (id, content, username) => ({ id, content, username });
        const Comment = (id, content, username, postId) => ({ id, content, username, postId });

        return ({
            getAllPosts: () => data.posts,
            getPostById: (id) => data.posts.find(p => p.id === id) || 'no posts found',
            getCommentsByPostId: (postId) => data.comments.filter(c => c.postId === postId)
        });
    })();

    const View = (function () {

    })();

    const Controller = (function (model, view) {
        return {

        }
    })(Model, View);
}