import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/pages/home";
import BlogPage from "./components/pages/blog";
import DocumentPage from "./components/pages/document";
import RecruitmentPage from "./components/pages/recruitment";
import BlogDetailsPage from "./components/pages/blog/details";
import RecruitmentDetailsPage from "./components/pages/recruitment/details";
import LoginPage from "./components/pages/login";
import AdminPage from "./components/pages/admin";

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
            }, {
                element: <BlogDetailsPage />,
                path: "blog/details"
            }, {
                element: <RecruitmentDetailsPage />,
                path: "recruitment/details"
            }, {
                element: <LoginPage />,
                path: "login"
            }, {
                element: <AdminPage />,
                path: "admin",
                children: [
                    {
                        path:"blog"
                    }
                ]
            }
        ]
    }
]);
export default router;