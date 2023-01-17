import { useQuery } from "@tanstack/react-query"
import { useMemo, useState } from "react"
import { api } from '../../services/api'
import { ViewMore, UsersContainer, Message } from "./styles"

import Modal from "../Modal"
import UserCard from "../UserCard"
import UserEdit from "../UserEdit"
import Loading from "../Loading"

export default function Users() {
  const perPage = 12
  const [selectedUser, setSelectedUser] = useState(null)
  const [page, setPage] = useState(perPage)

  const { data: users, isLoading, error } = useQuery(['users'], api.getUsers, {
    keepPreviousData: true, // Mostrar os dados antigos enquanto faz a requisição
    staleTime: 5 * 60 * 1000 // Tempo que o cache demorará para ficar obsoleto: 5 minutos em ms
  })

  const callbackSort = useMemo(() => {
    return (a, b) => a.name > b.name ? 1 : -1
  }, [users])

  const sortedUsers = users?.sort(callbackSort)

  const currentUsers = sortedUsers?.slice(0, page)

  if (isLoading) return <Loading />

  if (error) return <Message>Erro ao fazer requisição de usuários</Message>

  if (!currentUsers.length) return <Message>Nenhum usuário encontrado na api...</Message>

  return (
    <>
      <UsersContainer>
        {
          currentUsers?.map(user => (
            <UserCard
              user={user}
              onClickEdit={() => setSelectedUser(user)}
              key={user.id}
            />
          ))
        }
      </UsersContainer>

      {
        currentUsers.length < users.length && (
          <ViewMore className="btn" onClick={() => setPage(page + perPage)}>
            Ver mais
          </ViewMore>
        )
      }

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