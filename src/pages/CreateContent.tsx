
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Sparkles, Newspaper, SaveAll, Share2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CreateContent = () => {
  const [prompt, setPrompt] = useState('');
  const [title, setTitle] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [platforms, setPlatforms] = useState({
    devto: true,
    reddit: true,
    mastodon: true
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt to generate content",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to AI service
    setTimeout(() => {
      const mockedTitle = "Understanding Modern JavaScript Features";
      const mockedContent = 
        "# Understanding Modern JavaScript Features\n\n" +
        "JavaScript has evolved significantly over the years, introducing powerful features that make code more readable, maintainable, and efficient.\n\n" +
        "## Arrow Functions\n\n" +
        "Arrow functions provide a concise syntax for writing functions:\n\n" +
        "```javascript\n" +
        "// Traditional function\n" +
        "function add(a, b) {\n" +
        "  return a + b;\n" +
        "}\n\n" +
        "// Arrow function\n" +
        "const add = (a, b) => a + b;\n" +
        "```\n\n" +
        "## Destructuring\n\n" +
        "Destructuring allows you to extract values from arrays or objects more efficiently:\n\n" +
        "```javascript\n" +
        "const person = { name: 'John', age: 30, job: 'Developer' };\n" +
        "const { name, age } = person;\n" +
        "console.log(name); // 'John'\n" +
        "```\n\n" +
        "## Async/Await\n\n" +
        "Async/await simplifies asynchronous code, making it look and behave more like synchronous code:\n\n" +
        "```javascript\n" +
        "async function fetchData() {\n" +
        "  try {\n" +
        "    const response = await fetch('https://api.example.com/data');\n" +
        "    const data = await response.json();\n" +
        "    console.log(data);\n" +
        "  } catch (error) {\n" +
        "    console.error('Error fetching data:', error);\n" +
        "  }\n" +
        "}\n" +
        "```\n\n" +
        "These modern features make JavaScript development more efficient and enjoyable. What's your favorite JavaScript feature?";
      
      setTitle(mockedTitle);
      setGeneratedContent(mockedContent);
      setIsLoading(false);
      
      toast({
        title: "Content generated",
        description: "Your content has been successfully generated",
      });
    }, 2000);
  };

  const handleProcess = () => {
    if (!generatedContent) {
      toast({
        title: "Error",
        description: "Please generate content first",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate API call to process content
    setTimeout(() => {
      setIsProcessing(false);
      
      toast({
        title: "Content processed",
        description: "Your content has been optimized for the selected platforms",
      });
    }, 1500);
  };

  const handleSubmit = () => {
    if (!generatedContent) {
      toast({
        title: "Error",
        description: "Please generate content first",
        variant: "destructive",
      });
      return;
    }

    // Simulate content submission
    toast({
      title: "Content published",
      description: "Your content has been scheduled for publishing",
    });
    
    // Navigate to dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const handleFetchNews = () => {
    setIsLoading(true);
    
    // Simulate news API call
    setTimeout(() => {
      const mockedNewsTitle = "The Rise of AI in Software Development";
      const mockedNewsContent = 
        "# The Rise of AI in Software Development\n\n" +
        "Artificial Intelligence is transforming how software is built, tested, and deployed. From code suggestions to automated testing, AI tools are becoming essential for modern developers.\n\n" +
        "## Code Generation\n\n" +
        "AI-powered code generation tools can now write functional code based on simple descriptions:\n\n" +
        "```javascript\n" +
        "// Example of AI-generated pagination component\n" +
        "function Pagination({ currentPage, totalPages, onPageChange }) {\n" +
        "  return (\n" +
        "    <div className=\"pagination\">\n" +
        "      <button\n" +
        "        disabled={currentPage === 1}\n" +
        "        onClick={() => onPageChange(currentPage - 1)}\n" +
        "      >\n" +
        "        Previous\n" +
        "      </button>\n" +
        "      <span>{currentPage} of {totalPages}</span>\n" +
        "      <button\n" +
        "        disabled={currentPage === totalPages}\n" +
        "        onClick={() => onPageChange(currentPage + 1)}\n" +
        "      >\n" +
        "        Next\n" +
        "      </button>\n" +
        "    </div>\n" +
        "  );\n" +
        "}\n" +
        "```\n\n" +
        "## Bug Detection\n\n" +
        "AI can identify potential bugs before they reach production:\n\n" +
        "```javascript\n" +
        "// AI might flag this as a potential memory leak\n" +
        "function createListeners() {\n" +
        "  document.addEventListener('click', () => {\n" +
        "    // This listener is never removed\n" +
        "  });\n" +
        "}\n" +
        "```\n\n" +
        "## Future Trends\n\n" +
        "As AI continues to evolve, we can expect:\n\n" +
        "1. More sophisticated code generation\n" +
        "2. Enhanced debugging capabilities\n" +
        "3. Automated code reviews\n" +
        "4. Personalized learning recommendations\n\n" +
        "What are your thoughts on AI in software development? Will it replace developers or empower them?";
      
      setTitle(mockedNewsTitle);
      setGeneratedContent(mockedNewsContent);
      setIsLoading(false);
      
      toast({
        title: "News fetched",
        description: "Latest tech news has been retrieved and processed",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-curator-darkBlue">Create Content</h1>
            <p className="text-gray-600 mt-1">Generate and share content across your social platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Content Source</CardTitle>
                  <CardDescription>Choose how to generate your content</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="prompt" className="w-full">
                    <TabsList className="grid grid-cols-2 mb-6">
                      <TabsTrigger value="prompt">
                        <Sparkles className="h-4 w-4 mr-2" />
                        User Prompt
                      </TabsTrigger>
                      <TabsTrigger value="news">
                        <Newspaper className="h-4 w-4 mr-2" />
                        Tech News
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="prompt">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="prompt">What would you like to write about?</Label>
                          <Textarea
                            id="prompt"
                            placeholder="E.g., Explain modern JavaScript features like arrow functions, destructuring, and async/await with code examples"
                            rows={5}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <Button 
                          onClick={handleGenerate}
                          className="w-full bg-curator-purple hover:bg-curator-purple/90"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                              Generating...
                            </>
                          ) : (
                            <>
                              <Sparkles className="h-4 w-4 mr-2" />
                              Generate Content
                            </>
                          )}
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="news">
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                          Our system will fetch the latest tech news from trusted sources and generate content based on trending topics.
                        </p>
                        <div className="bg-amber-50 p-3 rounded-md border border-amber-100">
                          <p className="text-sm text-amber-800">
                            <strong>Sources include:</strong> The Verge, TechCrunch, WIRED, MIT Technology Review, and more.
                          </p>
                        </div>
                        <Button 
                          onClick={handleFetchNews}
                          className="w-full bg-curator-purple hover:bg-curator-purple/90"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                              Fetching News...
                            </>
                          ) : (
                            <>
                              <Newspaper className="h-4 w-4 mr-2" />
                              Fetch Latest News
                            </>
                          )}
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Publishing Options</CardTitle>
                  <CardDescription>Select where to share your content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="devto" className="cursor-pointer">Dev.to</Label>
                      </div>
                      <Switch
                        id="devto"
                        checked={platforms.devto}
                        onCheckedChange={(checked) => setPlatforms({ ...platforms, devto: checked })}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="reddit" className="cursor-pointer">Reddit</Label>
                      </div>
                      <Switch
                        id="reddit"
                        checked={platforms.reddit}
                        onCheckedChange={(checked) => setPlatforms({ ...platforms, reddit: checked })}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="mastodon" className="cursor-pointer">Mastodon</Label>
                      </div>
                      <Switch
                        id="mastodon"
                        checked={platforms.mastodon}
                        onCheckedChange={(checked) => setPlatforms({ ...platforms, mastodon: checked })}
                      />
                    </div>
                    
                    <Button 
                      onClick={handleProcess}
                      variant="outline"
                      className="w-full"
                      disabled={isProcessing || !generatedContent}
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-curator-purple border-t-transparent rounded-full"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <SaveAll className="h-4 w-4 mr-2" />
                          Process Content for Platforms
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      onClick={handleSubmit}
                      className="w-full bg-curator-purple hover:bg-curator-purple/90"
                      disabled={!generatedContent}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Publish Content
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">Generated Content</CardTitle>
                  <CardDescription>Preview and edit before publishing</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="mb-4">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter content title"
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={generatedContent}
                      onChange={(e) => setGeneratedContent(e.target.value)}
                      placeholder="Generated content will appear here"
                      className="mt-1 h-[500px]"
                    />
                  </div>
                  
                  {generatedContent && (
                    <div className="mt-4 bg-gray-50 p-4 rounded-md border border-gray-200">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Platform Preview</h3>
                      <div className="flex space-x-4">
                        {platforms.devto && (
                          <Button variant="outline" size="sm" className="text-xs">
                            Preview for Dev.to
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        )}
                        {platforms.reddit && (
                          <Button variant="outline" size="sm" className="text-xs">
                            Preview for Reddit
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        )}
                        {platforms.mastodon && (
                          <Button variant="outline" size="sm" className="text-xs">
                            Preview for Mastodon
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CreateContent;
