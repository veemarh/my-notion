import {Link} from 'react-router-dom';

function NotFoundScreen() {
    return (
        <>
            <h1>404</h1>
            <Link to="/">Вернуться на главную</Link>
        </>
    );
}

export default NotFoundScreen;
