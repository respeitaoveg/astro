import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro/server_7b368806.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"./_astro/index.5aaad1f3.css"},{"type":"external","src":"./_astro/index.b8e95c50.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"}],"styles":[{"type":"external","src":"./_astro/index.5aaad1f3.css"},{"type":"inline","content":"body{margin:0;width:100%;height:100vh;background:radial-gradient(#914ac5,#482065)}.wrapper[data-astro-cid-erupixux]{width:200px;height:60px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.circle[data-astro-cid-erupixux]{width:20px;height:20px;position:absolute;border-radius:50%;background-color:#fff;left:15%;transform-origin:50%;animation:circle .5s alternate infinite ease}@keyframes circle{0%{top:60px;height:5px;border-radius:50px 50px 25px 25px;transform:scaleX(1.7)}40%{height:20px;border-radius:50%;transform:scaleX(1)}to{top:0%}}.circle[data-astro-cid-erupixux]:nth-child(2){left:45%;animation-delay:.2s}.circle[data-astro-cid-erupixux]:nth-child(3){left:auto;right:15%;animation-delay:.3s}.shadow[data-astro-cid-erupixux]{width:20px;height:4px;border-radius:50%;background-color:#00000080;position:absolute;top:62px;transform-origin:50%;z-index:-1;left:15%;filter:blur(1px);animation:shadow .5s alternate infinite ease}@keyframes shadow{0%{transform:scaleX(1.5)}40%{transform:scaleX(1);opacity:.7}to{transform:scaleX(.2);opacity:.4}}.shadow[data-astro-cid-erupixux]:nth-child(4){left:45%;animation-delay:.2s}.shadow[data-astro-cid-erupixux]:nth-child(5){left:auto;right:15%;animation-delay:.3s}header[data-astro-cid-erupixux]{padding:50px}header[data-astro-cid-erupixux] img[data-astro-cid-erupixux]{display:block;margin:0 auto}.redirect-body[data-astro-cid-erupixux]{width:100%;height:100vh}\n"}],"routeData":{"route":"/loading","type":"page","pattern":"^\\/loading\\/?$","segments":[[{"content":"loading","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/loading.astro","pathname":"/loading","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"assetsPrefix":".","componentMetadata":[["/Users/yuribraga/Codesign/astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_8b81eeae.mjs","/src/pages/loading.astro":"chunks/pages/loading_de5c102f.mjs","\u0000@astrojs-manifest":"manifest_2c5d79b5.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_a0e1659e.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_a05dfffc.mjs","\u0000@astro-page:src/pages/loading@_@astro":"chunks/loading_7678d149.mjs","/Users/yuribraga/Codesign/astro/src/assets/images/double-arrow.svg?raw":"chunks/double-arrow_7fd4dffa.mjs","/Users/yuribraga/Codesign/astro/src/assets/images/facebook.svg?raw":"chunks/facebook_fde9d73d.mjs","/Users/yuribraga/Codesign/astro/src/assets/images/instagram.svg?raw":"chunks/instagram_f907ca23.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.4ed993c7.js","astro:scripts/before-hydration.js":""},"assets":["./_astro/cyberpatrol.71d1aca5.png","./_astro/more18.15654011.webp","./_astro/new_logo.58d7afbb.png","./_astro/gamblock.25f80841.png","./_astro/blackFriday.2d44664a.png","./_astro/casinoGen2.bef7f614.png","./_astro/index.5aaad1f3.css","./_astro/index.b8e95c50.css","./favicon.png"]});

export { manifest };
