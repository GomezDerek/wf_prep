// provides type safety/inference
import type { Route } from "./+types/team";

// `loader` is server-side only, not allowed in SPA mode (ssr: false).
// Use `clientLoader` instead for client-side-only builds like GitHub Pages.
// export async function loader({params}: Route.LoaderArgs) {
//     const team: {name: string} = await new Promise((resolve) => resolve({name: params.teamId}));
//     return { name: team.name };
// }
export async function clientLoader({params}: Route.ClientLoaderArgs) {
    const team: {name: string} = await new Promise((resolve) => resolve({name: params.teamId}));
    return { name: team.name };
}

// renders after the loader is done
export default function Component({
    loaderData,
}: Route.ComponentProps) {
    return <h1>team {loaderData.name}</h1>
}