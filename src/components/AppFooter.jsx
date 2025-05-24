import styles from "./Sidebar.module.css";
function AppFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by Travelapp Inc.
      </p>
    </footer>
  );
}

export default AppFooter;
