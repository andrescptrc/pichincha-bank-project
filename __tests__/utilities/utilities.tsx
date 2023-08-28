import { ReactNode } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@wrappers/ReactQuery'

export const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
