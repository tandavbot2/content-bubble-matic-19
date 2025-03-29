
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentCard from '@/components/ContentCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';
import { PlusCircle, BarChart3, History, ClockIcon } from 'lucide-react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentItems, setContentItems] = useState<Array<any>>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate API call to get dashboard data
    setTimeout(() => {
      // Mock data
      setContentItems([
        {
          id: 1,
          title: "React 19 Features Overview",
          content: "React 19 brings exciting new features including compiler optimizations, improved server components...",
          date: "July 15, 2023",
          platforms: ["Dev.to", "Reddit", "Mastodon"],
          status: "published"
        },
        {
          id: 2,
          title: "Getting Started with Rust for JavaScript Developers",
          content: "Rust is gaining popularity among web developers. In this post, we'll explore how JavaScript...",
          date: "July 12, 2023",
          platforms: ["Dev.to", "Reddit"],
          status: "scheduled"
        },
        {
          id: 3,
          title: "The Future of AI in Software Development",
          content: "AI tools are reshaping how developers work. From code completion to bug prediction...",
          date: "July 10, 2023",
          platforms: ["Dev.to", "Mastodon"],
          status: "draft"
        },
        {
          id: 4,
          title: "Understanding TypeScript Generics",
          content: "TypeScript generics provide a way to create reusable components. In this post...",
          date: "July 5, 2023",
          platforms: ["Dev.to"],
          status: "published"
        }
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleEditContent = (id: number) => {
    toast({
      title: "Edit content",
      description: `Opening editor for content #${id}`,
    });
  };

  const handleShareContent = (id: number) => {
    toast({
      title: "Share content",
      description: `Sharing content #${id} to connected platforms`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-curator-darkBlue">Welcome to your Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your content and social media posts</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/create-content">
                <Button className="bg-curator-purple hover:bg-curator-purple/90">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create New Content
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Content Stats</CardTitle>
                <CardDescription>Your content performance summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Published</p>
                    <p className="text-2xl font-bold text-curator-darkBlue">12</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Scheduled</p>
                    <p className="text-2xl font-bold text-curator-darkBlue">3</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Drafts</p>
                    <p className="text-2xl font-bold text-curator-darkBlue">5</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="text-2xl font-bold text-curator-darkBlue">20</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Engagement</CardTitle>
                <CardDescription>Interaction across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Dev.to</span>
                    <span className="text-sm font-medium">542 views</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Reddit</span>
                    <span className="text-sm font-medium">218 upvotes</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Mastodon</span>
                    <span className="text-sm font-medium">127 boosts</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Platform Activity</CardTitle>
                <CardDescription>Connected platforms status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm">Dev.to</span>
                    </div>
                    <span className="text-xs text-gray-500">Connected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm">Reddit</span>
                    </div>
                    <span className="text-xs text-gray-500">Connected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm">Mastodon</span>
                    </div>
                    <span className="text-xs text-gray-500">Connected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm">Hashnode</span>
                    </div>
                    <Link to="/profile" className="text-xs text-curator-purple hover:underline">Connect</Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-curator-darkBlue">Your Content</h2>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="published">Published</TabsTrigger>
                  <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                  <TabsTrigger value="drafts">Drafts</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="space-y-4">
                {isLoading ? (
                  <div className="text-center py-10">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-curator-purple mx-auto"></div>
                    <p className="mt-4 text-gray-500">Loading your content...</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contentItems.map((item) => (
                      <ContentCard
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        date={item.date}
                        platforms={item.platforms}
                        status={item.status}
                        onEdit={() => handleEditContent(item.id)}
                        onShare={() => handleShareContent(item.id)}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="published">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contentItems
                    .filter(item => item.status === 'published')
                    .map((item) => (
                      <ContentCard
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        date={item.date}
                        platforms={item.platforms}
                        status={item.status}
                        onEdit={() => handleEditContent(item.id)}
                        onShare={() => handleShareContent(item.id)}
                      />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="scheduled">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contentItems
                    .filter(item => item.status === 'scheduled')
                    .map((item) => (
                      <ContentCard
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        date={item.date}
                        platforms={item.platforms}
                        status={item.status}
                        onEdit={() => handleEditContent(item.id)}
                        onShare={() => handleShareContent(item.id)}
                      />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="drafts">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contentItems
                    .filter(item => item.status === 'draft')
                    .map((item) => (
                      <ContentCard
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        date={item.date}
                        platforms={item.platforms}
                        status={item.status}
                        onEdit={() => handleEditContent(item.id)}
                        onShare={() => handleShareContent(item.id)}
                      />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
