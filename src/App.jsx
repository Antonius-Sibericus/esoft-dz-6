import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import './assets/styles/styles.scss'
import Header from './components/header/Header'
import General from './pages/general/General'
import { createContext, useState } from 'react'
import ErrorPage from './pages/error/ErrorPage'
import Catalog from './pages/catalog/Catalog'
import BookPage from './pages/bookPage/BookPage'

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

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true)

    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
            <RouterProvider router={router} />
        </ThemeContext.Provider>
    )
}