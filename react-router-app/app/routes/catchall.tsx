// `loader` is a server-side export, not allowed in SPA mode (ssr: false).
// Use `clientLoader` instead for client-side-only builds like GitHub Pages.
// export function loader() {
//     throw new Response("Error 404. Page not found.", { status: 404});
// }
export function clientLoader() {
    throw new Response("Error 404. Page not found.", { status: 404});
}