import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://63c5fc7de1292e5bea2dd454.mockapi.io/api'
})

const getUsers = async () => {
  const response = await instance.get('/users')
  return response.data
}

const updateUser = async (userId, name) => {
  const response = await instance.put(`/users/${userId}`, { name })
  return response.data
}

const deleteUser = async (userId) => {
  const response = await instance.delete(`/users/${userId}`)
  return response.data
}

export const api = {
  getUsers,
  updateUser,
  deleteUser
}