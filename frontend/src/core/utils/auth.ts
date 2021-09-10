import jwtDecode from "jwt-decode";
import history from './history';

export const CLIENT_ID = 'liriodosvalesmodaevangelica';
export const CLIENT_SECRET = '3hefiSplgAb28uP*b';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    username: string;
}

type AccessToken = {
    exp: number;
    user_name: string;
}

export const saveSessionData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData') ?? '{}';
    const parsedSessionData = JSON.parse(sessionData);
    return parsedSessionData as LoginResponse;
}

export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();
    const tokenDecoded = jwtDecode(sessionData.access_token);
    return tokenDecoded as AccessToken;
}

export const isTokenValid = () => {
    const { exp } = getAccessTokenDecoded();
    if (Date.now() <= exp * 1000) {
        return true
    } return false;
}

export const isAuthenticated = () => {
    const sessionData = getSessionData();
    return sessionData.access_token && isTokenValid();
}

export const logout = () => {
    localStorage.removeItem('authData');
    history.replace('/admin/auth/login');
}
