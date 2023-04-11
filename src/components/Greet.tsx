type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props;
    return (
        <div>
            <h1>
                {
                    props.isLoggedIn
                        ? `Hello ${props.name}! You have ${messageCount} unread messages.`
                        : `Welcome Guest`
                }
            </h1>

        </div>
        
    )
}

export default Greet