import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  DollarSign, 
  TrendingUp,
  Calendar,
  CheckCircle
} from "lucide-react";

interface Trip {
  id: number;
  name: string;
  destination: string;
  date: string;
  budget: number;
  members: number;
  status: string;
  image: string;
}

interface QuickStatsProps {
  trips: Trip[];
  userRole: 'admin' | 'student';
}

const QuickStats = ({ trips, userRole }: QuickStatsProps) => {
  const activeTrips = trips.filter(trip => trip.status === 'active').length;
  const totalMembers = trips.reduce((sum, trip) => sum + trip.members, 0);
  const totalBudget = trips.reduce((sum, trip) => sum + trip.budget, 0);
  const upcomingTrips = trips.filter(trip => new Date(trip.date) > new Date()).length;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const stats = [
    {
      title: "Active Trips",
      value: activeTrips.toString(),
      icon: MapPin,
      description: "Currently running",
      trend: "+12%",
      color: "text-green-600"
    },
    {
      title: "Total Members",
      value: totalMembers.toString(),
      icon: Users,
      description: "Across all trips",
      trend: "+8%",
      color: "text-blue-600"
    },
    {
      title: "Total Budget",
      value: formatCurrency(totalBudget),
      icon: DollarSign,
      description: "Combined budget",
      trend: "+15%",
      color: "text-purple-600"
    },
    {
      title: "Upcoming",
      value: upcomingTrips.toString(),
      icon: Calendar,
      description: "Future trips",
      trend: "+3%",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        
        return (
          <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </p>
                </div>
                <Badge variant="outline" className="glass-button text-green-600">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default QuickStats;