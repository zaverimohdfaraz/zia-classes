// import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Clock, 
  Target,
  Award,
  Heart,
  Lightbulb
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2012', event: 'Zia Classes Established' },
    { year: '2015', event: 'Expanded to Multiple Subjects' },
    { year: '2018', event: 'Introduced Audio-Video Teaching' },
    { year: '2020', event: 'Digital Learning Integration' },
    { year: '2023', event: '500+ Students Milestone Achieved' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'Every student receives individual attention and care, especially those who need extra support.'
    },
    {
      icon: Target,
      title: 'Result Oriented',
      description: '100% focused on achieving the best results for every student through dedicated teaching.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation in Teaching',
      description: 'We use modern audio-video methods and innovative techniques to make learning engaging.'
    },
    {
      icon: Clock,
      title: 'Flexible Approach',
      description: 'Flexible timing, extra hours during exams, and weekend classes to suit every need.'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* <Badge variant="outline" className="text-primary border-primary mb-4">
            Our Story
          </Badge> */}
          <h1 className="text-5xl font-bold text-foreground mb-6">
            From Basics to{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Brilliance
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2012, Zia Classes has been nurturing young minds in Kurla West, Mumbai. 
            Our journey began with a simple vision: to provide quality education with personal attention to every child.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary-light to-background p-8 rounded-2xl mb-16 border border-primary/10">
          <div className="text-center max-w-4xl mx-auto">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To illuminate the path of learning for every student, transforming academic challenges into achievements. 
              We believe that with the right guidance and personal attention, every child can shine bright and reach their full potential."
            </p>
          </div>
        </div>

        {/* Journey Timeline */}
        {/* <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">Over a decade of educational excellence</p>
          </div>
          
          <div className="relative">
          
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="inline-block shadow-soft hover:shadow-strong transition-all">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <div className="text-foreground font-medium">{milestone.event}</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Our Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">What drives us to deliver excellence every day</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Makes Us Special</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Special Care for Weak Students</h3>
                  <p className="text-muted-foreground">We identify struggling students early and provide additional support through personalized teaching methods and extra attention.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-trust" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Audio-Video Teaching</h3>
                  <p className="text-muted-foreground">Modern teaching methods using multimedia content to make complex concepts easy to understand and remember.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Expert Faculty</h3>
                  <p className="text-muted-foreground">Our teachers have 10+ years of experience and are dedicated to bringing out the best in every student.</p>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-primary-light to-background border-primary/20">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-foreground">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <div className="bg-background/50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-success">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-trust">100%</div>
                  <div className="text-sm text-muted-foreground">Dedicated Approach</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <div className="text-center bg-muted/30 p-12 rounded-2xl">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Join Our Learning Family?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the difference that personal attention and expert teaching can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('tel:9930308817')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Call for Free Consultation
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Visit Our Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;