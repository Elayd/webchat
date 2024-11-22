import { wrapCreateBrowserRouter } from '@sentry/react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { ChatPage } from '@/modules/chat'
import { OAuthPageCallbackPage } from '@/modules/googleOAuth'
import { SettingsPage } from '@/modules/settings'
import { SignInPage } from '@/modules/signin'
import { SignUpPage } from '@/modules/signup'

import { ErrorBoundaryLayout } from './wrappers/ErrorBoundary/ErrorBoundaryWrapper.tsx'
import { PrivateWrapper } from './wrappers/PrivateWrapper/PrivateWrapper.tsx'
import { PublicWrapper } from './wrappers/PublicWrapper/PublicWrapper.tsx'

const sentryCreateBrowserRouter = wrapCreateBrowserRouter(createBrowserRouter)

export const router = sentryCreateBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        element: <PrivateWrapper />,
        children: [
          {
            path: '/chat',
            element: <ChatPage />,
            children: [
              {
                path: ':id',
                element: <div className='text-white'>Test</div>
              }
            ]
          },
          {
            path: '/settings',
            element: <SettingsPage />
          }
        ]
      },
      {
        element: <PublicWrapper />,
        children: [
          {
            path: '/registration',
            element: <SignUpPage />
          },
          {
            path: '/auth',
            element: <SignInPage />
          }
        ]
      },
      {
        path: '/auth/callback',
        element: <OAuthPageCallbackPage />
      }
    ]
  },

  { path: '*', element: <Navigate to='/chat' /> }
])
