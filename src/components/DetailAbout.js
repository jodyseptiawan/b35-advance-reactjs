import PropTypes from 'prop-types'

export default function DetailAbout(props) {
  return (
    <div>
        <h1>Title: {props.title}</h1>
        <p>Summary: {props.summary}</p>
        <p>Total guest: {props.total}</p>
    </div>
  )
}

DetailAbout.propTypes = {
    title: PropTypes.string,
    summary: PropTypes.string.isRequired,
    total: PropTypes.number
}