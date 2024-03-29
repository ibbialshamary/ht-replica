import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDc1NmY3MDVjNTUyMzNlODE0YWEyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTAwNDg5NSwiZXhwIjoxNjQ5MjY0MDk1fQ.EXaEVK8AY2w6iMTEaBB5xghQT7eMMh7uPNclTKh43H4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
