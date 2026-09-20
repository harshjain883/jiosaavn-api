import { handle } from '@hono/node-server/vercel'
import { App } from '../src/app'

const server = new App()

export default handle(server.app)
