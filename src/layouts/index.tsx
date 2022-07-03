import { Outlet, Link } from '@umijs/max';
import styles from './index.less';

export default function Layout () {
  return (
    <div className={styles.layout}>
      <ul>
        <li><Link to="updateNestedObjectWithComponent">update nested object with component</Link></li>
        <li><Link to="updateNestedObjectWithoutComponent">update nested object without component</Link></li>
        <li><Link to="updateComponentProps">update component props</Link></li>
      </ul>
      <Outlet/>
    </div>
  );
}
