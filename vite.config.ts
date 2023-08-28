import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@routes': path.resolve(__dirname, './src/common/routes/index'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@components': path.resolve(__dirname, './src/common/components/'),
      '@atoms': path.resolve(__dirname, './src/common/components/atoms/'),
      '@schemas': path.resolve(__dirname, './src/common/schemas/index'),
      '@modules': path.resolve(__dirname, './src/modules/'),
      '@hooks': path.resolve(__dirname, './src/common/hooks/index'),
      '@wrappers': path.resolve(__dirname, './src/common/wrappers/index'),
      '@constants': path.resolve(__dirname, './src/common/constants/'),
      '@helpers': path.resolve(__dirname, './src/common/helpers/'),
      '@libs': path.resolve(__dirname, './src/common/libs/'),
      '@interfaces': path.resolve(__dirname, './src/common/interfaces/'),
      '@services': path.resolve(__dirname, './src/common/services/'),
      '@api': path.resolve(__dirname, './src/common/api/'),
      '@slices': path.resolve(__dirname, './src/common/store/slices/'),
      '@molecules': path.resolve(__dirname, './src/common/components/molecules/index'),
      '@organisms': path.resolve(__dirname, './src/common/components/organisms/index'),
      '@layouts': path.resolve(__dirname, './src/common/components/layouts/index'),
    },
  },
})
