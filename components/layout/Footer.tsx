import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-dark">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-5 gap-16 mb-16">
          {/* Left Logo & QR */}
          <div className="md:col-span-2">
            <img
              src="/images/Nainovate_Dark_Mode.svg"
              alt="Nainovate Logo"
              className="h-10 mb-4"
            />
            <p className="text-gray max-w-md">
              Enterprise AI agents that deliver results.<br /> Built with GenX.
            </p>

            <div className="mt-6">
              <img 
                src="/images/QR Code.png" 
                alt="Nainovate QR Code" 
                className="w-20 h-20 bg-white p-1 rounded"
              />
            </div>
          </div>

          {/* Right 4 Columns */}
          <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-10">
            {/* PRODUCTS */}
            <div>
              <h4 className="font-medium mb-6">PRODUCTS</h4>
              <div className="space-y-3">
                <Link href="/products" className="block text-gray hover:text-white transition-colors">GenX Platform</Link>
                <Link href="/products/core" className="block text-gray hover:text-white transition-colors">CORE - AI Engine</Link>
                <Link href="/products/nia" className="block text-gray hover:text-white transition-colors">NIA - Interface</Link>
                <Link href="/products/flow" className="block text-gray hover:text-white transition-colors">FLOW - Automation</Link>
              </div>
            </div>

            {/* SOLUTIONS */}
            <div>
              <h4 className="font-medium mb-6">SOLUTIONS</h4>
              <div className="space-y-3">
                <Link href="/solutions" className="block text-gray hover:text-white transition-colors">AI Solutions</Link>
                <Link href="/solutions#planning" className="block text-gray hover:text-white transition-colors">Planning</Link>
                <Link href="/solutions#procurement" className="block text-gray hover:text-white transition-colors">Procurement</Link>
                <Link href="/solutions#execution" className="block text-gray hover:text-white transition-colors">Execution</Link>
              </div>
            </div>

            {/* RESOURCES
            <div>
              <h4 className="font-medium mb-6">RESOURCES</h4>
              <div className="space-y-3">
                <Link href="/ai-readiness-report" className="block text-gray hover:text-white transition-colors">AI Report 2025</Link>
              </div>
            </div> */}

            {/* COMPANY */}
            <div>
              <h4 className="font-medium mb-6">COMPANY</h4>
              <div className="space-y-3">
                <Link href="/about" className="block text-gray hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="block text-gray hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-dark">
          <p className="text-sm text-gray">© 2025 Nainovate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
