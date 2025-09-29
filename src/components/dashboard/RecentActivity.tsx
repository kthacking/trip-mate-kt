import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Vote, 
  DollarSign, 
  CheckCircle, 
  UserPlus,
  Camera,
  MapPin,
  Clock
} from "lucide-react";

const RecentActivity = () => {
  // Mock activity data - replace with real data from your database
  const activities = [
    {
      id: 1,
      type: 'message',
      user: 'Rahul Sharma',
      action: 'sent a message in',
      target: 'Goa Beach Trip',
      time: '2 minutes ago',
      avatar: '/placeholder.svg',
      icon: MessageCircle,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'vote',
      user: 'Priya Patel',
      action: 'voted for',
      target: 'Hotel selection in Delhi',
      time: '15 minutes ago',
      avatar: '/placeholder.svg',
      icon: Vote,
      color: 'text-purple-600'
    },
    {
      id: 3,
      type: 'payment',
      user: 'Amit Kumar',
      action: 'made payment for',
      target: 'Goa Beach Trip',
      time: '1 hour ago',
      avatar: '/placeholder.svg',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      id: 4,
      type: 'task',
      user: 'Sneha Gupta',
      action: 'completed task',
      target: 'Book transport tickets',
      time: '2 hours ago',
      avatar: '/placeholder.svg',
      icon: CheckCircle,
      color: 'text-emerald-600'
    },
    {
      id: 5,
      type: 'member',
      user: 'Vikash Singh',
      action: 'joined',
      target: 'Delhi Heritage Tour',
      time: '3 hours ago',
      avatar: '/placeholder.svg',
      icon: UserPlus,
      color: 'text-orange-600'
    },
    {
      id: 6,
      type: 'photo',
      user: 'Anita Reddy',
      action: 'uploaded photos to',
      target: 'Goa Beach Trip gallery',
      time: '4 hours ago',
      avatar: '/placeholder.svg',
      icon: Camera,
      color: 'text-pink-600'
    },
    {
      id: 7,
      type: 'trip',
      user: 'Admin',
      action: 'created new trip',
      target: 'Shimla Hill Station',
      time: '1 day ago',
      avatar: '/placeholder.svg',
      icon: MapPin,
      color: 'text-indigo-600'
    }
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            
            return (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={activity.avatar} />
                  <AvatarFallback>
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium">{activity.user}</span>
                    <span className="text-muted-foreground">{activity.action}</span>
                    <span className="font-medium text-primary">{activity.target}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      <Icon className={`h-3 w-3 mr-1 ${activity.color}`} />
                      {activity.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
                
                <Icon className={`h-5 w-5 ${activity.color}`} />
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-sm text-primary hover:underline">
            View all activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;