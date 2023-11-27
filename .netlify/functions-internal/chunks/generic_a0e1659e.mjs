export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/generic_f71e68de.mjs').then(n => n.g);

export { page };
