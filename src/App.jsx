import Users from "./components/Users"
import { AppContainer, Main } from "./styles"

export default function App() {
  return (
    <AppContainer>
      <Main>
        <h1>Usuários</h1>

        <Users />
      </Main>
    </AppContainer>
  )
}