import '../styles/styles.css';
import { useSelector } from 'react-redux';

const Playground = (props) => {
    console.log('COMPONENT PROPS', props);

    const { messagesArray } = useSelector((state) => state.chat);

    return (
        <>
            <div className="playWrapper">
                <div>
                    <strong>Array of messages:</strong>
                    {messagesArray.map((o, i) => (
                        <div key={i}>{o.trimmedMessageText}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

const withAuthorizationHOC = function (Component) {
    return (props) => {
        return <Component userInfo={{ userId: 1, userName: 'Ilya' }} {...props} />
    }
}

export default withAuthorizationHOC(Playground);