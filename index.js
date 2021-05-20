{
    'use strict';

    const Model = (function () {
        const data = {
            posts: [
            ],
            comments: [
                {
                    id: 1,
                    content: 'Nice!!',
                    username: 'getify',
                    postId: 1,
                    comments: [
                        {
                            id: 2, username: 'ry', content: 'This guy z good', postId: 1,
                            comments: [{ id: 3, username: 'isaacs', content: 'yeah man!', postId: 1, comments: [] }]
                        }
                    ]
                },
                {
                    id: 4,
                    content: 'I need this guy in my company ASAP.',
                    username: 'elonmusk',
                    postId: 1,
                    comments: [
                        {
                            id: 5, username: 'BillGates', content: 'Too late musky! Sent the offer letter already.', postId: 1,
                            comments: []
                        }
                    ]
                }
            ]
        };

        const Post = (id, content, username, likes) => ({ id, content, username });
        const Comment = (id, content, username, postId, comments) => ({ id, content, username, postId, comments });

        return ({
            getAllPosts: () => data.posts,
            getPostById: (id) => data.posts.find(p => p.id === id) || 'no posts found',
            getCommentsByPostId: (postId) => data.comments.filter(c => c.postId === postId),
            // addNewComment: (content, username, postId) => {}
        });
    })();

    const View = (function () {
        const DOMElements = {
            postContainer: document.querySelector('.post-container'),
            commentsContainer: document.querySelector('.comments-container'),
        };

        return {
            getDOMElementByName: (element) => DOMElements[element]
        }
    })();

    const Controller = (function (model, view) {
        const buildComments = (comment) => {
            const { username, content, comments } = comment;
            return `
                <div class="comment" style="padding-left: 10px">
                    <h4 class="comment-username">${username}</h4>
                    <p class="comment-content">
                        ${content}
                    </p>
                    ${comments.length > 0 ? comments.map(comment => buildComments(comment)).join('') : ''}
                </div>
                
            `;
        }
        const renderAllComments = () => {
            const allCommnets = model.getCommentsByPostId(1);
            const commentsContainer = view.getDOMElementByName('commentsContainer');
            commentsContainer.innerHTML = allCommnets.map(comment => buildComments(comment));
        }
        return {
            render: () => {
                renderAllComments();
            }
        }
    })(Model, View);

    Controller.render();
}