import { Link } from "react-router-dom"
import styles from "./general.module.scss"
import { useContext } from "react"
import { ThemeContext } from "../../App"

export default function General() {
    const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)

    return (
        <main className={styles.general} style={isDarkTheme ? { "backgroundColor": "#202b21" } : { "backgroundColor": "#ffffff" }}>
            <div className={styles.container}>
                <h1 className={styles.generalHeading} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                    Добро пожаловать на BookShelf!
                </h1>
                <div className={styles.generalBlock}>
                    <p className={styles.generalText} style={isDarkTheme ? { "color": "#79a07c" } : { "color": "#202b21" }}>
                        Пополнение на книжной полке уже ждёт вас!
                    </p>
                    <Link to="/books" className={styles.generalLink} style={isDarkTheme ? {"color": "#73fc7e"} : {"color": "#26732d"}}>Перейти в каталог</Link>
                </div>
            </div>
        </main>
    )
}