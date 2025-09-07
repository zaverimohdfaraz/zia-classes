// import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Clock, 
  BookOpen, 
  DollarSign,
  GraduationCap,
  Target,
  Heart,
  Star,
  Award,
  CheckCircle,
  Calendar,
  PlayCircle
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Expert Faculty with 10+ Years Experience',
      description: 'Our qualified teachers bring decades of teaching experience and deep subject knowledge to help every student excel.',
      features: ['Subject Matter Experts', 'Proven Teaching Methods', 'Regular Training & Updates', 'Student-Centric Approach']
    },
    {
      icon: DollarSign,
      title: 'Flexible Fees & Installment Options',
      description: 'We believe quality education should be accessible. Multiple payment options and installment plans available.',
      features: ['Monthly Installments', 'Family Discounts', 'Scholarship Programs', 'No Hidden Charges']
    },
    {
      icon: Heart,
      title: 'Personal Attention to Every Student',
      description: 'Small batch sizes ensure every child gets individual attention and personalized learning support.',
      features: ['Small Class Sizes', 'One-on-One Guidance', 'Regular Progress Tracking', 'Parent Feedback Sessions']
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Study Material',
      description: 'Complete study resources available for in-premises study, ensuring students have all materials they need.',
      features: ['Subject-wise Notes', 'Practice Questions', 'Reference Books', 'Digital Resources']
    },
    {
      icon: Clock,
      title: 'Flexible Timing & Extra Support',
      description: 'Convenient timing options with additional support during exam periods to ensure student success.',
      features: ['Multiple Time Slots', 'Weekend Classes', 'Exam Period Support', 'Make-up Classes']
    },
    {
      icon: PlayCircle,
      title: 'Audio-Video Teaching Methods',
      description: 'Modern teaching techniques using multimedia content to make learning engaging and effective.',
      features: ['Visual Learning', 'Interactive Content', 'Digital Presentations', 'Concept Videos']
    }
  ];

  const achievements = [
    { number: '10+', label: 'Years of Excellence', icon: Award },
    { number: '500+', label: 'Students Guided', icon: Users },
    { number: '100%', label: 'Result Oriented', icon: Target },
    { number: '3', label: 'Medium Options', icon: BookOpen }
  ];

  const testimonialHighlights = [
    {
      quote: "My daughter improved from 60% to 85% in one year. Zia Classes really cares about each student.",
      author: "Mrs. Khan",
      highlight: "25% Improvement"
    },
    {
      quote: "The teachers explained concepts with patience. Best decision for my son's education.",
      author: "Mr. Shaikh", 
      highlight: "Patient Teaching"
    },
    {
      quote: "Flexible timing helped us manage our schedule perfectly. Highly recommended!",
      author: "Mrs. Patel",
      highlight: "Flexible Schedule"
    }
  ];

  const specialPrograms = [
    {
      title: 'Weak Student Special Program',
      description: 'Dedicated attention for students who need extra support',
      features: ['Remedial Classes', 'Basic Concept Building', 'Confidence Building', 'Progress Monitoring']
    },
    {
      title: 'Exam Preparation Intensive',
      description: 'Focused preparation during exam periods',
      features: ['Extended Hours', 'Practice Tests', 'Revision Sessions', 'Stress Management']
    },
    {
      title: 'Multi-Medium Support',
      description: 'Quality education in English, Hindi, and Urdu',
      features: ['Native Language Comfort', 'Cultural Understanding', 'Inclusive Environment', 'Language Development']
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* <Badge variant="outline" className="text-primary border-primary mb-4">
            Why Choose Us
          </Badge> */}
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Why Parents Trust{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Zia Classes
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over 10 years of proven excellence in education. We don't just teach - we nurture, 
            guide, and transform students into confident learners.
          </p>
        </div>

        {/* Key Achievements */}
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-strong">
                <CardContent className="p-8">
                  <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-muted-foreground font-medium">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Reasons */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground">Six compelling reasons why families choose Zia Classes</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-all duration-300 shadow-soft hover:shadow-strong">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">{reason.title}</CardTitle>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {reason.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Special Programs */}
        <section className="mb-16 bg-gradient-to-r from-primary-light to-background p-8 rounded-2xl border border-primary/10">
          <div className="text-center mb-12">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Special Programs</h2>
            <p className="text-lg text-muted-foreground">Tailored programs to meet every student's unique needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="bg-background/50 border-primary/20 shadow-soft">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg text-foreground">{program.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonial Highlights */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Parents Say</h2>
            <p className="text-lg text-muted-foreground">Real feedback from families who trust us</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialHighlights.map((testimonial, index) => (
              <Card key={index} className="text-center border-2 border-muted shadow-soft hover:shadow-strong transition-all">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {/* <Badge variant="secondary" className="bg-success/10 text-success">
                      {testimonial.highlight}
                    </Badge> */}
                  </div>
                  <blockquote className="text-foreground italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm text-muted-foreground font-medium">
                    - {testimonial.author}
                  </div>
                  <div className="flex justify-center mt-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Promise */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground p-12 text-center shadow-strong">
            <CardContent className="space-y-6">
              <h2 className="text-4xl font-bold mb-4">Our Promise to You</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                We promise to treat every child as our own, providing not just education but mentorship, 
                care, and guidance to help them reach their full potential.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <Target className="w-12 h-12 mx-auto mb-3 opacity-90" />
                  <h3 className="text-lg font-semibold mb-2">100% Commitment</h3>
                  <p className="opacity-80">Every student matters to us</p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 mx-auto mb-3 opacity-90" />
                  <h3 className="text-lg font-semibold mb-2">Personal Care</h3>
                  <p className="opacity-80">Individual attention guaranteed</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-3 opacity-90" />
                  <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                  <p className="opacity-80">Track record of success</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-muted/30 p-12 rounded-2xl">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Experience the Zia Classes Difference
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied families. Book a free demo class today and see why parents choose us for their children's education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Demo Class
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => window.open('tel:9930308817')}
            >
              <Users className="w-5 h-5 mr-2" />
              Speak to Our Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;