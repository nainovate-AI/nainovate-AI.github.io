'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function AIReadinessReportPage() {
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    industry: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with your Google Apps Script here
    console.log('Form submitted:', formData);
    // Add your form submission logic
    setShowForm(false);
  };

  return (
    <main className="bg-black">
      {/* Hero Section with Monochromatic Visualization */}
      <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
        {/* Animated Background - using white/gray only */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium tracking-widest text-gray uppercase mb-8">
                2025 INDUSTRY INSIGHTS
              </p>
              <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold leading-tight mb-6">
                Enterprise AI
                <span className="block text-gray">
                  Readiness Report
                </span>
              </h1>
              <p className="text-xl text-gray mb-8">
                Data-driven insights from 500+ enterprises transforming with AI
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => setShowForm(true)}
                  className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4"
                >
                  Download Report →
                </Button>
                <Button className="border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4">
                  View Insights
                </Button>
              </div>
            </div>
            
            {/* Stats Visualization - Monochromatic */}
            <div className={`relative transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                {/* Circular Progress */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="96" cy="96" r="88" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                    <circle 
                      cx="96" cy="96" r="88" 
                      stroke="white" 
                      strokeWidth="8" 
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 88}`}
                      strokeDashoffset={`${2 * Math.PI * 88 * 0.25}`}
                      strokeLinecap="round"
                      className="transition-all duration-2000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold">75%</div>
                      <div className="text-sm text-gray">AI Adoption</div>
                    </div>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">87%</div>
                    <div className="text-xs text-gray">ROI in Year 1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">3.2x</div>
                    <div className="text-xs text-gray">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">45%</div>
                    <div className="text-xs text-gray">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Cards - Monochromatic */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Industry Deep Dive</h2>
            <p className="text-xl text-gray">AI transformation across key sectors</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Governance Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white/60">◈</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Governance</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Compliance Automation</span>
                      <span>68%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{width: '68%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Time Saved</span>
                      <span>40%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{width: '40%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white/60">⚕</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Healthcare</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Process Efficiency</span>
                      <span>82%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{width: '82%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Accuracy Improved</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturing Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white/60">⚙</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Manufacturing</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Quality Control</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Cost Savings</span>
                      <span>30%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-white rounded-full transition-all duration-1000" style={{width: '30%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Monochromatic */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-16">Report Highlights</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-white/20 via-white/40 to-white/20"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              <div className="flex items-center">
                <div className="w-1/2 text-right pr-8">
                  <h3 className="text-2xl font-bold mb-2">Current State Analysis</h3>
                  <p className="text-gray">Comprehensive overview of AI adoption across 500+ enterprises</p>
                </div>
                <div className="w-4 h-4 bg-white rounded-full relative z-10">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 inline-block">
                    <div className="text-3xl font-bold">75%</div>
                    <div className="text-sm text-gray">Already implementing AI</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 pr-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 ml-auto max-w-xs">
                    <div className="text-3xl font-bold">$2.3M</div>
                    <div className="text-sm text-gray">Average annual savings</div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-white rounded-full relative z-10">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">ROI Analysis</h3>
                  <p className="text-gray">Detailed breakdown of investment returns and payback periods</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-1/2 text-right pr-8">
                  <h3 className="text-2xl font-bold mb-2">Future Predictions</h3>
                  <p className="text-gray">2025-2027 trends and emerging opportunities</p>
                </div>
                <div className="w-4 h-4 bg-white rounded-full relative z-10">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 inline-block">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm text-gray">Plan to increase AI investment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Data Grid */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-16">Key Metrics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Enterprises Surveyed' },
              { value: '73%', label: 'Active AI Projects' },
              { value: '12mo', label: 'Average Payback' },
              { value: '3.5x', label: 'Productivity Gain' },
            ].map((stat, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-gray">{stat.label}</div>
                </div>
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-gray mb-12">
            Get the complete 2025 AI Readiness Report with detailed insights, 
            case studies, and implementation roadmaps.
          </p>
          
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-white/60">✓</span>
                <span>50+ pages of industry insights</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/60">✓</span>
                <span>Implementation roadmaps</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/60">✓</span>
                <span>Exclusive case studies</span>
              </div>
            </div>
            
            <Button 
              onClick={() => setShowForm(true)}
              className="w-full border border-white/20 hover:bg-white/10 hover:text-white px-8 py-4"
            >
              Download Free Report →
            </Button>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowForm(false);
          }}
        >
          <div className="bg-black border border-white/10 rounded-2xl p-8 max-w-md w-full relative">
            {/* Close button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold mb-6">Download Report</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-white/20 outline-none"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-white/20 outline-none"
                  required
                />
              </div>
              
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-white/20 outline-none"
                required
              />
              
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 focus:border-white/20 outline-none"
                required
              />
              
              <select 
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white appearance-none cursor-pointer focus:border-white/20 outline-none"
                required
              >
                <option value="" className="bg-black text-gray">Select Industry</option>
                <option value="governance" className="bg-black">Governance</option>
                <option value="healthcare" className="bg-black">Healthcare</option>
                <option value="manufacturing" className="bg-black">Manufacturing</option>
                <option value="other" className="bg-black">Other</option>
              </select>
              
              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 flex-1"
                >
                  Download Report
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="border border-white/20 hover:bg-white/10 flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}