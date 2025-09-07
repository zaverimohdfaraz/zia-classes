// import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Globe,
  Calculator,
  FlaskConical,
  Map,
  Scroll,
  DollarSign,
  Languages,
  GraduationCap,
  Star
} from 'lucide-react';

const Courses = () => {
  const classLevels = [
    {
      level: 'Nursery - 2nd Standard',
      description: 'Foundation building with play-way methods',
      subjects: ['Basic English', 'Basic Hindi', 'Basic Mathematics', 'Drawing', 'General Knowledge'],
      highlight: 'Play-way Learning',
      color: 'success'
    },
    {
      level: '3rd - 5th Standard',
      description: 'Skill development and concept building',
      subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'General Knowledge'],
      highlight: 'Concept Building',
      color: 'trust'
    },
    {
      level: '6th - 8th Standard',
      description: 'Subject specialization begins',
      subjects: ['English', 'Hindi', 'Marathi', 'Mathematics', 'Science', 'History', 'Geography'],
      highlight: 'Subject Focus',
      color: 'accent'
    },
    {
      level: '9th - 10th Standard',
      description: 'Board exam preparation',
      subjects: ['English', 'Hindi', 'Marathi', 'Mathematics', 'Science', 'History', 'Geography', 'Political Science', 'Economics'],
      highlight: 'Board Ready',
      color: 'primary'
    }
  ];

  const subjects = [
    { name: 'English', icon: BookOpen, description: 'Grammar, Literature & Communication' },
    { name: 'Hindi', icon: Languages, description: 'व्याकरण, साहित्य और भाषा कौशल' },
    { name: 'Marathi', icon: Languages, description: 'व्याकरण, साहित्य आणि भाषा कौशल्य' },
    { name: 'Urdu', icon: Languages, description: 'قواعد، ادب اور زبان کی مہارت' },
    { name: 'Mathematics', icon: Calculator, description: 'From basics to advanced problem solving' },
    { name: 'Science', icon: FlaskConical, description: 'Physics, Chemistry & Biology concepts' },
    { name: 'History', icon: Scroll, description: 'Past events and civilizations' },
    { name: 'Geography', icon: Map, description: 'World knowledge and map skills' },
    { name: 'Political Science', icon: Users, description: 'Government systems and civics' },
    { name: 'Economics', icon: DollarSign, description: 'Economic concepts and applications' }
  ];

  const mediums = [
    {
      name: 'English Medium',
      description: 'Complete syllabus in English language',
      icon: Globe,
      features: ['CBSE/ICSE/State Board', 'Modern teaching methods', 'International standards']
    },
    {
      name: 'Hindi Medium',
      description: 'हिंदी माध्यम में संपूर्ण शिक्षा',
      icon: Languages,
      features: ['राज्य बोर्ड पाठ्यक्रम', 'स्थानीय भाषा में समझ', 'सांस्कृतिक मूल्य']
    },
    {
      name: 'Urdu Medium',
      description: 'اردو میں مکمل تعلیم',
      icon: Languages,
      features: ['ریاستی بورڈ نصاب', 'مادری زبان میں سمجھ', 'ثقافتی اقدار']
    }
  ];

  const specialFeatures = [
    'Personal attention to every student',
    'Audio-video teaching methods',
    'Study material for in-premises study',
    'Flexible timing options',
    'Extra hours during exams',
    'Weekend classes available',
    'Regular assessments and feedback',
    'Parent-teacher interaction sessions'
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* <Badge variant="outline" className="text-primary border-primary mb-4">
            Our Courses
          </Badge> */}
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Comprehensive Education{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              for Every Level
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From Nursery to 10th Standard across English, Hindi, and Urdu mediums. 
            Quality education tailored to each student's needs and learning pace.
          </p>
        </div>

        {/* Medium Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Available in Multiple Mediums</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mediums.map((medium, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors shadow-soft hover:shadow-strong">
                <CardHeader className="text-center pb-4">
                  <medium.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{medium.name}</CardTitle>
                  <p className="text-muted-foreground">{medium.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {medium.features.map((feature, idx) => (
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

        {/* Class Levels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Classes We Offer</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {classLevels.map((classLevel, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-strong">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-foreground">{classLevel.level}</CardTitle>
                    {/* <Badge variant="secondary" className={`bg-${classLevel.color}/10 text-${classLevel.color}`}>
                      {classLevel.highlight}
                    </Badge> */}
                  </div>
                  <p className="text-muted-foreground">{classLevel.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">Subjects Covered:</h4>
                  {/* <div className="flex flex-wrap gap-2">
                    {classLevel.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    )
                    )}
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Subjects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">All Subjects We Teach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="text-center border-none shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <subject.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{subject.name}</h3>
                  <p className="text-sm text-muted-foreground">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Special Features */}
        <section className="mb-16 bg-gradient-to-r from-primary-light to-background p-8 rounded-2xl border border-primary/10">
          <div className="text-center mb-8">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">What Makes Our Teaching Special</h2>
            <p className="text-lg text-muted-foreground">Why parents trust us with their children's education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Timing Information */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 shadow-strong">
              <CardHeader className="text-center pb-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Flexible Timing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Monday - Saturday</span>
                  <span className="text-primary font-semibold">2:00 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Sunday</span>
                  <span className="text-primary font-semibold">10:00 AM - 5:00 PM</span>
                </div>
                <div className="bg-success/10 p-4 rounded-lg mt-4">
                  <p className="text-success font-medium text-center">Extra hours available during exams!</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Admission Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Free Demo Class</h4>
                    <p className="text-muted-foreground">Experience our teaching methodology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Student Assessment</h4>
                    <p className="text-muted-foreground">Understanding current academic level</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Personalized Plan</h4>
                    <p className="text-muted-foreground">Custom learning path for your child</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Enrollment</h4>
                    <p className="text-muted-foreground">Flexible fee options available</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full" onClick={() => window.location.href = '/contact'}>
                Book Free Demo Class
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-primary p-12 rounded-2xl text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Child's Learning Journey?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of families who trust Zia Classes for quality education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              Enroll Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.open('tel:9930308817')}
            >
              Call for Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;