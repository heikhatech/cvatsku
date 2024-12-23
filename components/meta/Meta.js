import Head from "next/head";

export default function Meta({ title, keywords, description }) {
    const homepage = "https://cvatsku.vercel.app/";
    const logo = "https://cvatsku.vercel.app/assets/logoats.png";
    const fevicon = "https://cvatsku.vercel.app/assets/faviconats.ico";

    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+628 1111111111",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "cvatsku",
                "foundingDate": "2024",
                "foundingLocation": "ID",
                "email": "xyz@gmail.com",
                "telephone": "+628 111111111111",
                "areaServed": "ID",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "Indonesian",
                "memberOf": "cvatsku",
                "owns": "cvatsku",
                "publishingPrinciples": ${homepage},
                "slogan": "Buat CV yang Siap Lolos Sistem ATS dan Raih Pekerjaan Impianmu"
            }`
        }
    }


    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href={fevicon} />
            <title>{title}</title>
            <meta type="copyright" content="cvatsku, Kode ini telah dimodifikasi dari karya asli Saurav Hathi" />
            <meta type="author" content="cvatsku, Kode ini telah dimodifikasi dari karya asli Saurav Hathi" />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homepage} />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={description} />
            <meta property="og:image" content={logo} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={homepage} />
            <meta property="twitter:title" content={title} />
            <meta
                property="twitter:description"
                content={description} />
            <meta property="twitter:image" content={logo} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={isiteJsonLd()}
                key="isiteJsonLd"
            />
        </Head>
    );
}
