/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent, u as unescapeHTML, F as Fragment } from '../astro/server_7b368806.mjs';
import 'clsx';
/* empty css                           */import { $ as $$Image } from './generic_f71e68de.mjs';

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/yuribraga/Codesign/astro/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Button;
  const { msg, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="my-button"${addAttribute(url, "onclick")} data-astro-cid-vnzlvqnm>${msg}</button>`;
}, "/Users/yuribraga/Codesign/astro/src/components/Button.astro", void 0);

const logo = new Proxy({"src":"./_astro/new_logo.58d7afbb.png","width":1609,"height":530,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="w-full max-w-screen-lg px-4"><div class="flex flex-row items-center justify-center md:justify-between py-5">${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "", "width": 200 })}<div class="hidden md:block">${renderComponent($$result, "Button", $$Button, { "msg": "Conhecer", "url": 'window.location = "https://www.melhorjogada.com"' })}</div></div></header>`;
}, "/Users/yuribraga/Codesign/astro/src/components/Header.astro", void 0);

const __variableDynamicImportRuntimeHelper = (glob, path) => {
    const v = glob[path];
    if (v) {
        return typeof v === 'function' ? v() : Promise.resolve(v);
    }
    return new Promise((_, reject) => {
        (typeof queueMicrotask === 'function' ? queueMicrotask : setTimeout)(reject.bind(null, new Error('Unknown variable dynamic import: ' + path)));
    });
};

const $$Astro$3 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  const { icon } = Astro2.props;
  const { default: innerHTML } = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../assets/images/double-arrow.svg": () => import('../double-arrow_7fd4dffa.mjs'),"../assets/images/facebook.svg": () => import('../facebook_fde9d73d.mjs'),"../assets/images/instagram.svg": () => import('../instagram_f907ca23.mjs')})), `../assets/images/${icon}.svg`);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(innerHTML)}` })}`;
}, "/Users/yuribraga/Codesign/astro/src/components/Icon.astro", void 0);

