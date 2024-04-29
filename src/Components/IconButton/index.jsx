import styles from './iconButton.modules.css'

export const IconButton = ({Children, ...rest}) => {
    return(
        <button {...rest} className={styles.btn}>
            {Children}
        </button>
    )
}