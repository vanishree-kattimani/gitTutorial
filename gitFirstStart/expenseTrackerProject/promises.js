const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

createPost({ title: 'Post 1' })
    .then(() => updateLastUserActivityTime())
    .then(() => createPost({ title: 'Post 2' }))
    .then(() => updateLastUserActivityTime())
    .then(() => createPost({ title: 'Post 3' }))
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log("Posts created:", posts);
        console.log("Last activity time:", lastActivityTime);

        return deleteLastPost();
    })
    .then((deletedPost) => {
        console.log("Deleted post:", deletedPost);
        console.log("New set of posts:", posts);
    })
    .catch((error) => {
        console.log(error);
    });
