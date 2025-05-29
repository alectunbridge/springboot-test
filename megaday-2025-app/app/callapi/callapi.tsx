import type { Route } from "../+types/root";
import {Env} from "~/Env";

export async function clientLoader({
    params,
}: Route.LoaderArgs) {
    return await fetch(`${Env.API_BASE_URL}?surname=Syer`);
}

export default function CallApi({loaderData}: Route.ComponentProps) {
    const name = loaderData;
    return (
        <div>
            <h1>This data was loaded?: {name}</h1>
        </div>
    );
}

