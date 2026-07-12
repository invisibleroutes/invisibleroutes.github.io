import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
const DEFAULT_TITLE = "Invisible Routes";
const DEFAULT_DESCRIPTION =
    "Invisible Routes is a platform offering internships, learning resources, career guidance, and opportunities for aspiring software engineers.";

const DEFAULT_KEYWORDS =
    "Invisible Routes, Internship, Software Development, React, JavaScript, Python, Full Stack, Career, Students, Training, Learning, Programming";

const DEFAULT_IMAGE = "https://invisibleroutes.github.io/logo.png";

const BASE_URL = "https://invisibleroutes.github.io";

const SEO = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    image = DEFAULT_IMAGE,
}) => {
    const pageTitle = title.includes("IR |") ? title : `Invisible Routes | ${title}`;
    const { pathname } = useLocation();
    const url = `${BASE_URL}${pathname}`;

    return (
        <Helmet>
            <title>{pageTitle}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Invisible Routes" />
            <meta name="robots" content="index, follow" />

            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
