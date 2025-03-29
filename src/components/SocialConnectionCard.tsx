
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Twitter, MessageSquare, Rss, Globe } from 'lucide-react';

interface SocialConnectionCardProps {
  platform: string;
  username: string;
  isConnected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

const SocialConnectionCard: React.FC<SocialConnectionCardProps> = ({
  platform,
  username,
  isConnected,
  onConnect,
  onDisconnect
}) => {
  // Platform-specific icon
  const getIcon = () => {
    switch (platform.toLowerCase()) {
      case 'twitter':
      case 'x':
        return <Twitter className="h-6 w-6" />;
      case 'dev.to':
      case 'dev':
        return <MessageSquare className="h-6 w-6" />;
      case 'reddit':
        return <Rss className="h-6 w-6" />;
      case 'mastodon':
        return <Globe className="h-6 w-6" />;
      default:
        return <Globe className="h-6 w-6" />;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-2 flex flex-row items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-curator-lightPurple flex items-center justify-center text-curator-purple">
          {getIcon()}
        </div>
        <div>
          <CardTitle className="text-lg">{platform}</CardTitle>
          {isConnected && (
            <CardDescription className="text-sm">{username}</CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        {isConnected ? (
          <Badge className="bg-green-100 text-green-800 mb-2">Connected</Badge>
        ) : (
          <Badge variant="outline" className="mb-2">Not Connected</Badge>
        )}
        <p className="text-sm text-gray-600">
          {isConnected 
            ? `Your ${platform} account is successfully connected.` 
            : `Connect your ${platform} account to start sharing content.`}
        </p>
      </CardContent>
      <CardFooter>
        {isConnected ? (
          <Button 
            variant="outline" 
            className="w-full text-red-500 hover:text-red-700 hover:bg-red-50"
            onClick={onDisconnect}
          >
            Disconnect
          </Button>
        ) : (
          <Button 
            className="w-full bg-curator-purple hover:bg-curator-purple/90"
            onClick={onConnect}
          >
            Connect
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default SocialConnectionCard;
