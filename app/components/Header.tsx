import { useEffect, useState } from "react"
import { Link } from "react-router"


export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (savedTheme === null && preferDark)

    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
    document.documentElement.classList.toggle("dark", newTheme)
  }


    return (
        <>
        <header className="navbar flex justify-between py-2 px-4 bg-header">
            <div>
                <h1 className="text-xl text-primary">Todos</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-primary px-3 py-1 rounded hover-accent transition-all">Home</Link>
              <Link to="/todo" className="text-primary px-3 py-1 rounded hover-accent transition-all">Todos</Link>
              <button className="cursor-pointer px-3 py-1 rounded hover-accent-button hover:scale-110 transition-all" onClick={toggleTheme}>
                { isDark ? "☀️" : "🌙"}
              </button>
            </nav>
        </header>
        </>
    )
}   