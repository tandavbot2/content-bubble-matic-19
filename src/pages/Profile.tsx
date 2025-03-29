
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import SocialConnectionCard from '@/components/SocialConnectionCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, Settings, Key, Save } from 'lucide-react';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [isLoading, setIsLoading] = useState(false);
  const [socialAccounts, setSocialAccounts] = useState([
    { id: 1, platform: 'Dev.to', username: 'johndoe', isConnected: true },
    { id: 2, platform: 'Reddit', username: 'jdoe_dev', isConnected: true },
    { id: 3, platform: 'Mastodon', username: '@johndoe', isConnected: false },
    { id: 4, platform: 'Hashnode', username: '', isConnected: false }
  ]);
  
  const { toast } = useToast();

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
    }, 1500);
  };

  const handleConnect = (platformId: number) => {
    // Simulate connection process
    const updatedAccounts = socialAccounts.map(account => {
      if (account.id === platformId) {
        toast({
          title: "Connecting to " + account.platform,
          description: "You will be redirected to authenticate with " + account.platform,
        });
        
        // Simulate successful connection after delay
        setTimeout(() => {
          setSocialAccounts(
            socialAccounts.map(acc => 
              acc.id === platformId ? { ...acc, isConnected: true, username: acc.username || `user_${account.platform.toLowerCase()}` } : acc
            )
          );
          
          toast({
            title: "Connected successfully",
            description: `Your ${account.platform} account has been connected.`,
          });
        }, 2000);
        
        return account;
      }
      return account;
    });
    
    setSocialAccounts(updatedAccounts);
  };

  const handleDisconnect = (platformId: number) => {
    const platform = socialAccounts.find(acc => acc.id === platformId)?.platform;
    
    toast({
      title: "Disconnecting",
      description: `Removing connection to ${platform}.`,
    });
    
    // Simulate disconnection process
    setTimeout(() => {
      setSocialAccounts(
        socialAccounts.map(acc => 
          acc.id === platformId ? { ...acc, isConnected: false } : acc
        )
      );
      
      toast({
        title: "Disconnected",
        description: `Your ${platform} account has been disconnected.`,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-curator-darkBlue">Profile Settings</h1>
            <p className="text-gray-600 mt-1">Manage your account and connected platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-curator-lightPurple flex items-center justify-center text-curator-purple">
                      <User className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle>{name}</CardTitle>
                      <CardDescription>{email}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Account Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Preferences
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Key className="h-4 w-4 mr-2" />
                      API Keys
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="connections">Social Connections</TabsTrigger>
                </TabsList>
                
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Account Information</CardTitle>
                      <CardDescription>Update your personal details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleProfileUpdate}>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Full Name</Label>
                              <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="bio">Bio</Label>
                            <textarea
                              id="bio"
                              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-curator-purple focus:border-transparent"
                              rows={4}
                              placeholder="Tell us about yourself"
                            ></textarea>
                          </div>
                          
                          <div className="pt-2">
                            <Button 
                              type="submit" 
                              className="bg-curator-purple hover:bg-curator-purple/90"
                              disabled={isLoading}
                            >
                              {isLoading ? (
                                <>
                                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                  Saving...
                                </>
                              ) : (
                                <>
                                  <Save className="h-4 w-4 mr-2" />
                                  Save Changes
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Change Password</CardTitle>
                      <CardDescription>Update your password</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input
                              id="current-password"
                              type="password"
                              className="mt-1"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="new-password">New Password</Label>
                            <Input
                              id="new-password"
                              type="password"
                              className="mt-1"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input
                              id="confirm-password"
                              type="password"
                              className="mt-1"
                            />
                          </div>
                          
                          <div className="pt-2">
                            <Button variant="outline">
                              Update Password
                            </Button>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="connections">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Connected Platforms</CardTitle>
                      <CardDescription>Manage your social media connections</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {socialAccounts.map((account) => (
                          <SocialConnectionCard
                            key={account.id}
                            platform={account.platform}
                            username={account.username}
                            isConnected={account.isConnected}
                            onConnect={() => handleConnect(account.id)}
                            onDisconnect={() => handleDisconnect(account.id)}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-lg">API Keys</CardTitle>
                      <CardDescription>Configure API integrations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="deepseek-api">Deepseek API Key</Label>
                          <div className="flex mt-1">
                            <Input
                              id="deepseek-api"
                              type="password"
                              placeholder="Enter your Deepseek API key"
                              className="rounded-r-none"
                            />
                            <Button variant="outline" className="rounded-l-none border-l-0">
                              Save
                            </Button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Required for AI content generation
                          </p>
                        </div>
                        
                        <div>
                          <Label htmlFor="news-api">News API Key</Label>
                          <div className="flex mt-1">
                            <Input
                              id="news-api"
                              type="password"
                              placeholder="Enter your News API key"
                              className="rounded-r-none"
                            />
                            <Button variant="outline" className="rounded-l-none border-l-0">
                              Save
                            </Button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Required for fetching tech news
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
