
export const postsAPI = {
    async fetchPosts() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc&_limit=10`);
            const posts = await response.json();
            return posts;
        } catch (ex) {
            console.log(ex);
        }
    },
    async fetchLatestPosts(limit = 3) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=id&_order=desc`);
            const latestPosts = await response.json();
            return latestPosts;
        } catch (ex) {
            console.log(ex);
        }
    },
    async fetchById(id) {
        try {
            if (!id) {
                throw new Error('ID is broken');
            }

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const post = await response.json();
            return post;
        } catch (ex) {
            console.log(ex);
        }
    }
};