const gamblockImage = new Proxy({"src":"./_astro/gamblock.25f80841.png","width":627,"height":199,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const cyberpatrol = new Proxy({"src":"./_astro/cyberpatrol.71d1aca5.png","width":133,"height":43,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const more18 = new Proxy({"src":"./_astro/more18.15654011.webp","width":126,"height":144,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="w-full"><div class="w-full flex justify-center py-10 bg-gradient-to-b from-black"><section class="container w-full flex flex-col md:flex-row items-center gap-10"><div class="flex-1">${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "", "width": 150 })}</div><div class="flex-1 flex flex-col gap-2"><a href="https://melhorjogada.com/pages/terms-and-conditions">Termos e condições</a><a href="https://melhorjogada.com/pages/privacy-policy">Política de privacidade</a></div><div class="flex-1 flex justify-center items-center">${renderComponent($$result, "Image", $$Image, { "src": more18, "alt": "", "width": 75 })}</div><div class="flex-1 flex flex-col gap-2"><a href="http://www.gamblock.com/">${renderComponent($$result, "Image", $$Image, { "src": gamblockImage, "alt": "", "width": 100 })}</a><a href="http://www.cyberpatrol.com/">${renderComponent($$result, "Image", $$Image, { "src": cyberpatrol, "alt": "", "width": 100 })}</a></div><div class="flex-1 flex flex-row items-center gap-10"><a href="https://www.facebook.com/suamelhorjogada" class="text-facebook">${renderComponent($$result, "Icon", $$Icon, { "icon": "facebook" })}</a><a href="https://www.instagram.com/melhorjogada" class="text-instagram">${renderComponent($$result, "Icon", $$Icon, { "icon": "instagram" })}</a></div></section></div></footer>`;
}, "/Users/yuribraga/Codesign/astro/src/components/Footer.astro", void 0);

const blackFridayImage = new Proxy({"src":"./_astro/blackFriday.2d44664a.png","width":169,"height":176,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead()}<main class="w-full flex flex-col items-center justify-center gap-16 pb-16" data-astro-cid-ivdev4kk><div class="w-full flex flex-col justify-center items-center bg-gradient-to-t from-black pb-14 md:py-10" data-astro-cid-ivdev4kk><div class="container flex flex-col gap-10" data-astro-cid-ivdev4kk><section data-astro-cid-ivdev4kk><div class="flex flex-col md:flex-row items-center gap-5 md:gap-10" data-astro-cid-ivdev4kk><div class="flex items-center justify-center flex-1" data-astro-cid-ivdev4kk><div class="animate-bounce-hero max-w-[250px] md:max-w-[300px]" data-astro-cid-ivdev4kk>${renderComponent($$result, "Image", $$Image, { "src": blackFridayImage, "alt": "", "srcset": "", "width": 300, "data-astro-cid-ivdev4kk": true })}</div></div><div class="flex flex-col items-center md:items-start flex-1 text-center md:text-start gap-10" data-astro-cid-ivdev4kk><div class="translate-x-2 translate-y-2 bg-white" data-astro-cid-ivdev4kk><h1 class="text-4xl md:text-5xl m-0 bg-primary text-black p-3 font-bold tracking-normal -translate-x-2 -translate-y-2" data-astro-cid-ivdev4kk>
BLACK NOVEMBER!
</h1></div><h2 data-astro-cid-ivdev4kk>Corra, ainda dá tempo de participar da black no Melhor Jogada! Até o dia 30/11/2023 seus depósitos <span class="text-primary text-xl" data-astro-cid-ivdev4kk>dobram de valor</span> e são convertidos em bônus dentro do site.</h2>${renderComponent($$result, "Button", $$Button, { "msg": "Participe agora!", "url": 'window.location = "https://www.melhorjogada.com"', "data-astro-cid-ivdev4kk": true })}</div></div></section><section data-astro-cid-ivdev4kk><div class="flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl p-5 bgImage" data-astro-cid-ivdev4kk><div class="h-72 w-72 flex items-center justify-center backdrop-blur-2xl rounded-2xl" data-astro-cid-ivdev4kk><p class="text-2xl text-primary" data-astro-cid-ivdev4kk>IMAGE</p></div><div class="h-72 w-72 flex items-center justify-center backdrop-blur-2xl rounded-2xl" data-astro-cid-ivdev4kk><p class="text-2xl text-primary" data-astro-cid-ivdev4kk>IMAGE</p></div><div class="h-72 w-72 flex items-center justify-center backdrop-blur-2xl rounded-2xl" data-astro-cid-ivdev4kk><p class="text-2xl text-primary" data-astro-cid-ivdev4kk>IMAGE</p></div></div></section></div></div><div class="w-full flex justify-center" data-astro-cid-ivdev4kk><section class="container" data-astro-cid-ivdev4kk><h2 class="text-4xl text-center" data-astro-cid-ivdev4kk>Como ganhar seu bônus?</h2><div class="flex flex-col md:flex-row items-center mt-10" data-astro-cid-ivdev4kk><div class="step-by-step" data-astro-cid-ivdev4kk><div class="counter" data-astro-cid-ivdev4kk>1</div><div data-astro-cid-ivdev4kk><p class="title" data-astro-cid-ivdev4kk>Cadastre-se</p><p class="subtitle" data-astro-cid-ivdev4kk>Faça seu cadastro no portal clicando <span class="text-primary cursor-pointer" onclick="window.location = 'https://www.melhorjogada.com'" data-astro-cid-ivdev4kk>aqui</span></p></div></div><div class="next-step text-primary" data-astro-cid-ivdev4kk>${renderComponent($$result, "Icon", $$Icon, { "icon": "double-arrow", "data-astro-cid-ivdev4kk": true })}</div><div class="step-by-step" data-astro-cid-ivdev4kk><div class="counter" data-astro-cid-ivdev4kk>2</div><div data-astro-cid-ivdev4kk><p class="title" data-astro-cid-ivdev4kk>Acesse</p><p class="subtitle" data-astro-cid-ivdev4kk>No lado esquerdo da tela, acesse o link <span class="text-primary" data-astro-cid-ivdev4kk>“Indique e Ganhe”</span></p></div></div><div class="next-step text-primary" data-astro-cid-ivdev4kk>${renderComponent($$result, "Icon", $$Icon, { "icon": "double-arrow", "data-astro-cid-ivdev4kk": true })}</div><div class="step-by-step" data-astro-cid-ivdev4kk><div class="counter" data-astro-cid-ivdev4kk>3</div><div data-astro-cid-ivdev4kk><p class="title" data-astro-cid-ivdev4kk>Envie o código</p><p class="subtitle" data-astro-cid-ivdev4kk>Na página <span class="text-primary" data-astro-cid-ivdev4kk>“Sistema de Afiliados”</span>, copie o código do convite e envie para o seu amigo.</p></div></div></div></section></div><div class="w-full flex justify-center" data-astro-cid-ivdev4kk><section class="container" data-astro-cid-ivdev4kk><div class="flex flex-col md:flex-row items-center mt-10 border-2 border-gray-500 rounded-lg p-4 text-gray-500" data-astro-cid-ivdev4kk><p class="text-xs" data-astro-cid-ivdev4kk>O Melhor Jogada é um site de apostas, desenvolvido em plataforma com total confiabilidade de dados, oferecendo atendimento aos usuários 24h por dia. Prezamos pela melhor experiência do usuário em todas as transações feitas dentro do portal, oferecendo jogos de apostas esportivas de diversas modalidades (pré-jogo em tempo real) e jogos diversos de cassino online. Apoiamos o jogo consciente, positivo e responsável, oferecendo uma experiência segura em apostas de entretenimento e lazer. Não nos responsabilizamos por má-fé utilizando os serviços disponíveis neste portal, estando o usuário ciente das diretrizes e normas de utilização do site (regras disponíveis no primeiro acesso e nos termos de aceite da conta do usuário)</p></div></section></div></main>`;
}, "/Users/yuribraga/Codesign/astro/src/components/Main.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bem-vindo ao Melhor Jogada.", "description": "Aqui \xE9 pura divers\xE3o!" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${renderComponent($$result2, "Main", $$Main, {})}${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/Users/yuribraga/Codesign/astro/src/pages/index.astro", void 0);

const $$file = "/Users/yuribraga/Codesign/astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
