import { rmSync, existsSync } from 'fs'
import { join } from 'path'

const APP = '/vercel/share/v0-project/clients/apps/web/src/app/(main)'

const toDelete = [
  '(installation)',
  '(topbar)',
  '[organization]',
  'backoffice',
  'dashboard',
  'login',
]

for (const dir of toDelete) {
  const fullPath = join(APP, dir)
  if (existsSync(fullPath)) {
    rmSync(fullPath, { recursive: true, force: true })
    console.log(`Deleted: ${fullPath}`)
  } else {
    console.log(`Not found (skipped): ${fullPath}`)
  }
}

// Also remove the API routes dir at the app root if it exists
const apiDir = '/vercel/share/v0-project/clients/apps/web/src/app/api'
if (existsSync(apiDir)) {
  rmSync(apiDir, { recursive: true, force: true })
  console.log(`Deleted: ${apiDir}`)
} else {
  console.log(`Not found (skipped): ${apiDir}`)
}

console.log('Done.')
