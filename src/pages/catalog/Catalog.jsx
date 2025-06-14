import { useContext } from "react"
import styles from "./catalog.module.scss"
import { ThemeContext } from "../../App"
import { CatalogContext } from "../../App"
import books from "../../assets/data/books"
import { Link, NavLink } from "react-router-dom"
import BookItem from "../../components/bookItem/BookComponent"

export default function Catalog() {
    const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)
    const { booksArray, setBooksArray } = useContext(CatalogContext)

    return (
        <main className={styles.catalog} style={isDarkTheme ? { "backgroundColor": "#202b21" } : { "backgroundColor": "#ffffff" }}>
            <div className={styles.container}>
                <h2 className={styles.catalogHeading} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                    Список книг
                </h2>
                <div className={styles.catalogGrid}>
                    {booksArray.map((book) => (
                        <BookItem key={book.id} bookInfo={book} />
                    ))}
                </div>
                <div className={styles.catalogLink}>
                    <Link to="/" style={isDarkTheme ? { "color": "#73fc7e" } : { "color": "#26732d" }}>Вернуться на главную</Link>
                </div>
            </div>
        </main>
    )
}