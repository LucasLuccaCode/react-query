import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Users from "./components/Users"

export default function App() {
  return (
    <div className="App">
      <main>
        <h1>Usuários</h1>

        <Users />
        <ReactQueryDevtools initialIsOpen={false} />
      </main>
    </div>
  )
}