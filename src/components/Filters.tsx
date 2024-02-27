import { FILTER_BUTTONS, TODO_FILTERS } from '../const'
import { type FilterValue } from '../types'

interface Props {
  handleFilterChange: (filter: FilterValue) => void
  filterSelected: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
}

export const Filters = ({ filterSelected, handleFilterChange }: Props) => {
  const handleClick = (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    handleFilterChange(filter)
  }

  return (
    <ul className='filters'>
      {Object.entries(FILTER_BUTTONS).map(([key, { href, name }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key}>
            <a href={href} className={className} onClick={handleClick(key as FilterValue)}>
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
