import PropTypes from 'prop-types'
function Button({children, type, version, isDisabled}) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>{children}</button>
  )
}

Button.defaultProps = {
    type: "submit",
    version: "primary",
    isDisabled: true,
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
}
export default Button