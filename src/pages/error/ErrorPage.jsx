import styles from "./errorpage.module.scss"

export default function ErrorPage() {
    return (
        <div id="error-page">
            <h1>Ошибка!</h1>
            <p>
                Что-то пошло не так.
            </p>
            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    )
}