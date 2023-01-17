import { useQuery } from "@tanstack/react-query"
import { api } from '../../services/api'
import { UsersContainer } from "./styles"
import UserCard from "./UserCard"
import Loading from "../Loading"

export default function Users() {

  const { data: users, isLoading, error } = useQuery(['users'], api.getUsers)

  if (isLoading) return <Loading />

  if (error) return <p>Erro ao fazer requisição de usuários</p>

  return (
    <UsersContainer>
      {users?.map(user => (
        <UserCard user={user} key={user.id} />
      ))}
    </UsersContainer>
  )
}