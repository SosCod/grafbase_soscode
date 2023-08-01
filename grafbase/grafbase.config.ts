import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User',{
  name: g.string().length({min:2, max: 20}),
  email: g.string().unique(),
  perfilUrl: g.url(),
  descripcion: g.string().optional(),
  githubUrl:g.url().optional(),
  linkedInUrl: g.url().optional(),
  proyectos: g.relation(() => Proyectos).list().optional(),


})

const Proyectos  = g.model('Proyectos', {
  title: g.string().length({min:3}),
  description: g.string(),
  image: g.url(),
  liveSiteurl: g.url(),
  githubUrl:g.url(),
  categoria: g.string().search(),
  createdBy: g.relation(()=> User),
})

export default config({
  schema: g

})
