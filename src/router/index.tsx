import { Authenticated } from "@refinedev/core";

import {
  AuthPage,
  ErrorComponent,
  ThemedLayoutV2,
  ThemedTitleV2,
} from "@refinedev/mui";

import {
  CatchAllNavigate,
  NavigateToResource,
} from "@refinedev/react-router-v6";

import { Outlet, Route, Routes } from "react-router-dom";
import { AppIcon } from "../components/app-icon";
import { Header } from "../components";

import {
  OperatorCreate,
  OperatorEdit,
  OperatorList,
  BlogPostShow,
} from "../pages/operadores";

export function Router() {
  return (
    <Routes>
      <Route
        element={
          <Authenticated fallback={<CatchAllNavigate to="/login" />}>
            <ThemedLayoutV2
              Header={() => <Header sticky />}
              Title={({ collapsed }) => (
                <ThemedTitleV2
                  collapsed={collapsed}
                  text="O Legado - Dashboard"
                  icon={<AppIcon />}
                />
              )}
            >
              <Outlet />
            </ThemedLayoutV2>
          </Authenticated>
        }
      >
        <Route index element={<NavigateToResource resource="operadores" />} />
        <Route path="/operadores">
          <Route index element={<OperatorList />} />
          <Route path="create" element={<OperatorCreate />} />
          <Route path="edit/:id" element={<OperatorEdit />} />
          <Route path="show/:id" element={<BlogPostShow />} />
        </Route>
        {/* <Route path="/categories">
          <Route index element={<CategoryList />} />
          <Route path="create" element={<CategoryCreate />} />
          <Route path="edit/:id" element={<CategoryEdit />} />
          <Route path="show/:id" element={<CategoryShow />} />
        </Route> */}
        <Route path="*" element={<ErrorComponent />} />
      </Route>
      <Route
        element={
          <Authenticated fallback={<Outlet />}>
            <NavigateToResource />
          </Authenticated>
        }
      >
        <Route
          path="/login"
          element={
            <AuthPage
              type="login"
              title={
                <ThemedTitleV2
                  collapsed={false}
                  text="O Legado - Dashboard"
                  icon={<AppIcon />}
                />
              }
            />
          }
        />
        <Route path="/register" element={<AuthPage type="register" />} />
        <Route
          path="/forgot-password"
          element={<AuthPage type="forgotPassword" />}
        />
      </Route>
    </Routes>
  );
}
