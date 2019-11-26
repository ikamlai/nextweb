import React, { Fragment } from 'react'
import { Flex, Box } from '@grid'
import colors from '@features/_ui/colors'

export default function ResultNotfound({ keyword }) {
  return (
    <Fragment>
      <Flex flexWrap="wrap">
        <Box width={1}>
          <h1
            css={{
              color: colors.link,
              fontSize: '1.8em',
              padding: '50px 10px 0px',
            }}>
            No results found for "{keyword}"
          </h1>
          <div
            css={{
              color: colors.link,
              fontSize: '0.8em',
              padding: '50px 10px 0px',
            }}>
            Please make sure your words are spelled correctly or use less or
            different keywords.
          </div>
        </Box>
      </Flex>
    </Fragment>
  )
}
