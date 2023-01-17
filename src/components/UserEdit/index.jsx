import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { api } from '../../services/api'
import { Form, Input } from './styles.js'
import Button from '../Button'

export default function UserEdit({ user, closeModal }) {
  const [name, setName] = useState(user?.name)
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(
    () => api.updateUser(user.id, name),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
        closeModal()
      }
    }
  )

  const handleUpdateUser = (e) => {
    e.preventDefault()
    mutate()
  }

  return (
    <>
      <h1>Editar nome do usuário:</h1>

      <Form onSubmit={handleUpdateUser}>
        <Input
          type="text"
          value={name}
          autoFocus
          onChange={(e) => setName(e.target.value)}
        />
        <Button btnText={isLoading ? 'Atualizando' : 'Atualizar'} type="submit" />
      </Form>
    </>
  )
}