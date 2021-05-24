const modulesPage = import.meta.glob('/src/packages/**/demo.tsx')
const routes: any[] = []
for (const path in modulesPage) {
  let name = (/packages\/(.*)\/demo.tsx/.exec(path) as any[])[1]
  routes.push({
    path: '/' + name.toLowerCase(),
    component: modulesPage[path],
    name,
  })
}

export default routes
