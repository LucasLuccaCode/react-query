import { useEffect } from "react"
import { api } from "./services/api"

export default function App() {

  useEffect(() => {
    fetchUsers()
  })

  const fetchUsers = async () => {
    const users = await api.getUsers()
    console.log(users)
  }

  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  )
}