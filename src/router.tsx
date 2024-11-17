import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/pages/home";
import BlogPage from "./components/pages/blog";
import DocumentPage from "./components/pages/document";
import RecruitmentPage from "./components/pages/recruitment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <HomePage />,
                index: true
            }, {
                element: <BlogPage />,
                path: "blog"
            }, {
                element: <DocumentPage />,
                path: "document"
            }, {
                element: <RecruitmentPage />,
                path: "recruitment"
            }
        ]
    },
]);
export default router;