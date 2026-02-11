// provides type safety/inference
import type { Route } from "./+types/files";

// `loader` is server-side only, not allowed in SPA mode (ssr: false).
// Use `clientLoader` instead for client-side-only builds like GitHub Pages.
// export function loader({params}: Route.LoaderArgs) {
//     const { "*": splat } = params;
//     return splat;
// }
export function clientLoader({params}: Route.ClientLoaderArgs) {
    // params["*"] will contain the remaining URL after files/
    // You can destructure the *, you just have to assign it a new name. A common name is splat:
    const { "*": splat } = params;
    return splat;
}

// renders after the loader is done
export default function Files({loaderData}: Route.ComponentProps) {
  return (
    <>
        <h1>Files</h1>
        <p>{loaderData}</p>
    </>
  )
}
