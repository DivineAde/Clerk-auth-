"use client"

import { usePathname } from "next/navigation";
import { routes } from "@/routes";

type Props = {}

const Route = (props: Props) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
        <ul className="flex flex-col flex-wrap gap-5">
          {routes.map((route, idx) => {
            const { Icon, href, title } = route;
            return (
              <li key={idx}>
                <a
                  href={href}
                  className={`flex items-center gap-6 hover:text-neutral-400 transition-all px-8 py-2 rounded-md ${
                    pathname === href ? "bg-[#FEAF00]" : ""
                  }`}
                >
                  <Icon />
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
  )
}

export default Route