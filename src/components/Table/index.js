import React from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import Tooltip from "../Tooltip";

const Table = ({ columns, data = [] }) => {
  return (
    <div className={styles.fileList}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.headingTr}>
            {columns.map((column) => (
              <th key={column.accessor} className={styles.th}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map((file) => (
            <tr key={file.path}>
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className={classNames(styles.td, {
                    [styles.tooltip]: !!column.tooltipAccessor,
                  })}
                >
                  {column.tooltipAccessor ? (
                    <Tooltip title={file[column.tooltipAccessor]}>
                      {file[column.accessor]}
                    </Tooltip>
                  ) : (
                    file[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
