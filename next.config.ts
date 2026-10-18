import type { NextConfig } from 'next'

// Exportação estática: a pasta "out" vai direto para o Cloudflare.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Fotos do Unsplash carregadas direto, sem otimização no servidor.
  images: { unoptimized: true },
}

export default nextConfig
