"use client";

import { useRouter } from "next/navigation";
import { Avatar, Dropdown, Label } from "@heroui/react";


const privateLinks = [ 
    { label: "My Bookings", href: "/my-bookings" },
    { label: "Add Facility", href: "/add-facility" },
    { label: "Manage My Facilities", href: "/manage-facilities" },
];

function getInitials(name = "") {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
  return initials || "U";
}

export default function ProfileDropdown({ user, onLogout }) {
  const router = useRouter();

  const handleAction = (key) => {
    if (key === "logout") {
      onLogout();
      return;
    }
    
    router.push(String(key));
  };

  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image src={user.image || undefined} alt={user.name} />
          <Avatar.Fallback>{getInitials(user.name)}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>

      <Dropdown.Popover>
        <Dropdown.Menu onAction={handleAction}>
          {privateLinks.map((link) => (
            <Dropdown.Item
              key={link.href}
              id={link.href}
              textValue={link.label}
            >
              <Label>{link.label}</Label>
            </Dropdown.Item>
          ))}
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <Label>Logout</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}