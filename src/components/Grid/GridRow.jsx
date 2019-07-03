import React from 'react'
import cx from 'classnames'

const GridRow = ({ condensed, children }) => (
  <div className={cx('bx--row', condensed && 'bx--row--condensed')}>
    {children}
  </div>
)

export default GridRow
