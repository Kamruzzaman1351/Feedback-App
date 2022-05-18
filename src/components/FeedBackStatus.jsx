import PropTypes from 'prop-types'
function FeedBackStatus({ feedback }) {
    let avrageRating = feedback.reduce((acc,curr)=> {
        return acc + curr.rating;
    },0);
    avrageRating = avrageRating / feedback.length;
    avrageRating = avrageRating.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Avarage Rating: {avrageRating}</h4>
    </div>
  )
}

FeedBackStatus.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            feedback: PropTypes.string.isRequired,
        })
    )
}

export default FeedBackStatus