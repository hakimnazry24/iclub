'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import {  QueryClient,
    QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

const QueryProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export { QueryProvider}