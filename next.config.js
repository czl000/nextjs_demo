/** @type {import('next').NextConfig} */
const nextConfig = {
    babel: {
        plugins: [
          ['import', { libraryName: 'antd', style: true }]
        ]
      }
}

module.exports = nextConfig


