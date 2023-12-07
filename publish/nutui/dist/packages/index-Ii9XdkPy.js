import { getCurrentInstance } from "vue";
function useRouter() {
  const proxy = getCurrentInstance().proxy;
  return proxy.$router || null;
}
export {
  useRouter as u
};
