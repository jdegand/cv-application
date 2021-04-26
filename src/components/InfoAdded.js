function InfoAdded(props){

  return (
    <ul>
    {Object.keys(props.data).map((keyName, i) => (
      <li key={i} contentEditable="true">
        <span>{keyName}: {props.data[keyName]}</span>
      </li>
))}
    </ul>
  )
}

export default InfoAdded;
