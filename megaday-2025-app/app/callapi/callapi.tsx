import type { Route } from "../+types/root";

export async function clientLoader({
    params,
}: Route.LoaderArgs) {
    return await fetch(`/api?surname=Syer`);
}

export default function CallApi({loaderData}: Route.ComponentProps) {
    const name = loaderData;
    return (
        <div>
            <h1>This data was loaded?: {name}</h1>
        </div>
    );
}

