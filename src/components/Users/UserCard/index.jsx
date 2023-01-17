import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../../services/api'
import { Actions, Avatar, Info, UserContainer, Title, ActionButton } from './styles'


export default function UserCard({ user }) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    () => api.deleteUser(user.id),
    {
      onSuccess: () => queryClient.invalidateQueries('users')
    }
  )

  return (
    <UserContainer>
      <Avatar src={user.avatar} alt={user.name} loading="lazy" />
      <Info>
        <Title className='nowrap'>{user.name}</Title>
        <Actions>
          <ActionButton btnText="Editar" handleClick={() => { }} />
          <ActionButton btnText="Apagar" handleClick={() => mutate()} />
        </Actions>
      </Info>
    </UserContainer>
  )
}