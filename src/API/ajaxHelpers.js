const BASE_URL = "https://strangers-things.herokuapp.com/api/2305-FTB-PT-WEB-PT";


function getHeaders() {
    const headers = {
        'Content-Type': 'application/json'
    };
    const currentToken = localStorage.getItem('user token');
    if (currentToken !== null) {
        headers['Authorization'] = 'Bearer ' + currentToken;
    }
    return headers;
}

export async function fetchAllPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = await response.json();
        console.log("all posts", posts);
        return posts;
    } catch (error) {
        console.error('Uh oh trouble fetching all posts', error);
    }
}

export async function fetchMyData() {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: getHeaders(),
        });
        const result = await response.json();
        console.log("my data", result);
        return result;
    } catch (error) {
        console.error("Uh oh, trouble fetching your data", error);
    }
}

export async function deletePost(POST_ID) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
            method: "DELETE",
            headers: getHeaders(),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Uh oh, trouble deleting post', error);
    }
}

export async function registerUser(username, password) {
    const sendData = {
        user: {username: username, password: password},
    };

    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(sendData)
        });
        const result = await response.json();
        console.log('register result', result);
        const token = result.data.token;
        localStorage.setItem('user token', token);
        localStorage.setItem('username', username);
        return result;
    } catch (error) {
        console.error('Could not register', error);
        throw error;
    }
}

export async function loginUser(username, password) {
    const sendData = {
        user: {username: username, password: password},
    };

    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(sendData)
        });
        const result = await response.json();
        console.log('login result', result);
        const token = result.data.token;
        localStorage.setItem('user token', token);
        localStorage.setItem('username', username);
        return result;
    } catch (error) {
        console.error('Could not login', error);
        throw error;
    }
}

export async function createPost(title, description, price, location, willDeliver) {
    const sendData = {
        post: {title: title, description: description, price: price, location: location, willDeliver: willDeliver},
    }

        try {
            const response = await fetch(`${BASE_URL}/posts`, {
                headers: getHeaders(),
                method: "POST",
                body: JSON.stringify(sendData)
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Uh oh, could not post', error);
            throw error;
        }
    }

export async function sendMessage(content) {
    const sendData = {
        message: {content: content}
    }

    try {
        const response = await fetch(`${BASE_URL}/posts/POST_ID/messages`, {
            headers: getHeaders(),
            method: "POST",
            body: JSON.stringify(sendData)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Could not send message', error);
    }
}