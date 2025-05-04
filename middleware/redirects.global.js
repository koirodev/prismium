export default defineNuxtRouteMiddleware(({ path, query, hash }) => {
  if (path === '/') return;

  if (/^\/{2,}$/.test(path)) {
    return navigateTo({ path: '/', query, hash }, { redirectCode: 301 });
  }

  let normalizedPath = path.replace(/\/{2,}/g, '/');

  normalizedPath = normalizedPath.replace(
    /\/?(index\.(php|html|htm|asp|aspx))$/i,
    ''
  );

  if (normalizedPath.endsWith('.html')) {
    return navigateTo(
      { path: normalizedPath.slice(0, -5), query, hash },
      { redirectCode: 301 }
    );
  }

  if (normalizedPath !== path) {
    return navigateTo(
      { path: normalizedPath || '/', query, hash },
      { redirectCode: 301 }
    );
  }

  if (normalizedPath !== '/' && !normalizedPath.endsWith('/')) {
    return navigateTo(
      { path: normalizedPath + '/', query, hash },
      { redirectCode: 301 }
    );
  }
});
