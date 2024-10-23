import styles from '../../assets/css/Contents.module.css';
import {Link} from 'react-router-dom';

export default function Contents() {
    return (
        <div className={styles.container}>
            <Link to="/login">login</Link>
            <Link to="*">404</Link>
        </div>
    )
};
