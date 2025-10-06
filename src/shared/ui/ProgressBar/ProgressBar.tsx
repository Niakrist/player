import React from "react";
import styles from "./ProgressBar.module.css";
import { transformDuration } from "@/shared/utils";

interface IProgressBarProsp {
  currentValue: number;
  maxValue: number;
  progress: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isShowTime?: boolean;
}

const ProgressBar = ({
  currentValue,
  maxValue,
  progress,
  onChange,
  isShowTime,
}: IProgressBarProsp) => {
  return (
    <div className={styles.rangeWrapper}>
      {isShowTime && (
        <span className={styles.curretnTime}>
          {transformDuration(currentValue)}
        </span>
      )}

      <div className={styles.timeRangeCustom}>
        <div className={styles.line} style={{ width: `${progress}%` }} />
        <div className={styles.round} style={{ left: `${progress}%` }} />
        <input
          className={styles.timeRange}
          type="range"
          min={0}
          max={maxValue}
          value={currentValue}
          onChange={onChange}
        />
      </div>
      {isShowTime && (
        <span className={styles.durations}>{transformDuration(maxValue)}</span>
      )}
    </div>
  );
};

export default ProgressBar;
