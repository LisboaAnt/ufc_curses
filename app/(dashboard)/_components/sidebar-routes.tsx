"use client"

import { Layout, Compass, List, BarChart } from "lucide-react"
import { SidebarItem } from "./sidebar-item"
import { usePathname } from "next/navigation"

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Pesquise",
        href: "/search",
    },
    {
        icon: List,
        label: "Modo Professor",
        href: "/teacher/courses",
    },
]

const teacherRoutes = [
    {
        icon: List,
        label:"Cursos",
        href:"/teacher/courses",
    },
    {
        icon: BarChart,
        label:"Analytics",
        href:"/teacher/analytics",
    },
    {
        icon: BarChart,
        label:"Criar",
        href:"/teacher/create",
    },
    {
        icon: List,
        label: "Modo Aluno",
        href: "/",
    },
]

export const SidebarRoutes = () => {
    const pathname = usePathname()
    const isTeachPage = pathname?.includes("/teacher")

    const routes = isTeachPage ? teacherRoutes : guestRoutes;
    
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) =>(
                <SidebarItem
                key = {route.href}
                icon = {route.icon}
                label = {route.label}
                href = {route.href}
                />
            ))}
        </div>
    )
}