export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LineWise — Priyadarshini College of Engineering, Nagpur
          </p>
          <p className="text-gray-400 text-sm">
            AI-Based Smart Service Flow Management System
          </p>
        </div>
      </div>
    </footer>
  )
}
