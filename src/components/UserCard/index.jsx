import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../services/api'

import { Actions, Avatar, Info, UserContainer, Title, ActionButton } from './styles'

export default function UserCard({ user, onClickEdit }) {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(
    () => api.deleteUser(user.id),
    {
      onSuccess: () => queryClient.invalidateQueries('users')
    }
  )

  const textDeletingBtn = isLoading ? "Deletando..." : "Deletar"

  return (
    <UserContainer>
      <Avatar src={user.avatar} alt={user.name} loading="lazy" />
      <Info>
        <Title className='nowrap'>{user.name}</Title>
        <Actions>
          <ActionButton btnText="Editar" handleClick={onClickEdit} />
          <ActionButton btnText={textDeletingBtn} handleClick={() => mutate()} />
        </Actions>
      </Info>
    </UserContainer>
  )
}