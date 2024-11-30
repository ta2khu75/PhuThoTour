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
import BlogListPage from "./components/pages/admin/blog";
import DocumentListPage from "./components/pages/admin/document";
import TopicListPage from "./components/pages/admin/topic";
import BlogFormPage from "./components/pages/admin/blog/form";
import RecruitmentFormPage from "./components/pages/admin/recruitment/form";
import FormOfWordListPage from "./components/pages/admin/formOfWork";
import FieldListPage from "./components/pages/admin/Field";
import WorkplaceListPage from "./components/pages/admin/workplace";
import RecruitmentListPage from "./components/pages/admin/recruitment";

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
            },
        ]
    },
    {
        element: <LoginPage />,
        path: "/login"
    }, {
        element: <AdminPage />,
        path: "/admin",
        children: [
            {
                path: "topic",
                element: <TopicListPage />,
            }, {
                path: "form-of-work",
                element: <FormOfWordListPage />,
            }, {
                path: "field",
                element: <FieldListPage />,
            }, {
                path: "workplace",
                element: <WorkplaceListPage />,
            },
            {
                path: "blog",
                element: <BlogListPage />,
            }, {
                path: "blog/create",
                element: <BlogFormPage />
            }, {
                path: "blog/edit/:id",
                element: <BlogFormPage />
            },
            {
                path: "document",
                element: <DocumentListPage />,
            }, {
                path: "recruitment",
                element: <RecruitmentListPage />,
            },
            {
                path: "recruitment/create",
                element: <RecruitmentFormPage />
            },
            {
                path: "recruitment/edit/:id",
                element: <RecruitmentFormPage />
            }
        ]
    }
]);
export default router;