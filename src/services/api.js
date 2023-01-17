import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://63c5fc7de1292e5bea2dd454.mockapi.io/api'
})

const getUsers = async () => {
  const response = await instance.get('/users')
  return response.data
}

const getUserById = async (userId) => {
  const response = await instance.get(`/users/${userId}`)
  return response.data
}

const updateUser = async (userId, data) => {
  const response = await instance.put(`/users/${userId}`, data)
  return response.data
}

const deleteUser = async (userId, data) => {
  const response = await instance.put(`/users/${userId}`, data)
  return response.data
}

export const api = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser
}