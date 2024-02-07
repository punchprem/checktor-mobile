// services/userService.js

const BASE_URL = 'http://127.0.0.1:8000//api/v1';

export const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users`);

        if (response.status === 307 || response.status === 308) {
            const redirectUrl = response.headers.get('Location');
            if (!redirectUrl) {
                throw new Error('Redirect URL not provided');
            }
            return fetch(redirectUrl);
        }

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Invalid email or password');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};
