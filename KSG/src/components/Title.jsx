import "./Title.css"
const Title = ({description,title}) => {
  return (
    <div className="Title">
        <p>{description}</p>
        <h2>{title}</h2>
    </div>
  )
}
export default Title