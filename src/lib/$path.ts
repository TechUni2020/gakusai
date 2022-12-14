export const pagesPath = {
  "auth": {
    $url: (url?: { hash?: string }) => ({ pathname: '/auth' as const, hash: url?.hash })
  },
  "completed": {
    $url: (url?: { hash?: string }) => ({ pathname: '/completed' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  TechUni_svg: '/TechUni.svg',
  favicon_ico: '/favicon.ico',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
