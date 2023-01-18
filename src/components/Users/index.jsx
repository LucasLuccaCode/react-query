import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { api } from '../../services/api'

import { ViewMore, UsersContainer, Message, UsersList } from "./styles"
import Modal from "../Modal"
import UserCard from "../UserCard"
import UserEdit from "../UserEdit"
import Loading from "../Loading"

export default function Users() {
  const perPage = 12
  const [selectedUser, setSelectedUser] = useState(null)
  const [page, setPage] = useState(perPage)

  const { data: users, isLoading, error } = useQuery( ['users'], api.getUsers,
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000
    }
  )

  const sortedUsers = useMemo(() =>
    users?.sort((a, b) => a.name > b.name ? 1 : -1), [users])

  const currentUsers = useMemo(() => sortedUsers?.slice(0, page), [sortedUsers, page])

  const showViewMore = currentUsers?.length < users?.length

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Message>Erro ao fazer requisição de usuários</Message>
  }

  if (!currentUsers.length) {
    return <Message>Nenhum usuário encontrado na api...</Message>
  }

  return (
    <UsersContainer>
      <UsersList>
        {
          currentUsers?.map(user => (
            <UserCard
              user={user}
              onClickEdit={() => setSelectedUser(user)}
              key={user.id}
            />
          ))
        }
      </UsersList>

      {
        showViewMore && (
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
    </UsersContainer>
  )
}