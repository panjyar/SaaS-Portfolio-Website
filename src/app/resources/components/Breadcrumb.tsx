import { usePathname } from "next/navigation";
import { SUBMENUS } from "@/utils/nav-data";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname();

  // Split pathname into parts → [ "resources", "blog" ]
  const parts = pathname.split("/").filter(Boolean);

  // Build breadcrumb items
  const crumbs = parts.map((part, index) => {
    const href = "/" + parts.slice(0, index + 1).join("/");

    // Try to find matching label from SUBMENUS
    let label = part;
    Object.values(SUBMENUS).forEach((submenu) => {
      submenu.forEach((item) => {
        if (item.href === href) {
          label = item.label;
        }
      });
    });

    return { label, href };
  });

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      {crumbs.map((crumb, idx) => (
        <span key={crumb.href} className="flex items-center gap-2">
          <span className="text-gray-500">/</span>
          {idx === crumbs.length - 1 ? (
            <span className="text-white font-semibold">{crumb.label}</span>
          ) : (
            <a href={crumb.href} className="hover:underline">
              {crumb.label}
            </a>
          )}
        </span>
      ))}
    </nav>
  );
}
