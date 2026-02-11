// provides type safety/inference
import type { Route } from "./+types/product";

// `loader` is server-side only, not allowed in SPA mode (ssr: false).
// Use `clientLoader` instead for client-side-only builds like GitHub Pages.
// export function loader({params}: Route.LoaderArgs) {
//     return params;
// }
export function clientLoader({params}: Route.ClientLoaderArgs) {
    return params;
}

// renders after the loader is done
export default function Component({
    loaderData,
}: Route.ComponentProps) {
    return (
        <ul>
            <li>Category: {loaderData.categoryId}</li>
            <li>Product Id: {loaderData.productId}</li>
        </ul>
    )
}