
const TodoData = (props) => {
    console.log(">>> check props: ", props)
    return (
        <div className='todo-data'>
            <div>My name is {props.name}</div>
            <div>Learning React</div>
            <div>Watching youtube</div>
        </div>
    )
}

export default TodoData