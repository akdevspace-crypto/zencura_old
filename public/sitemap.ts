import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://zencura.com';

    const pages = [
        '',
        '/about',
        '/founder',
        '/institutions',
        '/programs',
        '/research',
        '/products',
        '/impact',
        '/contact',
        '/join',
    ];

    return pages.map((page) => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
    }));
}
