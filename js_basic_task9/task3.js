function getPostBody(postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (!response.ok) {
                    reject(new Error('Failed to fetch post'));
                }
                return response.json();
            })
            .then(post => {
                resolve(post.body);
            })
            .catch(error => {
                reject(error);
            });
        
    });
}

function getPostComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }
            return response.json();
        })
        .then(comments => {
            return comments;
        })
        .catch(error => {
            throw error;
        });
}

// Приклад використання функцій для отримання тіла та коментарів посту через айді (HTTP метод "GET")
getPostBody(3)
    .then(body => {
        console.log('Post Body:', body);
        console.log("----------------------------")
    })
    .catch(error => {
        console.error(error.message);
    });

getPostComments(3)
    .then(comments => {
        console.log('Comments:', comments);
    })
    .catch(error => {
        console.error(error.message);
    });
  