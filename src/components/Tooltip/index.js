import styles from "./style.module.scss";

const Tooltip = ({ children, title }) => {
  return (
    <span className={styles.tooltip} data-tool-tip={title}>
      {children}
    </span>
  );
};

export default Tooltip;
