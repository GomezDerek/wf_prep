import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        {/* will either be home.tsx or settings.tsx */}
        <Outlet />
    </div>
  )
}
