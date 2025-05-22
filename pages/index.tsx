import { Layout } from '@vercel/examples-ui'

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to Dashboard
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            Your secure administrative portal
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
                <p className="text-gray-500">Administrator Account</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Username</label>
                <p className="text-lg font-semibold text-gray-800">4dmin</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Role</label>
                <p className="text-lg font-semibold text-gray-800">System Administrator</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Access Level</label>
                <p className="text-lg font-semibold text-gray-800">Full Access</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* System Status */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">System Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Server</span>
                  <span className="text-green-600 font-medium">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Database</span>
                  <span className="text-green-600 font-medium">Connected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">API</span>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
              </div>
            </div>

            {/* Security Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Security Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">Authentication Method</p>
                  <p className="font-medium text-gray-800">Basic Auth (Secure)</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Last Login</p>
                  <p className="font-medium text-gray-800">Just Now</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Session Status</p>
                  <p className="font-medium text-green-600">Active & Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Info */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-xl font-bold text-gray-800">Access Credentials</h3>
            <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              Reference Only
            </span>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-2">Username</p>
                <code className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 font-mono">
                  4dmin
                </code>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Password</p>
                <code className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 font-mono">
                  testpwd123
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Index.Layout = Layout