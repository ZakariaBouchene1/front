// Token class
export function Token() {
    this.getRefreshToken = function () {
        return localStorage.getItem('refreshToken');
    };

    this.getAccessToken = function () {
        return localStorage.getItem('accessToken');
    };

    this.setAccessToken = function (token) {
        localStorage.setItem('accessToken', token);
    };

    this.setRefreshToken = function (token) {
        localStorage.setItem('refreshToken', token);
    };
}

// Fetcher function for any backend call
export async function fetcher(link, requestDetails, callback) {
    try {
        const response = await fetch(link, requestDetails);
        callback(response);
    } catch (error) {
        console.error('Error in fetcher function:', error);
    }
}

export async function destroyToken() {
    try {
        const response = await fetch('http://localhost:8080/api/v1/auth/refresh-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token.getRefreshToken(),
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

    } catch (error) {
        console.error('Error destroying token:', error);
    }
}

export async function fetchUserData() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        // Do something with userData

    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
export function name(params) {
    return "name"+ params;
}