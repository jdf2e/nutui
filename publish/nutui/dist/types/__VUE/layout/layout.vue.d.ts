import type { WithInstall } from '../../utils';
declare const _default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutLayout: typeof _default;
    }
}
