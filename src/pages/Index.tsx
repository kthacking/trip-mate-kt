import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign, 
  Vote, 
  CheckSquare, 
  MessageCircle, 
  Camera, 
  BarChart3,
  Plus,
  Settings,
  LogOut,
  Bell,
  Search
} from "lucide-react";
import AuthModal from "@/components/auth/AuthModal";
import TripCard from "@/components/trips/TripCard";
import QuickStats from "@/components/dashboard/QuickStats";
import RecentActivity from "@/components/dashboard/RecentActivity";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'student'>('student');
  const [activeTab, setActiveTab] = useState("trips");

  const trips = [
    {
      id: 1,
      name: "Goa Beach Trip",
      destination: "Goa, India",
      date: "2024-12-15",
      budget: 15000,
      members: 12,
      status: "active" as const,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Delhi Heritage Tour",
      destination: "Delhi, India", 
      date: "2024-11-20",
      budget: 8000,
      members: 8,
      status: "planning" as const,
      image: "/placeholder.svg"
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen hero-gradient flex items-center justify-center p-4">
        <div className="glass-card p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TripMate
            </h1>
            <p className="text-muted-foreground mt-2">College Trip Management System</p>
          </div>
          <AuthModal onLogin={(role) => { setIsLoggedIn(true); setUserRole(role); }} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card m-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TripMate
            </h1>
            <Badge variant="outline" className="glass-button">
              {userRole === 'admin' ? 'Administrator' : 'Student'}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search trips..." 
                className="pl-10 w-64 glass-card border-glass-border"
              />
            </div>
            <Button variant="outline" size="icon" className="glass-button">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="glass-button">
              <Settings className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="glass-button"
              onClick={() => setIsLoggedIn(false)}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Quick Stats */}
        <QuickStats trips={trips} userRole={userRole} />

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="glass-card p-1 grid grid-cols-8 w-full">
            <TabsTrigger value="trips" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Trips
            </TabsTrigger>
            <TabsTrigger value="votes" className="flex items-center gap-2">
              <Vote className="h-4 w-4" />
              Votes
            </TabsTrigger>
            <TabsTrigger value="budget" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Budget
            </TabsTrigger>
            <TabsTrigger value="checklist" className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4" />
              Tasks
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Reports
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trips" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Your Trips</h2>
              {userRole === 'admin' && (
                <Button className="mac-gradient text-white shadow-button hover:shadow-lg transition-all">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Trip
                </Button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trips.map((trip) => (
                <TripCard key={trip.id} trip={trip} userRole={userRole} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="votes" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Active Polls</CardTitle>
                <CardDescription>Vote on upcoming trip decisions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  Connect your database to see active polls
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budget" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Payment Tracking</CardTitle>
                <CardDescription>Manage trip payments and expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  Connect your database to track payments
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="checklist" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Trip Checklist</CardTitle>
                <CardDescription>Track preparation tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  Connect your database to manage tasks
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Group Chat</CardTitle>
                <CardDescription>Communicate with trip members</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  Connect your database for real-time chat
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Photo Gallery</CardTitle>
                <CardDescription>Share and view trip photos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  Connect your database to share photos
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Trip Reports</CardTitle>
                <CardDescription>Analytics and summaries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">
                  Connect your database to view reports
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <RecentActivity />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;