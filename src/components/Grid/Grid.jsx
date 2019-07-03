import React from 'react'
import cx from 'classnames'

import { GridCol } from './GridCol'
import { GridRow } from './GridRow'

export const Grid = ({
  fullWidth, condensed, className, children,
}) => (
  <div className={cx('bx--grid', fullWidth && 'bx--grid--full-width', condensed && 'bx--grid--condensed', className)}>
    {children}
  </div>
)

Grid.Col = GridCol
Grid.Row = GridRow
