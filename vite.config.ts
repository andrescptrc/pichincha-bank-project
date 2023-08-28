import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@routes': path.resolve(__dirname, './src/common/routes/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@components': path.resolve(__dirname, './src/common/components/'),
      '@atoms': path.resolve(__dirname, './src/common/components/atoms/'),
      '@schemas': path.resolve(__dirname, './src/common/schemas/index'),
      '@modules': path.resolve(__dirname, './src/modules/'),
      '@hooks': path.resolve(__dirname, './src/common/hooks/'),
      '@wrappers': path.resolve(__dirname, './src/common/wrappers/'),
      '@constants': path.resolve(__dirname, './src/common/constants/'),
      '@helpers': path.resolve(__dirname, './src/common/helpers/'),
      '@libs': path.resolve(__dirname, './src/common/libs/'),
      '@interfaces': path.resolve(__dirname, './src/common/interfaces/'),
      '@services': path.resolve(__dirname, './src/common/services/'),
      '@slices': path.resolve(__dirname, './src/common/store/slices/'),
      '@molecules': path.resolve(__dirname, './src/common/components/molecules/index'),
      '@organisms': path.resolve(__dirname, './src/common/components/organisms/index'),
      '@layouts': path.resolve(__dirname, './src/common/components/layouts/index'),
    },
  },
})
