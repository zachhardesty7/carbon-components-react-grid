import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

// TODO: add `--aspect-ratio--{width}x{right}` prop
// TODO: add `--aspect-ratio--object` prop
// NOTE: https://github.com/carbon-design-system/carbon-elements/blob/master/packages/grid/scss/_mixins.scss
export const GridCol = ({
	sm = '',
	md = '',
	lg = '',
	xlg = '',
	max = '',
	gutter = false,
	hang = false,
	className = '',
	children = null,
}) => (
	<div
		className={cx(
			'bx--col',
			sm && `bx--col-sm-${sm === 'auto' ? '-' : ''}${sm}`,
			md && `bx--col-md-${md === 'auto' ? '-' : ''}${md}`,
			lg && `bx--col-lg-${lg === 'auto' ? '-' : ''}${lg}`,
			xlg && `bx--col-xlg-${xlg === 'auto' ? '-' : ''}${xlg}`,
			max && `bx--col-max-${sm === 'auto' ? '-' : ''}${max}`,
			gutter === true && 'bx--no-gutter',
			gutter !== true && gutter && `bx--no-gutter--${gutter}`,
			hang && `bx--hang--${hang}`,
			className
		)}
	>
		{children}
	</div>
)

GridCol.propTypes = {
	/**
	 * screen size <= 320px
	 *
	 * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
	 */
	sm: PropTypes.oneOf(['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),

	/**
  * screen size <= 672px
  *
  * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
  */
	md: PropTypes.oneOf(['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),

	/**
  * screen size <= 1056px
  *
  * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
  */
	lg: PropTypes.oneOf(['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),

	/**
  * screen size <= 1312px
  *
  * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
  */
	xlg: PropTypes.oneOf(['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),

	/**
  * screen size <= 1584px
  *
  * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
  */
	max: PropTypes.oneOf(['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
	gutter: PropTypes.oneOf([false, true, 'left', 'right']),
	hang: PropTypes.oneOf([false, 'left', 'right']),
	className: PropTypes.string,
	children: PropTypes.node,
}
