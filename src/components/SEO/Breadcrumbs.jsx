import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import JsonLd from "./JsonLd";
import { getBreadcrumbsSchema } from "../../seo/schemas";

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  const breadcrumbsSchema = getBreadcrumbsSchema(items);

  return (
    <>
      <nav aria-label="Breadcrumb" className="py-4 text-xs font-medium text-slate-500">
        <ol className="flex items-center flex-wrap gap-2">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-2">
                {idx === 0 ? (
                  <Link
                    to={item.url}
                    className="flex items-center gap-1 hover:text-brand-blue transition-colors text-slate-400"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>{item.name}</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-slate-800 font-semibold" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.url}
                    className="hover:text-brand-blue transition-colors text-slate-500"
                  >
                    {item.name}
                  </Link>
                )}

                {!isLast && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbsSchema} />
    </>
  );
}
