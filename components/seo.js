import NextHead from 'next/head';
import { Component } from 'react';

// const CreateMarkup = text => ({ __html: text })

export default class SeoHead extends Component {
    render() {
        const {
            title = 'Meor Danish Farhan - Dxnxsh',
            description = 'Dxnxsh',
            image = 'https://dxnxsh.github.io/nextjs-web/static/ogimage.png',
            children,
            canonical,
            url = 'https://dxnxsh.github.io/nextjs-web/',
        } = this.props;
        const properCanonical = canonical || url;
        return (
            <NextHead>
                <title>{title}</title>

                <meta name="description" content={description} />

                {/* Open Graph */}
                <link itemProp="url" href="https://dxnxsh.github.io/nextjs-web" />
                <meta itemProp="name" content={title} />
                <meta itemProp="description" content={description} />
                <meta itemProp="image" content="/static/ogimage.png" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={image} />
                <meta property="og:image:height" content="652" />
                <meta property="og:image:width" content="652" />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content="Dxnxsh" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@DxnxshF" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:creator" content="@DxnxshF" />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:url" content={url} />
                <meta name="twitter:image:src" content="https://dxnxsh.github.io/nextjs-web/static/ogimage.png" />

                <link rel="canonical" href={`https://dxnxsh.github.io/nextjs-web${properCanonical}`} />

                {children}

                <link rel="shortcut icon" href="/static/ogimage.png" />
                <link rel="icon" href="/static/ogimage.png" />
            </NextHead>
        );
    }
}