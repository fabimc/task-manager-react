export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const FILTER_BUTTONS = {
  [TODO_FILTERS.ALL]: { name: 'All', href: `/?filter=${TODO_FILTERS.ALL}` },
  [TODO_FILTERS.ACTIVE]: { name: 'Active', href: `/?filter=${TODO_FILTERS.ACTIVE}` },
  [TODO_FILTERS.COMPLETED]: { name: 'Completed', href: `/?filter=${TODO_FILTERS.COMPLETED}` }
} as const
