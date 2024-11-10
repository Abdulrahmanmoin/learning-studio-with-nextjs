'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
      <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        <Link
          href={"/"}
        >
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>

        <div className="text-center">
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm text-start">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/courses">Photography Fundamentals</HoveredLink>
              <HoveredLink href="/courses">Basic of Digital Art</HoveredLink>
              <HoveredLink href="/courses">Advance Public Speaking</HoveredLink>
              <HoveredLink href="/courses">Creative Writing</HoveredLink>
            </div>
          </MenuItem>
        </div>

        <div className="text-center">
        <Link
          href={"/contact"}
        >
          <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
        </div>

      </Menu>
    </div >
  )
}

export default Navbar
