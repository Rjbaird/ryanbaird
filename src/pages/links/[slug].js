import { getLinkUrl } from "../db";

export async function get({ params, redirect }) {
    const { id } = params;
    const link = await getLinkUrl(id);

    if (!link) {
        return new Response(null, {
            status: 404,
            statusText: "Not found",
        });
    }

    return redirect(link, 307);
}
