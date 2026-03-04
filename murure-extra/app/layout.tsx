import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
    title: SITE.seoTitle,
    description: SITE.seoDesc,
    metadataBase: new URL(SITE.siteUrl),
    openGraph: {
        title: SITE.seoTitle,
        description: SITE.seoDesc,
        url: SITE.siteUrl,
        siteName: SITE.productName,
        images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.productName }],
        type: "website",
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        title: SITE.seoTitle,
        description: SITE.seoDesc,
        images: [SITE.ogImage],
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <head>
                {/* Schema.org – Organization */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: SITE.productName,
                            url: SITE.siteUrl,
                            contactPoint: [{
                                "@type": "ContactPoint",
                                telephone: "+55-11-93029-0209",
                                contactType: "customer service",
                                availableLanguage: "Portuguese",
                            }],
                        }),
                    }}
                />
            </head>
            <body className="font-body antialiased">{children}</body>
        </html>
    );
}
