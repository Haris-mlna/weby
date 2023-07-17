import styles from "./errorpages.module.css";

const Errorpages = () => {
  return (
    <>
      <div className={styles.errorpages}>
        <p>
          {`"Apologies, our website requires a desktop device for optimal viewing and functionality. Thank you for understanding."`}
        </p>
      </div>
    </>
  );
};

export default Errorpages;
