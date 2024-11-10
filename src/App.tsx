import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { AboutSection } from './components/AboutSection';
import { CalendarModal } from './components/CalendarModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cog, LineChart, Users } from 'lucide-react';
import { pageview } from './lib/analytics';

// Analytics wrapper
function AnalyticsWrapper() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  return null;
}

// Home page component
function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Transform Your Home Service Business
            <br />
            <span className="text-primary">With Smart Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We help home service businesses streamline operations, delight customers, and scale efficiently through strategic technology implementation.
          </p>
          <div className="flex gap-4 justify-center">
            <CalendarModal />
            <Button size="lg" variant="outline">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cog className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Process Automation</CardTitle>
                <CardDescription>
                  Streamline your operations with automated quoting, invoicing, and scheduling systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Digital quote generation</li>
                  <li>• Automated invoicing</li>
                  <li>• Smart scheduling</li>
                  <li>• Mobile-first solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Customer Management</CardTitle>
                <CardDescription>
                  Build stronger relationships with integrated CRM solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Customer history tracking</li>
                  <li>• Service reminders</li>
                  <li>• Communication tools</li>
                  <li>• Review management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <LineChart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Business Intelligence</CardTitle>
                <CardDescription>
                  Make data-driven decisions with powerful analytics tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Performance tracking</li>
                  <li>• Revenue analytics</li>
                  <li>• Customer insights</li>
                  <li>• Growth forecasting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <AboutSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <AnalyticsWrapper />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;