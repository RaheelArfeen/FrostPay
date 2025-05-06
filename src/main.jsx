import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router";
import { router } from './Router/router';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="bottom-right" />
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
