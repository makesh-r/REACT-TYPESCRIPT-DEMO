type ContainerProps = {
    styles: React.CSSProperties
}

const Containers = (props: ContainerProps) => {
  return (
    <div style={props.styles}>Containers</div>
  )
}

export default Containers