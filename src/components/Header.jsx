import PropTypes from 'prop-types'
function Header({title, color, backgroundColor, textAlign}) {
    const headerStyle = {
        backgroundColor,
        color,
        textAlign,
    }
    return (
        <header style={headerStyle}>
            <div className="container">
                <h2>{title}</h2>
            </div>
        </header>
    )
}
Header.defaultProps = {
    title: "FeedBack App",
    backgroundColor: "rgba(0,0,0,.4)",
    color:"#fff",
    textAlign: "center",
}
Header.propTypes = {
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    textAlign: PropTypes.string,

}

export default Header