 export const movieApiKey:string = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjc4ODZmMmVlNjc0MTJkYzg4NGZiNjVhNjFjNTMyNiIsInN1YiI6IjY0YmZkMjk5OGVlNDljMGZjYjY3NWMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H--NY8rhO8C0n-IKP2fbmA9oh_zB2zZ_EjX9EmKndx0'
 export const movieApiUrl:string = "https://api.themoviedb.org/3/movie/popular"
 export const genreApiUrl: string = 'https://api.themoviedb.org/3/genre/movie/list'
 export const creditsApiUrl = (id:number) => `https://api.themoviedb.org/3/movie/${id}/credits`