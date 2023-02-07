import { ThemeContext, NewsDataContext } from "./Contexts";

function ContextService({ children, }) {
    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            <NewsDataContext.Provider value={{ newsData, setNewsData }}>
                {children}
            </NewsDataContext.Provider>
        </ThemeContext.Provider>
    )
}

export default ContextService;