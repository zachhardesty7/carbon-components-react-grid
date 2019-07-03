import React from 'react'
import cx from 'classnames'

export const GridRow = ({ condensed, className, children }) => (
  <div className={cx('bx--row', condensed && 'bx--row--condensed', className)}>
    {children}
  </div>
)
