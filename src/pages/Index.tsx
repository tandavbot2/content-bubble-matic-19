
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Sparkles, Zap, Share2, Newspaper, Bot, Check } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 flex-grow">
        <section className="bg-gradient-to-br from-curator-lightPurple to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-curator-darkBlue mb-6 animate-fade-in">
                Share Content Across Social Media with AI
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Generate and share tech content to Dev.to, Reddit, Mastodon, and more with a single click.
                Powered by AI to save you time and maximize your reach.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Link to="/register">
                  <Button size="lg" className="bg-curator-purple hover:bg-curator-purple/90 text-white">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" size="lg">
                    View Features
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-16 max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="p-6 bg-curator-darkBlue text-white rounded-t-xl">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-8">
                <div className="bg-curator-lightGray p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-curator-darkBlue mb-2">Generated Content Preview</h3>
                  <p className="text-gray-700 mb-2">
                    Title: <span className="font-medium">React 19 is Coming: What Developers Need to Know</span>
                  </p>
                  <p className="text-gray-700 text-sm">
                    The React team has announced React 19 with exciting new features including compiler optimizations, 
                    improved server components, and simplified state management. This update aims to improve 
                    performance while reducing bundle sizes...
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800 px-3 py-1">Dev.to</Badge>
                  <Badge className="bg-orange-100 text-orange-800 px-3 py-1">Reddit</Badge>
                  <Badge className="bg-purple-100 text-purple-800 px-3 py-1">Mastodon</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-curator-darkBlue mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform makes content sharing effortless with AI-powered generation and multi-platform posting.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-curator-lightPurple flex items-center justify-center text-curator-purple mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-curator-darkBlue mb-2">AI Content Generation</h3>
                <p className="text-gray-600">
                  Type a prompt or let our system find trending tech news. Our AI will generate relevant, engaging content for your audience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-curator-lightPurple flex items-center justify-center text-curator-purple mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-curator-darkBlue mb-2">Automated Processing</h3>
                <p className="text-gray-600">
                  Our system optimizes your content for each platform, ensuring it follows best practices and reaches maximum engagement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-curator-lightPurple flex items-center justify-center text-curator-purple mb-4">
                  <Share2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-curator-darkBlue mb-2">Multi-Platform Sharing</h3>
                <p className="text-gray-600">
                  Share to multiple platforms with one click. Connect Dev.to, Reddit, Mastodon and more to expand your reach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sources Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl font-bold text-curator-darkBlue mb-6">Two Ways to Create Content</h2>
                
                <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-curator-purple flex items-center justify-center text-white">
                        <Bot className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-curator-darkBlue mb-2">User Prompts</h3>
                      <p className="text-gray-600 mb-4">
                        Enter your topic or idea, and our AI will generate a high-quality post tailored for each platform.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Create custom content based on your expertise</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Control the tone and style of your content</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Perfect for sharing your insights and knowledge</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-curator-blue flex items-center justify-center text-white">
                        <Newspaper className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-curator-darkBlue mb-2">Tech News</h3>
                      <p className="text-gray-600 mb-4">
                        Our system finds the latest tech news, processes it, and creates shareable content automatically.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Stay current with the latest tech trends</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Content from trusted sources like The Verge, TechCrunch</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>Save time with fully automated content curation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-curator-darkBlue mb-3">AI-Generated Content</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-curator-darkBlue">For Dev.to</h4>
                        <p className="text-sm text-gray-600">
                          Full blog post with code examples, headings, and developer-focused content
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-curator-darkBlue">For Reddit</h4>
                        <p className="text-sm text-gray-600">
                          Conversational post with questions to encourage discussion and community engagement
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-curator-darkBlue">For Mastodon</h4>
                        <p className="text-sm text-gray-600">
                          Concise summary with relevant hashtags and a link to more information
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">Ready to streamline your social media presence?</p>
                    <Link to="/register">
                      <Button className="w-full bg-curator-purple hover:bg-curator-purple/90 text-white">
                        Start Creating Content
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-curator-purple py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Social Media Content?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join thousands of developers and content creators who are saving time and expanding their reach.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-curator-purple hover:bg-gray-100">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
