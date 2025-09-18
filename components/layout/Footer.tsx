import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-dark">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-5 gap-16 mb-16">
          <div className="md:col-span-2">
            <img
              src="/images/Nainovate_Dark_mode.svg"
              alt="Nainovate Logo"
              className="h-10 mb-4"
            />
            <p className="text-gray max-w-md">
              Enterprise AI agents that deliver results. Built with GenX.
            </p>
            <div className="flex items-center gap-8">
            
            {/* QR Code */}
            <div className='mt-6'>
              <img 
                src="/images/QR Code.png" 
                alt="Nainovate QR Code" 
                className="w-20 h-20 bg-white p-1 rounded"
              />
            </div>
          </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">PRODUCTS</h4>
            <div className="space-y-3">
              <Link href="/products/build" className="block text-gray hover:text-white transition-colors">Build (GenX)</Link>
              <Link href="/products/deploy" className="block text-gray hover:text-white transition-colors">Deploy (NIA)</Link>
              <Link href="/products/orchestrate" className="block text-gray hover:text-white transition-colors">Orchestrate (Flow)</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">SOLUTIONS</h4>
            <div className="space-y-3">
              <Link href="/solutions" className="block text-gray hover:text-white transition-colors">AI Solutions</Link>
              <Link href="/solutions#planning" className="block text-gray hover:text-white transition-colors">Planning</Link>
              <Link href="/solutions#procurement" className="block text-gray hover:text-white transition-colors">Procurement</Link>
              <Link href="/solutions#execution" className="block text-gray hover:text-white transition-colors">Execution</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">COMPANY</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray hover:text-white transition-colors">About</Link>
              <Link href="/careers" className="block text-gray hover:text-white transition-colors">Careers</Link>
              <Link href="/contact" className="block text-gray hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-gray-dark">
          <p className="text-sm text-gray">© 2025 Nainovate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}