import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
    return (
        <div className="bg-slate-300 dark:bg-slate-800 dark:text-white">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
