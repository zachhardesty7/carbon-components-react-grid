import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

// TODO: add `--no-gutter` prop
// TODO: add `--no-gutter--{left, right}` prop
// TODO: add `--hang--{left, right}` prop
// TODO: add `--aspect-ratio--{width}x{right}` prop
// TODO: add `--aspect-ratio--object` prop
// NOTE: https://github.com/carbon-design-system/carbon-elements/blob/master/packages/grid/scss/_mixins.scss
const GridCol = ({
  sm,
  md,
  lg,
  xlg,
  max,
  children,
}) => (
  <div
    className={cx(
      'bx--col',
      sm && `bx--col-sm-${sm === 'auto' ? '-' : ''}${sm}`,
      md && `bx--col-md-${sm === 'auto' ? '-' : ''}${md}`,
      lg && `bx--col-lg-${sm === 'auto' ? '-' : ''}${lg}`,
      xlg && `bx--col-xlg-${sm === 'auto' ? '-' : ''}${xlg}`,
      max && `bx--col-max-${sm === 'auto' ? '-' : ''}${max}`,
    )}
  >
    {children}
  </div>
)

GridCol.propTypes = {
  sm: PropTypes.oneOf(['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  md: PropTypes.oneOf(['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  lg: PropTypes.oneOf(['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  xlg: PropTypes.oneOf(['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  max: PropTypes.oneOf(['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  children: PropTypes.node,
}

export default GridCol
