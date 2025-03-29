
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Sparkles className="h-6 w-6 text-curator-purple" />
              <span className="ml-2 text-lg font-semibold text-curator-darkBlue">SocialCurator</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Automate your social media content with the power of AI.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-curator-purple">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-curator-purple">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-curator-purple">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/features" className="text-sm text-gray-600 hover:text-curator-purple">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-600 hover:text-curator-purple">Pricing</Link>
              </li>
              <li>
                <Link to="/docs" className="text-sm text-gray-600 hover:text-curator-purple">Documentation</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-curator-purple">Blog</Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-sm text-gray-600 hover:text-curator-purple">Tutorials</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-curator-purple">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-curator-purple">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-curator-purple">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-curator-purple">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-curator-purple">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} SocialCurator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
