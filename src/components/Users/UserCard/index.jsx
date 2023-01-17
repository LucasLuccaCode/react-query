import Button from '../../Button'
import { Actions, Avatar, Info, UserContainer, Title, ActionButton } from './styles'

export default function UserCard({ user }) {
  return (
    <UserContainer>
      <Avatar src={user.avatar} alt={user.name} loading="lazy" />
      <Info>
        <Title className='nowrap'>{user.name}</Title>
        <Actions>
          <ActionButton btnText="Editar" handleClick={() => { }} />
          <ActionButton btnText="Apagar" handleClick={() => { }} />
        </Actions>
      </Info>
    </UserContainer>
  )
}