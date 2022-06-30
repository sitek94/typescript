/**
 * @credit Matt Pocock
 */

import * as React from 'react'

interface TableProps<TItem> {
  items: TItem[]
  renderItem: (item: TItem) => React.ReactNode
}

//                        👇 It's important to insert a comma here so that it's not treated as a JSX expression
export const Table = <TItem,>(props: TableProps<TItem>) => {
  return null
}

export const Example = () => {
  return (
    <>
      <Table
        items={[{ id: '1' }]}
        renderItem={(item) => {
          return null
        }}
      />
      <Table
        items={[{ id: '1', firstName: 'Chuck' }]}
        renderItem={(item) => {
          return null
        }}
      />
      <Table
        items={[{ username: 'badbunny' }]}
        renderItem={(item) => {
          return null
        }}
      />
    </>
  )
}
