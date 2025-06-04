import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import './assets/styles/styles.scss'
import Header from './components/header/Header'
import General from './pages/general/General'
import { createContext, useEffect, useState } from 'react'
import ErrorPage from './pages/error/ErrorPage'
import Catalog from './pages/catalog/Catalog'
import BookPage from './pages/bookPage/BookPage'
import books from './assets/data/books'

const lsTheme = JSON.parse(localStorage.getItem("darkTheme"))
const lsArray = JSON.parse(localStorage.getItem("booksArray"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <General />
                    },
                    {
                        path: "/books",
                        element: <Catalog />,
                    },
                    {
                        path: "/book/:bookId",
                        element: <BookPage />
                    }
                ]
            }
        ]
    },
])

export const ThemeContext = createContext()
export const CatalogContext = createContext()

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(lsTheme !== undefined ? lsTheme : true)
    const [booksArray, setBooksArray] = useState(lsArray ? lsArray : books)

    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(isDarkTheme))
    }, [isDarkTheme])
    
    useEffect(() => {
        localStorage.setItem("booksArray", JSON.stringify(booksArray))
    }, [booksArray])

    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
            <CatalogContext.Provider value={{ booksArray, setBooksArray }}>
                <RouterProvider router={router} />
            </CatalogContext.Provider>
        </ThemeContext.Provider>
    )
}