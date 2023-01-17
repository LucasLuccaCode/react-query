import { useEffect, useState } from "react"
import { api } from '../../services/api'
import { UsersContainer } from "./styles"
import UserCard from "./UserCard"

export default function Users() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const users = await api.getUsers()
      setUsers(users)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <p>Loading</p>

  if (error) return <p>Erro ao fazer requisição de usuários</p>

  return (
    <UsersContainer>
      {users?.map(user => (
        <UserCard user={user} key={user.id} />
      ))}
    </UsersContainer>
  )
}