import styles from './floatLabel.module.css';

export default function floatLabel({title, content}) {
    return (
        <>
          <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.content}>{content}</p>
          </div>
        </>
    )
}