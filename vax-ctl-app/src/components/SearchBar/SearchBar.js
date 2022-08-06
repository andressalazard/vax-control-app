import styles from './SearchBar.module.css';

const SearchBar = ({...rest}) => {
    return(<div className={styles.container}>
        <span className={"material-icons"}>search
</span>
        <input className={styles.input} {...rest}/>
    </div>)
}

export default SearchBar;