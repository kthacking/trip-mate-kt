import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  Edit, 
  Trash2, 
  Eye,
  Share,
  Heart
} from "lucide-react";

interface Trip {
  id: number;
  name: string;
  destination: string;
  date: string;
  budget: number;
  members: number;
  status: 'active' | 'planning' | 'completed' | 'cancelled';
  image: string;
}

interface TripCardProps {
  trip: Trip;
  userRole: 'admin' | 'student';
}

const TripCard = ({ trip, userRole }: TripCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-700 border-green-500/30';
      case 'planning': return 'bg-blue-500/20 text-blue-700 border-blue-500/30';
      case 'completed': return 'bg-purple-500/20 text-purple-700 border-purple-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-700 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-700 border-gray-500/30';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <Card className="glass-card hover:shadow-lg transition-all duration-300 group overflow-hidden">
      <div className="relative">
        {/* Trip Image */}
        <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-4 right-4 flex gap-2">
            <Badge className={`${getStatusColor(trip.status)} backdrop-blur-md`}>
              {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{trip.name}</h3>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{trip.destination}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(trip.date)}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{trip.members} Members</span>
          </div>
          
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{formatCurrency(trip.budget)}</span>
          </div>
        </div>

        {/* Member Avatars */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {Array.from({ length: Math.min(trip.members, 4) }).map((_, i) => (
              <Avatar key={i} className="w-6 h-6 border-2 border-background">
                <AvatarImage src={`/placeholder.svg`} />
                <AvatarFallback className="text-xs">
                  {String.fromCharCode(65 + i)}
                </AvatarFallback>
              </Avatar>
            ))}
            {trip.members > 4 && (
              <div className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                <span className="text-xs text-muted-foreground">+{trip.members - 4}</span>
              </div>
            )}
          </div>
          <span className="text-xs text-muted-foreground ml-2">and others</span>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 glass-button"
        >
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
        
        {userRole === 'admin' && (
          <>
            <Button 
              variant="outline" 
              size="sm" 
              className="glass-button"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="glass-button text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </>
        )}
        
        {userRole === 'student' && (
          <>
            <Button 
              variant="outline" 
              size="sm" 
              className="glass-button"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="glass-button"
            >
              <Share className="h-4 w-4" />
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default TripCard;