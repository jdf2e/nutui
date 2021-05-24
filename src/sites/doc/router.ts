const modulesPage = import.meta.globEager('/src/packages/**/doc.md');
const routes:any[] = [];
for(const path in modulesPage) {
  let name = (/packages\/(.*)\/doc.md/.exec(path) as any[])[1];
  routes.push({
    path: '/' + name,
    component: modulesPage[path],
    name
  });
}

export default routes