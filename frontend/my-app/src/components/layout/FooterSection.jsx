import React from "react";
import Frame from '../../assets/Frame3.png'
import { Link } from "react-router-dom";


export default function FooterSection() {
  return (
    <footer className="bg-black  text-white py-12 px-4 font-heading">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start container mx-auto px-4">
          {/* <div className="text-3xl font-bold tracking-wide mb-3 text-secondary">Logo</div> */}
          <Link to="/" className="flex items-center gap-2 group">
  <img 
    src={Frame}
    alt="Logo" 
    className="h-12 md:h-14 w-auto object-contain group-hover:opacity-90 transition-opacity m-0 p-0"
  />
</Link>
          <p className="text-gray-300 max-w-xs">
            Building digital experiences that transform ideas into reality. Innovation crafted with precision.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-2 w-full">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">About Our Vision</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services & Solutions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers at Nexus</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact & Support</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-lg mb-4 border-b border-gray-700 pb-2 w-full">Connect With Us</h3>
          <div className="flex space-x-5 mb-6">
            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:scale-110 transition-transform">
                <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.852V15.467h-3.307v-3.307h3.307V9.383c0-3.263 1.937-5.03 4.918-5.03h2.948v3.307h-2.948c-1.307 0-1.573.627-1.573 1.557v2.12h3.307l-.418 3.307h-2.889v6.868C19.612 22.954 24 17.99 24 12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:scale-110 transition-transform">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:scale-110 transition-transform">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:scale-110 transition-transform">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            Subscribe to our newsletter for updates and insights delivered to your inbox monthly.
          </p>
        </div>
      </div>
     
    </footer>
  );
}