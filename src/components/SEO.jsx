import { useEffect } from "react";

const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title 
      ? `${title} | One Tech Support` 
      : "One Tech Support | Professional IT Consulting & Custom App Development";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || "One Tech Support provides custom software engineering, app development, network architectures, and server database management.";
  }, [title, description]);

  return null;
};

export default SEO;
