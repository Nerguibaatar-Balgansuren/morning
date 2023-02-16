import { createContext } from "react";

const DataContext = createContext(null);
const CategoryContext = createContext(null);
const CurrentUser = createContext(null);

export { DataContext, CategoryContext, CurrentUser };
