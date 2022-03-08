import { getCurrentInstance } from 'vue';

export function useRouter() {
  const proxy = getCurrentInstance()!.proxy as any;
  return proxy.$router || null;
}
