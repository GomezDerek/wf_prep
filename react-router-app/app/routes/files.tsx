// provides type safety/inference
import type { Route } from "./+types/files";

// provides "loaderData" to the component
export function loader({params}: Route.LoaderArgs) {
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
