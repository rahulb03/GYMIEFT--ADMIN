const BASE_URL = 'http://localhost:8081/';
const SERVER_URL = 'http://localhost:4200/';
const API_URL = `${SERVER_URL}api/`;
const BACKEND_API_URL = `${API_URL}backend/`

// backendRoutes Module ------------
const backendRoutes = {
    signIn: `auth/signin`,
    profile: `auth/profile`,
    changePassword: `auth/changepassword`,
    signOut: `auth/signout`,

    // job module
    jobType: `jobtype`,
    job: `job`,

}
// -----------

// siteConfig/information ------------
import { storage } from "./constant"
import isBrowser from "./../Utils/isBrowser";

const siteConfig = {
    name: 'Gymify',
    shortDescription: 'Gym',
}
// ------------

const token = isBrowser() ? (localStorage.getItem(storage?.authLogin) ? `Bearer ${JSON.parse(localStorage.getItem(storage?.authLogin)).token}` : 'essentials') : 'essentials';

export {
    BASE_URL,
    SERVER_URL,
    API_URL,
    BACKEND_API_URL,

    token,
    backendRoutes,
    siteConfig
}