"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const NavbarRoutes = () => {
    const pathname = usePathname()

    const isTeacherPage = pathname?.startsWith("/teacher")
    const isPlayerPage = pathname?.includes("/chapter")

    return(
        <div className="flex gap-x-2 ml-auto">
            <UserButton
                afterSwitchSessionUrl="/"
            />
        </div>
    )
}