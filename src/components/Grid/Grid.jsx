import React from 'react'
import cx from 'classnames'

const Grid = ({ fullWidth, condensed, children }) => (
  <div className={cx('bx--grid', fullWidth && 'bx--grid--full-width', condensed && 'bx--grid--condensed')}>
    {children}
  </div>
)

export default Grid
