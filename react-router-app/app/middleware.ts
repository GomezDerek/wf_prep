async function loggingMiddleware({ request, context}, next,) {
    console.log(
        `${new Date().toISOString()} ${request.method} ${request.url}`
    );

    const start = performance.now();
    const response = await next();
    const duration = performance.now() - start;
    console.log(
        `${new Date().toISOString()} Response ${response.status} ${duration} ms`
    );
    return response;
}

export const middleWare = [loggingMiddleware];

// move this middleware module into root.tsx