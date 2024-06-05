import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmZiYzQ4YjcyY2QzNTNlMjU3ZThmMWUyMzRiZjRlMiIsInN1YiI6IjY1ZTk2ZDNmNzJjMTNlMDE2MmMzYTc4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mBe4xtlkKvPL4xeQXK4lYIftODBihJsyLpuHCNqDO0Y'
  }
});

export default instance;





