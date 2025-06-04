import { useContext } from "react"
import styles from "./bookItem.module.scss"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../App"
import { CatalogContext } from "../../App"

export default function BookItem(props) {
    const { bookInfo } = props
    const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)
    const { booksArray, setBooksArray } = useContext(CatalogContext)

    // const thisBook = booksArray.find(book => book.id === bookInfo.id)

    return (
        <div className={styles.bookBlock} style={isDarkTheme ? { "borderColor": "#79a07c" } : { "borderColor": "#2c2c2c" }}>
            <div className={styles.bookTitle}>{bookInfo.title}</div>
            <div className={styles.bookAuthor}>{bookInfo.author}</div>
            <Link
                className={styles.bookImage}
                style={{ "backgroundImage": `url('src/assets/images/books/${bookInfo.id}.png')` }}
                to={`/book/${bookInfo.id}`}
                ></Link>
            <div className={styles.bookDesc}>
                <div className={styles.bookPrice}>{bookInfo.price} руб.</div>
                <div className={styles.bookRating}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                    </svg>
                    {bookInfo.rating}
                </div>
            </div>
            <div className={styles.bookTheme}>{bookInfo.theme}</div>
            <button
                className={styles.bookButton + " " + styles.bookButtonFav}
                style={bookInfo.favourite ? { "backgroundColor": "#ffb700" } : { "backgroundColor": "#bebebe" }}
                onClick={() => setBooksArray(oldArray => oldArray.map(item => item.id === bookInfo.id ? {...item, favourite: !item.favourite} : {...item}))}
            >
                {bookInfo.favourite ? "В избранном" : "Добавить в избранное"}
            </button>
            <button className={styles.bookButton + " " + styles.bookButtonMore}>Подробнее</button>
        </div>
    )
}