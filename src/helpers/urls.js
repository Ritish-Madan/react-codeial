const API_ROOT = 'http://codeial.codingninjas.com:8000/api/v2'

export const APIUrls = {
    login: ()=>{ return `${API_ROOT}/users/login`},
    fetchposts: (page = 1, limit = 5)=>{ return `${API_ROOT}/posts?page=${page}&limit=${limit}`},
    signup: ()=>{ return `${API_ROOT}/users/signup`}
}; 