import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Trophy, 
  BookOpen, 
  Star,
  Phone,
  MapPin,
  CheckCircle,
  Target
} from 'lucide-react';
// import heroImage from '@/assets/hero-classroom.jpg';

const Home = () => {
  const achievements = [
    { icon: GraduationCap, label: '10+ Years', description: 'Teaching Excellence' },
    { icon: Users, label: '500+', description: 'Students Guided' },
    { icon: Trophy, label: '100%', description: 'Result Oriented' },
    { icon: Clock, label: 'Flexible', description: 'Timing Options' }
  ];

  const features = [
    'Expert Faculty with 10+ Years Experience',
    'Personal Attention to Every Student',
    'Audio-Video Teaching Methods',
    'Study Material for In-Premises Study',
    'Extra Hours During Exams',
    'Classes Available on Sundays Too'
  ];

  const quickInfo = {
    phone: '9930308817',
    whatsapp: '9930308817',
    address: 'Kurla West, Mumbai'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-light via-background to-primary-light py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                {/* <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Since 2012 - Trusted by 500+ Families
                </Badge> */}
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Light for{' '}
                  <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    Bright Future
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Quality coaching from Nursery to 10th Standard. We provide personal attention to weak students with expert faculty and flexible timing options.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link to="/contact">
                    <Target className="w-5 h-5 mr-2" />
                    Book Free Demo
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(`tel:${quickInfo.phone}`)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1 text-trust" />
                  {quickInfo.phone}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-trust" />
                  {quickInfo.address}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                   src="/images/logo.jpg"
                  alt="Zia Classes - Quality Education Environment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Result Oriented</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-none shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {achievement.label}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {/* <Badge variant="outline" className="text-primary border-primary">
                About Zia Classes
              </Badge> */}
              <h2 className="text-4xl font-bold text-foreground">
                From Basics to{' '}
                <span className="text-primary">Brilliance</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established in 2012, Zia Classes has been a beacon of quality education in Kurla West, Mumbai. We specialize in providing personalized attention to students from Nursery to 10th Standard across English, Hindi, and Urdu mediums.
              </p>
              <div className="space-y-3">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="p-8 border-2 border-primary/20 shadow-strong">
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <Star className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h3 className="text-xl font-semibold">Our Specialties</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-primary-light rounded-lg">
                      <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-medium">All Subjects Covered</div>
                      <div className="text-sm text-muted-foreground">English, Hindi, Marathi, Urdu, Math, Science, History, Geography, Economics</div>
                    </div>
                    <div className="text-center p-4 bg-success/10 rounded-lg">
                      <Users className="w-6 h-6 text-success mx-auto mb-2" />
                      <div className="font-medium">Special Care for Weak Students</div>
                      <div className="text-sm text-muted-foreground">Individual attention and audio-video teaching</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Child's Success Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join 500+ families who trust Zia Classes for quality education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link to="/contact">
                <GraduationCap className="w-5 h-5 mr-2" />
                Get Free Demo Class
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
             className="text-lg px-8 py-6"
              onClick={() => window.open(`https://wa.me/91${quickInfo.whatsapp}`)}
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;