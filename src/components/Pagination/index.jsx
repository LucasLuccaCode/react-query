import { useEffect, useMemo } from "react"
import Button from "../Button"

export default function Pagination({ page, setPage, users, setCurrentUsers }) {
  const perPage = 4
  const totalUsers = users.length
  console.log(users)

  const handlePrevious = () => {
    const nextInitial = Math.max(((page - 1) * perPage), 0)
    const nextEnd = nextInitial + perPage
    console.log({ nextInitial, nextEnd })
    setPage(Math.ceil(nextInitial / perPage))
    setCurrentUsers(users.slice(nextInitial, nextEnd))
  }
  
  const handleNext = () => {
    const nextInitial = Math.min(((totalUsers - perPage)), ((page + 1) * perPage))
    const nextEnd = nextInitial + perPage
    console.log({ nextInitial, nextEnd })
    setPage(Math.ceil(nextInitial / perPage))
    setCurrentUsers(users.slice(nextInitial, nextEnd))
  }

  return (
    <div className="c-pagination">
      <Button handleClick={handlePrevious} btnText="Previous" />
      {page}
      <Button handleClick={handleNext} btnText="Next" />
    </div>
  )
}