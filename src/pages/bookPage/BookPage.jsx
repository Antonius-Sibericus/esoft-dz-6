import { Link, useLocation, } from "react-router-dom"
import books from "../../assets/data/books"
import styles from "./bookPage.module.scss"
import { CatalogContext, ThemeContext } from "../../App"
import { useContext, useState } from "react"

export default function BookPage() {
    const location = useLocation()
    const currentBookID = location.pathname.split("/")[location.pathname.split("/").length - 1]
    const { booksArray, setBooksArray } = useContext(CatalogContext)
    const currentBook = booksArray[currentBookID - 1]
    const currentBookImage = `url('../src/assets/images/books/${currentBook.id}.png')`
    const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)
    const [isReading, setIsReading] = useState(false)

    return (
        <main className={styles.bookPage} style={isDarkTheme ? { "backgroundColor": "#202b21" } : { "backgroundColor": "#ffffff" }}>
            <div className={styles.container}>
                <h2 className={styles.bookPageHeading} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>{currentBook.title}</h2>
                <h3 className={styles.bookPageAuthor} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>{currentBook.author}</h3>
                <div className={styles.bookPageInfo}>
                    <div className={styles.bookPageImage} style={{ "backgroundImage": currentBookImage }}></div>
                    <div className={styles.bookPageDescription}>
                        <div className={styles.bookPageChar}>{currentBook.theme}</div>
                        <div className={styles.bookPageCat} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>Тематика</div>
                        <div className={styles.bookPageChar}>{currentBook.dateOfPublication}</div>
                        <div className={styles.bookPageCat} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>Дата публикации</div>
                        <div className={styles.bookPageChar}>{currentBook.pages}</div>
                        <div className={styles.bookPageCat} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>Количество страниц</div>
                        <div className={styles.bookPageChar}>{currentBook.rating}</div>
                        <div className={styles.bookPageCat} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>Рейтинг</div>
                        <div className={styles.bookPageChar}>{currentBook.price}</div>
                        <div className={styles.bookPageCat} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>Цена</div>
                        <button
                            className={styles.bookPageButton}
                            style={currentBook.favourite ? { "backgroundColor": "#ffb700" } : { "backgroundColor": "#bebebe" }}
                            onClick={() => setBooksArray(oldArray => oldArray.map(item => item.id === currentBook.id ? { ...item, favourite: !item.favourite } : { ...item }))}
                        >
                            {currentBook.favourite ? "В избранном" : "Добавить в избранное"}
                        </button>
                        <button
                            className={styles.bookPageRead}
                            style={isReading ? { "backgroundColor": "#73fc7e" } : { "backgroundColor": "#26732d" }}
                            onClick={() => setIsReading(prev => !prev)}
                        // style={isReading ? {} : {}}
                        >
                            {isReading ? "Прекратить чтение" : "Читать"}
                        </button>
                        <Link to="/books" className={styles.bookPageLink} style={isDarkTheme ? { "color": "#73fc7e" } : { "color": "#26732d" }}>
                            Назад в Каталог
                        </Link>
                    </div>
                </div>
                {isReading && <div className={styles.bookPageReading}>
                    <h3 className={styles.bookPageReadingTitle} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>Глава 1</h3>
                    <p className={styles.bookPageReadingText} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                    </p>
                    <p className={styles.bookPageReadingText} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                    </p>
                    <p className={styles.bookPageReadingText} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                    </p>
                    <p className={styles.bookPageReadingText} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                    </p>
                    <p className={styles.bookPageReadingText} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                    </p>
                    <p className={styles.bookPageReadingText} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                    </p>
                    <p className={styles.bookPageReadingText} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                    </p>
                    <p className={styles.bookPageReadingText} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                    </p>
                    <p className={styles.bookPageReadingText} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                    </p>
                    <p className={styles.bookPageReadingText} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam tempora cumque nihil et quos, esse aut facilis molestias, distinctio, ex quam obcaecati? Qui dolore adipisci earum fuga veniam necessitatibus.
                    </p>
                </div>}
            </div>
        </main>
    )
}