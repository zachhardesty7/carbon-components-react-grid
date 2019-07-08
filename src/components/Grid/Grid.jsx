import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import { GridCol } from './GridCol'
import { GridRow } from './GridRow'

export const Grid = ({
	fullWidth = false,
	condensed = false,
	className = '',
	children = null,
}) => (
	<div className={cx('bx--grid', fullWidth && 'bx--grid--full-width', condensed && 'bx--grid--condensed', className)}>
		{children}
	</div>
)

Grid.Col = GridCol
Grid.Row = GridRow

Grid.propTypes = {
	fullWidth: PropTypes.bool,
	condensed: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node,
}
