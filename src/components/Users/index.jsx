import { useQuery } from "@tanstack/react-query"
import { api } from '../../services/api'
import { UsersContainer } from "./styles"
import { useState } from "react"
import Modal from "../Modal"
import UserCard from "../UserCard"
import Loading from "../Loading"
import UserEdit from "../UserEdit"

export default function Users() {
  const [selectedUser, setSelectedUser] = useState(null)

  const { data: users, isLoading, error } = useQuery(['users'], api.getUsers)

  if (isLoading) return <Loading />

  if (error) return <p>Erro ao fazer requisição de usuários</p>

  return (
    <>
      <UsersContainer>
        {
          users?.map(user => (
            <UserCard
              user={user}
              onClickEdit={() => setSelectedUser(user)}
              key={user.id}
            />
          ))
        }
      </UsersContainer>

      {
        selectedUser && (
          <Modal
            user={selectedUser}
            closeModal={() => setSelectedUser(null)}
          >
            <UserEdit user={selectedUser} closeModal={() => setSelectedUser(null)} />
          </Modal>
        )
      }
    </>
  )
}