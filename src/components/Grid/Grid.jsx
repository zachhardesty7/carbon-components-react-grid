import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import { GridCol } from './GridCol'
import { GridRow } from './GridRow'

// @TODO: test me so much
export const Grid = ({
	aspectRatio = undefined,
	fullWidth = false,
	condensed = false,
	className = '',
	children = null,
}) => (
	<div className={cx(
		'bx--grid', fullWidth && 'bx--grid--full-width', condensed && 'bx--grid--condensed',
		aspectRatio && 'bx--aspect-ratio',
		aspectRatio && `bx--aspect-ratio--${aspectRatio[0]}x${aspectRatio[1]}`,
		className
	)}
	>
		{children}
	</div>
)

Grid.Col = GridCol
Grid.Row = GridRow

Grid.propTypes = {
	/** input: [width, height] */
	aspectRatio: PropTypes.oneOf([16, 9], [2, 1], [4, 3], [1, 1]),
	fullWidth: PropTypes.bool,
	condensed: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node,
}
