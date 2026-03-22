import { readdirSync, statSync } from 'fs'
import { join } from 'path'

function listDir(dir, depth = 0) {
  try {
    const entries = readdirSync(dir)
    for (const entry of entries) {
      const full = join(dir, entry)
      const stat = statSync(full)
      const indent = '  '.repeat(depth)
      if (stat.isDirectory()) {
        console.log(`${indent}[DIR] ${entry}`)
        if (depth < 3) listDir(full, depth + 1)
      } else {
        if (depth <= 2) console.log(`${indent}[FILE] ${entry}`)
      }
    }
  } catch (e) {
    console.log(`Error reading ${dir}: ${e.message}`)
  }
}

// Try different possible roots
for (const base of ['/vercel/share/v0-project', '/home/user', process.cwd(), '/app']) {
  try {
    statSync(base)
    console.log(`=== FOUND: ${base} ===`)
    listDir(base, 0)
    break
  } catch {
    console.log(`Not found: ${base}`)
  }
}
