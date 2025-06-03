import { Link, useParams } from "react-router-dom"
import books from "../../assets/data/books"
import styles from "./bookPage.module.scss"

export default function BookPage() {
    const { id } = useParams()
    return (
        <main>
            <div>
                <h2>{books[id].title}</h2>
                <Link to="/books">Каталог</Link>
            </div>
        </main>
    )
}