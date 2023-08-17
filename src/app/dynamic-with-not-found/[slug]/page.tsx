import {notFound} from "next/navigation";

export default function DynamicPage({ params: { slug } }: { params: { slug: string }}) {
    if (slug === '404') {
        notFound()
    }

    return (
        <h2>
            Dynamic page with not found: {slug}
        </h2>
    )
}
