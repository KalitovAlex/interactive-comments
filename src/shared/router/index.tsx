import { BrowserRouter, Route, Routes } from "react-router"
import { AuthPage } from "../../pages/AuthPage"
import { DashboardPage } from "../../pages/DashboardPage"
import { AUTH } from "./routes"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DashboardPage />} />
        <Route path={AUTH} element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  )
}
