import { treaty } from '@elysiajs/eden'
import type { App } from '$elysia'

export const api = treaty<App>(`${window.location.origin}/api`)
