// import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Star,
  Quote,
  User,
  GraduationCap,
  TrendingUp,
  Heart,
  Award,
  Users
} from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mrs. Fatima Khan',
      relation: 'Mother of Ayesha Khan (7th Standard)',
      rating: 5,
      quote: 'My daughter improved from 60% to 85% in one year. Zia Classes really cares about each student and provides individual attention. The teachers are very patient and understanding.',
      improvement: '60% → 85%',
      subject: 'Overall Performance',
      year: '2023'
    },
    {
      name: 'Mr. Abdul Shaikh',
      relation: 'Father of Mohammad Shaikh (9th Standard)',
      rating: 5,
      quote: 'The teachers explained concepts with patience and clarity. My son was struggling with Mathematics, but now he enjoys solving problems. Best decision for my son\'s education.',
      improvement: 'Mathematics Confidence',
      subject: 'Mathematics',
      year: '2023'
    },
    {
      name: 'Mrs. Sunita Patel',
      relation: 'Mother of Ravi Patel (5th Standard)',
      rating: 5,
      quote: 'Flexible timing helped us manage our schedule perfectly. The audio-video teaching method makes learning so interesting for children. Highly recommended!',
      improvement: 'Better Understanding',
      subject: 'Science & Mathematics',
      year: '2022'
    },
    {
      name: 'Mr. Rashid Ahmed',
      relation: 'Father of Zara Ahmed (8th Standard)',
      rating: 5,
      quote: 'Zia Classes focuses on weak students like my daughter. The extra attention and care they provide is remarkable. She now feels confident about her studies.',
      improvement: 'Confidence Building',
      subject: 'English & Hindi',
      year: '2023'
    },
    {
      name: 'Mrs. Priya Sharma',
      relation: 'Mother of Arjun Sharma (10th Standard)',
      rating: 5,
      quote: 'The board exam preparation was excellent. Teachers provided extra classes during exam time and my son scored 88% in his boards. Thank you Zia Classes!',
      improvement: '88% in Board Exams',
      subject: 'Board Preparation',
      year: '2023'
    },
    {
      name: 'Mr. Salman Qureshi',
      relation: 'Father of Hina Qureshi (6th Standard)',
      rating: 5,
      quote: 'Teaching in Urdu medium was exactly what we needed. My daughter feels comfortable learning in her mother tongue and her grades have improved significantly.',
      improvement: 'Language Comfort',
      subject: 'Urdu Medium',
      year: '2022'
    },
    {
      name: 'Mrs. Neha Joshi',
      relation: 'Mother of Kavya Joshi (4th Standard)',
      rating: 5,
      quote: 'The study material provided is comprehensive and easy to understand. Teachers make sure every child grasps the concept before moving forward.',
      improvement: 'Concept Clarity',
      subject: 'All Subjects',
      year: '2023'
    },
    {
      name: 'Mr. Imran Ali',
      relation: 'Father of Aaliya Ali (9th Standard)',
      rating: 5,
      quote: 'Affordable fees with installment options made quality education accessible for us. The value for money is incredible. Truly grateful to Zia Classes.',
      improvement: 'Academic Excellence',
      subject: 'Science Stream',
      year: '2023'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Students', icon: Users },
    { number: '95%', label: 'Parent Satisfaction', icon: Heart },
    { number: '85%', label: 'Average Improvement', icon: TrendingUp },
    { number: '10+', label: 'Years Trusted', icon: Award }
  ];

  const successStories = [
    {
      title: 'From Struggling to Excelling',
      story: 'Ayesha Khan joined us in 6th standard with poor grades. Through personalized attention and innovative teaching methods, she now consistently scores above 80% and has developed a love for learning.',
      student: 'Ayesha Khan',
      achievement: '25% Grade Improvement'
    },
    {
      title: 'Mathematics Phobia Overcome',
      story: 'Mohammad Shaikh was afraid of mathematics and used to score poorly. Our patient teachers and audio-visual methods helped him understand concepts clearly. Now he enjoys solving math problems.',
      student: 'Mohammad Shaikh',
      achievement: 'Mathematics Excellence'
    },
    {
      title: 'Board Exam Success',
      story: 'Arjun Sharma came to us in 9th standard for board preparation. With our intensive coaching and extra support during exams, he scored 88% in his 10th board exams.',
      student: 'Arjun Sharma',
      achievement: '88% in Boards'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* <Badge variant="outline" className="text-primary border-primary mb-4">
            Testimonials
          </Badge> */}
          <h1 className="text-5xl font-bold text-foreground mb-6">
            What Our{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Families Say
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from real families. Discover how Zia Classes has transformed 
            the educational journey of hundreds of students across Mumbai.
          </p>
        </div>

        {/* Statistics */}
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-strong">
                <CardContent className="p-8">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stories Highlights */}
        <section className="mb-16 bg-gradient-to-r from-primary-light to-background p-8 rounded-2xl border border-primary/10">
          <div className="text-center mb-12">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">Transformative journeys of our students</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-background/50 border-primary/20 shadow-soft hover:shadow-strong transition-all">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    {/* <Badge variant="secondary" className="bg-success/10 text-success mb-2">
                      {story.achievement}
                    </Badge> */}
                    <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {story.story}
                  </p>
                  <div className="text-center text-sm font-medium text-primary">
                    - {story.student}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Parent Reviews</h2>
            <p className="text-lg text-muted-foreground">Honest feedback from families who trust us</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-all duration-300 shadow-soft hover:shadow-strong">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-accent fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Achievement Badge */}
                  <div className="flex justify-between items-center">
                    <div>
                      {/* <Badge variant="outline" className="text-success border-success/50 bg-success/10">
                        {testimonial.improvement}
                      </Badge> */}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{testimonial.subject}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.year}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Video Testimonials Placeholder */}
        <section className="mb-16">
          <Card className="bg-muted/30 border-2 border-dashed border-primary/30">
            <CardContent className="p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  More Happy Families Every Day
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  We're constantly receiving positive feedback from parents who see real improvements in their children's academic performance and confidence.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-muted-foreground">Students Taught</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success">95%</div>
                    <div className="text-muted-foreground">Satisfied Parents</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-trust">10+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-primary p-12 rounded-2xl text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Happy Family of Students
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the same success and satisfaction that hundreds of families have found at Zia Classes. 
            Your child's bright future starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact'}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Start Your Success Story
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.open('tel:9930308817')}
            >
              <Star className="w-5 h-5 mr-2" />
              Speak to Happy Parents
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;