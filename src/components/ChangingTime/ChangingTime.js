<div className="changingTimeContainer">
  <div className="hrsTextWeeklyContainer">
    <p
      className={
        isTimeDaily ? "hrsTextDailyAppear" : "hrsTextDaily"
      }
    >
      5hrs
    </p>
    <p
      className={
        isTimeWeekly
          ? "hrsTextWeekly"
          : "hrsTextWeeklyAppear"
      }
    >
      32hrs
    </p>
    <p
      className={
        isMonthly
          ? "hrsTextMonthlyAppear"
          : "hrsTextMonthly"
      }
    >
      103hrs
    </p>
  </div>
  <div className="hrsTextPreviousWeeklyContainer">
    <p
      className={
        isTimeDaily
          ? "hrsTextPreviousDailyAppear"
          : "hrsTextPreviousDaily"
      }
    >
      Yesterday - 7hrs
    </p>
    <p
      className={
        isTimeWeekly
          ? "hrsTextPreviousWeekly "
          : "hrsTextPreviousWeeklyAppear"
      }
    >
      Last Week - 36hrs
    </p>
    <p
      className={
        isMonthly
          ? "hrsTextPreviousMonthlyAppear"
          : "hrsTextPreviousMonthly"
      }
    >
      Yesterday - 128hrs
    </p>
  </div>
</div>;
