import Row from './row.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Row);

export type { RowProps } from './row.vue';

export type RowInstance = ComponentPublicInstance & InstanceType<typeof Row>;

export { Row, Row as default };
