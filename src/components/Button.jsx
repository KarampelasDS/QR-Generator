import styles from './Button.module.css'

export default function Button(props){

    return(
        <button className={styles.SaveButton} onClick={props.click}>{props.children}</button>
    )

}