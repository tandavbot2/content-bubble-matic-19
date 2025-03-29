
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MessageSquare, Share2, Edit } from 'lucide-react';

interface ContentCardProps {
  title: string;
  content: string;
  date: string;
  platforms: string[];
  status: 'draft' | 'scheduled' | 'published';
  onEdit?: () => void;
  onShare?: () => void;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  content,
  date,
  platforms,
  status,
  onEdit,
  onShare
}) => {
  // Status color mapping
  const statusColors = {
    draft: 'bg-yellow-100 text-yellow-800',
    scheduled: 'bg-blue-100 text-blue-800',
    published: 'bg-green-100 text-green-800'
  };
  
  return (
    <Card className="content-card">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge className={statusColors[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        <CardDescription className="flex items-center text-xs text-gray-500 mt-1">
          <Clock className="h-3 w-3 mr-1" />
          {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700 line-clamp-3">
          {content}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {platforms.map((platform, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {platform}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between">
        <Button variant="outline" size="sm" onClick={onEdit} className="text-xs">
          <Edit className="h-3 w-3 mr-1" />
          Edit
        </Button>
        <Button variant="outline" size="sm" onClick={onShare} className="text-xs">
          <Share2 className="h-3 w-3 mr-1" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
