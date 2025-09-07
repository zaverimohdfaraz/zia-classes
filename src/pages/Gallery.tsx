// import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users,
  BookOpen,
  Award,
  GraduationCap,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';

const Gallery = () => {
  // Gallery items with image paths
  const galleryItems = [
    {
      id: 1,
      title: 'Main Classroom',
      description: 'Spacious and well-lit classroom with modern teaching aids',
      category: 'Classroom',
      type: 'image',
      image: '/images/logo.jpg'
      
    },
    {
      id: 2,
      title: 'Audio-Visual Learning',
      description: 'Students engaged in multimedia learning session',
      category: 'Teaching Method',
      type: 'image',
      image: '/images/logo.jpg'
    },
    {
      id: 3,
      title: 'Study Material Display',
      description: 'Comprehensive study materials available for all subjects',
      category: 'Resources',
      type: 'image',
      image: '/images/logo.jpg'
    },
    {
      id: 4,
      title: 'Small Batch Teaching',
      description: 'Personal attention in small class sizes',
      category: 'Classroom',
      type: 'image',
      image: '/images/logo.jpg'
    },
    {
      id: 5,
      title: 'Board Exam Preparation',
      description: 'Intensive coaching session for 10th standard students',
      category: 'Events',
      type: 'image',
      image: '/images/logo.jpg'
    },
    {
      id: 6,
      title: 'Parent-Teacher Meeting',
      description: 'Regular interaction between parents and faculty',
      category: 'Events',
      type: 'image',
      image: '/images/logo.jpg'
    },
    {
      id: 7,
      title: 'Faculty Team',
      description: 'Our experienced and dedicated teaching staff',
      category: 'Faculty',
      type: 'image',
      image: '/images/logo.jpg'
    },
    {
      id: 8,
      title: 'Achievement Celebration',
      description: 'Celebrating student success and improvements',
      category: 'Events',
      type: 'image',
      image: '/images/logo.jpg'
    },
    {
      id: 9,
      title: 'Library Corner',
      description: 'Quiet study area with reference books',
      category: 'Facilities',
      type: 'image',
      image: '/images/logo.jpg'
    }
  ];

  const categories = [
    { name: 'All', count: galleryItems.length },
    { name: 'Classroom', count: galleryItems.filter(item => item.category === 'Classroom').length },
    { name: 'Events', count: galleryItems.filter(item => item.category === 'Events').length },
    { name: 'Facilities', count: galleryItems.filter(item => item.category === 'Facilities').length },
    { name: 'Faculty', count: galleryItems.filter(item => item.category === 'Faculty').length }
  ];

  const highlights = [
    {
      icon: Users,
      title: 'Small Class Environment',
      description: 'Maximum 15 students per batch for personalized attention'
    },
    {
      icon: BookOpen,
      title: 'Modern Teaching Methods',
      description: 'Audio-visual aids and interactive learning sessions'
    },
    {
      icon: Award,
      title: 'Achievement Recognition',
      description: 'Regular celebrations of student improvements and success'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Multiple slots available including weekend classes'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Inside{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Zia Classes
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our learning environment. See our classrooms, 
            teaching methods, and the vibrant community of learners.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="rounded-full"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-soft hover:shadow-strong">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Highlights Section */}
        <section className="mb-16 bg-gradient-to-r from-primary-light to-background p-8 rounded-2xl border border-primary/10">
          <div className="text-center mb-12">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">What You'll Experience</h2>
            <p className="text-lg text-muted-foreground">The Zia Classes learning environment at a glance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center bg-background/50 border-primary/20 shadow-soft hover:shadow-strong transition-all">
                <CardContent className="p-6">
                  <highlight.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="mb-16">
          <Card className="bg-muted/30 border-2 border-dashed border-primary/30">
            <CardContent className="p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Visit Our Center
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Pictures can only show so much. We invite you to visit our center in Kurla West 
                  to experience our learning environment firsthand and meet our dedicated faculty.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Visit Timings</h4>
                    <p className="text-sm text-muted-foreground">Mon-Sat: 2:00 PM - 9:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sun: 10:00 AM - 5:00 PM</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Free Demo Class</h4>
                    <p className="text-sm text-muted-foreground">Book a session to experience</p>
                    <p className="text-sm text-muted-foreground">our teaching methods</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Schedule a Visit
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('tel:9930308817')}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Call for Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Address Information */}
        <div className="text-center bg-primary p-12 rounded-2xl text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">
            Find Us in Kurla West
          </h3>
          <p className="text-xl mb-6 opacity-90">
            F-1, Kajupada Pipeline Rd, Pratibha Niwas Chawl, Kurla West, Mumbai, Maharashtra 400072
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent('F-1, Kajupada Pipeline Rd, Pratibha Niwas Chawl, Kurla West, Mumbai, Maharashtra 400072')}`)}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Open in Maps
            </Button>
            <Button 
               size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => window.open(`https://wa.me/919930308817`)}
            >
              <Users className="w-5 h-5 mr-2" />
              WhatsApp Directions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
