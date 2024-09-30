import './ShowCount.css'

const ShowCount = (props) => {
  return (
    <div>
      <h3>
        You clicked here {props.count} {props.count === 1 ? 'time' : 'times'}
      </h3>
    </div>
  )
}

export default ShowCount
