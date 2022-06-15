import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=2f793b62df43fbe2354817aad45cf395

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/' //a base URL é o que não se altera em nenhuma chamada
});


export default api;
