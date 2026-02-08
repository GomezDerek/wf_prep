// provides type safety/inference
import type { Route } from "./+types/team";

// provides 'loaderData' to the component
export async function loader({params}: Route.LoaderArgs) {
    // let team = await fetchTeam(params.teamId);
    const team: {name: string} = await new Promise((resolve) => resolve({name: params.teamId}));
    return { name: team.name };
}

// renders after the loader is done
export default function Component({
    loaderData,
}: Route.ComponentProps) {
    return <h1>team {loaderData.name}</h1>
}