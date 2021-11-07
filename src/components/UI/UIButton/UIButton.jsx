import PropTypes from 'prop-types'
import cn from 'classnames'

import '../index.css'
import styles from './UIButton.module.css'

const UIButton = ({
  type,
  text,
  onClick,
  disabled,
  theme = 'dark',
  classes,
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={cn(styles.button, styles[theme], classes)}>
    {text}
  </button>
)

UIButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
}

export default UIButton
