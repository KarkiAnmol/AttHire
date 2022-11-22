import axios from "axios";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzNiNzkyZjAwNmNkYTJmMjE3ZGI5NSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njg1MjgwMjgsImV4cCI6MTY2ODc4NzIyOH0.G7QaHed6dK0iU5hG3f6OBxjAYcNYdqESgHFA2ce-KSc"
const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
