'use client'

import { useState, useEffect } from 'react'

// Define the type for our content
type SiteContent = {
  id: string
  section_name: string
  key_name: string
  text_value: string
  image_url: string
}

export default function ControlPanel() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Dashboard State
  const [contentData, setContentData] = useState<SiteContent[]>([])
  const [loading, setLoading] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')
  
  // Sidebar State
  const [activeSection, setActiveSection] = useState<string>('')

  // Check if already logged in when the page loads
  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAdminLogged')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      fetchContent()
    }
  }, [])

  // Login Function
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === 'Dyks@2026') {
      setIsAuthenticated(true)
      sessionStorage.setItem('isAdminLogged', 'true')
      setError('')
      fetchContent()
    } else {
      setError('Invalid credentials. Please try again.')
    }
  }

  // Fetch Data
  const fetchContent = async () => {
    setLoading(true)
    const stored = localStorage.getItem('site_content')
    const data: SiteContent[] = stored ? JSON.parse(stored) : []
    setContentData(data)
    
    const uniqueSections = Array.from(new Set(data.map((item) => item.section_name)))
    if (uniqueSections.length > 0) {
      setActiveSection((prev) => prev ? prev : (uniqueSections[0] as string))
    }
    setLoading(false)
  }

  // Save changes
  const handleSave = async (id: string) => {
    const updated = contentData.map(item => item.id === id ? { ...item, text_value: editValue } : item)
    setContentData(updated)
    localStorage.setItem('site_content', JSON.stringify(updated))
    alert('Changes saved successfully!')
    setEditingId(null)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLogged')
    setIsAuthenticated(false)
  }

  // Calculate unique sections for the sidebar
  const sections = Array.from(new Set(contentData.map(item => item.section_name)))
  
  // Filter content for the right panel based on the active section
  const visibleContent = contentData.filter(item => item.section_name === activeSection)

  // --- UI: LOGIN PAGE ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF6F0] p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-warm max-w-sm w-full flex flex-col gap-5">
          <h1 className="font-heading text-3xl text-center text-[#5C3A21] mb-2">Admin Login</h1>
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#725B48]">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#725B48]">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary"
            />
          </div>
          
          <button type="submit" className="bg-primary text-white py-3 rounded-full font-medium mt-4 hover:bg-[#725B48] transition">
            Login
          </button>
        </form>
      </div>
    )
  }

  // --- UI: ADMIN DASHBOARD (SIDEBAR + CONTENT) ---
  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col h-screen">
      
      {/* Top Navigation Bar */}
      <div className="bg-white px-6 py-4 flex justify-between items-center shadow-sm shrink-0 border-b border-gray-200">
        <h1 className="font-heading text-2xl sm:text-3xl text-[#5C3A21]">Control Panel</h1>
        <button onClick={handleLogout} className="border border-red-500 text-red-500 px-4 py-2 rounded-full text-sm hover:bg-red-50 transition">
          Logout
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar (Sections) */}
        <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto shrink-0 hidden md:block">
          <div className="p-4 text-sm font-bold text-gray-500 uppercase tracking-wider">
            Website Sections
          </div>
          <div className="flex flex-col">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-left px-6 py-4 text-sm font-medium transition-colors border-l-4 ${
                  activeSection === section 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-transparent text-gray-600 hover:bg-gray-50'
                }`}
              >
                {section.toUpperCase()}
              </button>
            ))}
            
            {sections.length === 0 && !loading && (
              <div className="px-6 py-4 text-sm text-gray-400 italic">No sections found.</div>
            )}
          </div>
        </div>

        {/* Mobile Section Dropdown (shows on small screens instead of sidebar) */}
        <div className="md:hidden bg-white p-4 border-b border-gray-200 shrink-0">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Select Section</label>
          <select 
            value={activeSection} 
            onChange={(e) => setActiveSection(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 outline-none focus:border-primary text-sm"
          >
            {sections.map(section => (
              <option key={section} value={section}>{section.toUpperCase()}</option>
            ))}
          </select>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#FAF6F0]">
          
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <p className="text-center text-[#725B48] mt-10">Loading content from database...</p>
            ) : (
              <div className="flex flex-col gap-6">
                
                {activeSection && (
                  <h2 className="font-heading text-2xl text-[#5C3A21] border-b border-gray-200 pb-2 mb-2 uppercase">
                    Editing: {activeSection}
                  </h2>
                )}

                {visibleContent.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 p-5 rounded-lg flex flex-col gap-3 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-800 text-sm bg-gray-100 px-3 py-1 rounded">
                        Key: {item.key_name}
                      </span>
                    </div>
                    
                    {editingId === item.id ? (
                      <div className="flex flex-col gap-3 mt-2">
                        <textarea 
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="w-full border border-gray-300 rounded p-3 min-h-[120px] outline-none focus:border-primary text-[#5C3A21]"
                        />
                        <div className="flex gap-3">
                          <button onClick={() => handleSave(item.id)} className="bg-primary text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#725B48]">
                            Save Changes
                          </button>
                          <button onClick={() => setEditingId(null)} className="border border-gray-300 px-6 py-2 rounded text-sm font-medium hover:bg-gray-50">
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mt-1">
                        <p className="text-[#5C3A21] whitespace-pre-wrap">{item.text_value}</p>
                        <button 
                          onClick={() => {
                            setEditingId(item.id)
                            setEditValue(item.text_value || '')
                          }} 
                          className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary/20 shrink-0 transition"
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                
                {visibleContent.length === 0 && !loading && (
                  <div className="text-center py-12 bg-white rounded-lg text-gray-500 shadow-sm">
                    No content found in the database. Please run the SQL command to create the initial data!
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
