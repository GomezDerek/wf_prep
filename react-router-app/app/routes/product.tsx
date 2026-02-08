// provides type safety/inference
import type { Route } from "./+types/product";

// provides 'loaderData' to the component
export function loader({params}: Route.LoaderArgs) {
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