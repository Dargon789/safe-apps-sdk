import styles from './mylib.module.css';

export function Mylib() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Mylib!</h1>
    </div>
  );
}

export default Mylib;
