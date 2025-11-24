import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Index from "./pages/Index";

const router = createBrowserRouter([{ path: "/", Component: Index }]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
