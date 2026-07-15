import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Stop Standing in Line.{' '}
          <span className="text-primary-600">Join Remotely.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          LineWise uses AI to predict waiting times, manage queues intelligently, 
          and let you wait where you want. No more crowded lobbies.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/register" className="btn-primary text-lg px-8 py-3">
            Get Started
          </Link>
          <Link to="/login" className="btn-secondary text-lg px-8 py-3">
            Sign In
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="card text-center">
          <div className="text-4xl mb-4">🎫</div>
          <h3 className="text-lg font-semibold mb-2">Smart Token Generation</h3>
          <p className="text-gray-600">Generate secure digital queue tokens instantly with a single tap.</p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-4">⏱️</div>
          <h3 className="text-lg font-semibold mb-2">AI Waiting Time Prediction</h3>
          <p className="text-gray-600">Know exactly how long you'll wait using AI models trained on historical data.</p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-lg font-semibold mb-2">Live Queue Tracking</h3>
          <p className="text-gray-600">Monitor your position in real-time and get notified when your turn is near.</p>
        </div>
      </div>

      {/* How It Works */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            ['1️⃣', 'Join Queue', 'Scan QR or select a service'],
            ['2️⃣', 'Get Token', 'Receive your position & ETA'],
            ['3️⃣', 'Wait Remotely', 'Monitor from anywhere'],
            ['4️⃣', 'Get Notified', 'Arrive when it\'s your turn'],
          ].map(([icon, title, desc]) => (
            <div key={title} className="text-center">
              <div className="text-4xl mb-3">{icon}</div>
              <h4 className="font-semibold text-gray-900">{title}</h4>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
