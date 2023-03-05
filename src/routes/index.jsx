import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  {
    path: "",
    element: lazy(() => import("../pages/HomeTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/HomeTemplate/HomePage")),
      },
      {
        path: "login",
        element: lazy(() => import("../pages/HomeTemplate/LoginPage/")),
      },
      {
        path: "register",
        element: lazy(() => import("../pages/HomeTemplate/RegisterPage")),
      },
      {
        path: "profile",
        element: lazy(() => import("../pages/HomeTemplate/ProfilePage")),
      },
      {
        path: "detail-course",
        element: lazy(() => import("../pages/HomeTemplate/DetailCoursePage")),
      },
      {
        path: "list-course",
        element: lazy(() => import("../pages/HomeTemplate/ListCoursePage")),
      },
      {
        path: "find-course",
        element: lazy(() => import("../pages/HomeTemplate/FindCoursePage"))
      },
    ],
  },
  {
    path: "admin",
    element: lazy(() => import("../pages/AdminTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/AdminTemplate/DashboardPage")),
      },
      {
        path: "manage-user",
        element: lazy(() => import("../pages/AdminTemplate/ManageUserPage")),
      },
      {
        path: "manage-course",
        element: lazy(() =>
          import("../pages/AdminTemplate/ManageCoursePage")
        ),
      },
    ],
  },
  {
    path: "auth",
    element: lazy(() => import("../pages/AdminTemplate/AuthPage")),
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export default renderRoutes;
