export function loader() {
    throw new Response("Error 404. Page not found.", { status: 404});
}