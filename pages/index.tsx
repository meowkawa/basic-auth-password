import { Layout } from '@vercel/examples-ui'
import Image from 'next/image'

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to Our Secure Platform
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            You've successfully authenticated to our protected area.
          </p>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Your Account Details</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Username</dt>
                      <dd className="mt-1 text-lg font-semibold text-gray-900">4dmin</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Access Level</dt>
                      <dd className="mt-1 text-lg font-semibold text-gray-900">Administrator</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Status</dt>
                      <dd className="mt-1">
                        <span className="px-2 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
                          Active
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Quick Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-sm font-medium text-gray-500">Last Login</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">Now</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-sm font-medium text-gray-500">Session Status</p>
                    <p className="mt-2 text-3xl font-semibold text-indigo-600">Active</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="rounded-lg bg-gray-50 p-6">
                <div className="text-sm text-gray-500">
                  <p>🔐 This is a secure area protected by Basic Authentication</p>
                  <p className="mt-2">Your credentials for reference:</p>
                  <ul className="mt-2 list-disc list-inside">
                    <li>Username: <code className="text-sm bg-gray-200 px-2 py-1 rounded">4dmin</code></li>
                    <li>Password: <code className="text-sm bg-gray-200 px-2 py-1 rounded">testpwd123</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Index.Layout = Layout