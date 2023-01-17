import Button from '../../Button'

export default function UserCard({ user }) {
  return (
    <div className="c-user">
      <div>
        <img src={user.avatar} alt={user.name} loading="lazy" />
      </div>
      <div className="c-user__info">
        <h2>{user.name}</h2>

        <div className="c-user__info__actions">
          <Button btnText="Editar" handleClick={() => {}} />
          <Button btnText="Apagar" handleClick={() => {}} />
        </div>
      </div>
    </div>
  )
}