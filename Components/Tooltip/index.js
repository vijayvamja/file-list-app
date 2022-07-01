import styles from './style.module.scss';

const Tooltip = ({ children, title }) => {
  return (
    <div className={styles.tooltip} data-tool-tip={title}>
      {children}
    </div>
  );
}

export default Tooltip;