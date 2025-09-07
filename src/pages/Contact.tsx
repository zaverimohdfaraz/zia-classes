import { useState } from 'react';
// import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram,
  MessageSquare,
  Send,
  User,
  GraduationCap,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    class: '',
    medium: '',
    message: ''
  });

  const contactInfo = {
    address: 'F-1, Kajupada Pipeline Rd, Pratibha Niwas Chawl, Kurla West, Mumbai, Maharashtra 400072',
    phones: ['9930308817', '8655499073', '8286190685'],
    email: 'ziaclasses2012@gmail.com',
    instagram: 'zia.classes'
  };

  const timings = [
    { day: 'Monday - Saturday', time: '2:00 PM - 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 5:00 PM' },
    { day: 'Exam Period', time: 'Extended Hours Available' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.studentName || !formData.parentName || !formData.phone || !formData.class) {
      toast({
        title: "Please fill required fields",
        description: "Student name, parent name, phone, and class are required.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `
🎓 *New Enrollment Inquiry - Zia Classes*

👨‍👩‍👧‍👦 *Student Details:*
• Student Name: ${formData.studentName}
• Parent Name: ${formData.parentName}
• Phone: ${formData.phone}
• Email: ${formData.email || 'Not provided'}

📚 *Academic Information:*
• Class: ${formData.class}
• Medium: ${formData.medium || 'Not specified'}

💬 *Message:*
${formData.message || 'No additional message'}

Please contact me for admission details and free demo class.
    `.trim();

    const whatsappUrl = `https://wa.me/919930308817?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Inquiry Sent!",
      description: "Your message has been sent via WhatsApp. We'll contact you soon!",
      variant: "default"
    });

    // Reset form
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      email: '',
      class: '',
      medium: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* <Badge variant="outline" className="text-primary border-primary mb-4">
            Get In Touch
          </Badge> */}
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Contact{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Zia Classes
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your child's educational journey? Contact us for a free demo class 
            or visit our center in Kurla West, Mumbai.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="shadow-strong border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                  Enrollment Inquiry
                </CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentName" className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        Student Name *
                      </Label>
                      <Input
                        id="studentName"
                        value={formData.studentName}
                        onChange={(e) => setFormData(prev => ({ ...prev, studentName: e.target.value }))}
                        placeholder="Enter student's full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => setFormData(prev => ({ ...prev, parentName: e.target.value }))}
                        placeholder="Enter parent's name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="Enter contact number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center">
                        <Mail className="w-4 h-4 mr-1" />
                        Email (Optional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Class/Standard *
                      </Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, class: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nursery">Nursery</SelectItem>
                          <SelectItem value="kg1">KG 1</SelectItem>
                          <SelectItem value="kg2">KG 2</SelectItem>
                          <SelectItem value="1st">1st Standard</SelectItem>
                          <SelectItem value="2nd">2nd Standard</SelectItem>
                          <SelectItem value="3rd">3rd Standard</SelectItem>
                          <SelectItem value="4th">4th Standard</SelectItem>
                          <SelectItem value="5th">5th Standard</SelectItem>
                          <SelectItem value="6th">6th Standard</SelectItem>
                          <SelectItem value="7th">7th Standard</SelectItem>
                          <SelectItem value="8th">8th Standard</SelectItem>
                          <SelectItem value="9th">9th Standard</SelectItem>
                          <SelectItem value="10th">10th Standard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Medium of Instruction</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, medium: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select medium" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="hindi">Hindi</SelectItem>
                          <SelectItem value="urdu">Urdu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Additional Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Any specific requirements or questions?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Inquiry via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address & Contact */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Visit Our Center
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground leading-relaxed">{contactInfo.address}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`)}
                  >
                    <MapPin className="w-4 h-4 mr-1" />
                    View on Map
                  </Button>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Contact Numbers</h4>
                  <div className="space-y-2">
                    {contactInfo.phones.map((phone, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start text-left p-0 h-auto"
                        onClick={() => window.open(`tel:${phone}`)}
                      >
                        <Phone className="w-4 h-4 mr-2 text-trust" />
                        <span className="font-medium">{phone}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    onClick={() => window.open(`mailto:${contactInfo.email}`)}
                    className="justify-start"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(`https://instagram.com/${contactInfo.instagram}`)}
                    className="justify-start"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Timings */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Class Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timings.map((timing, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{timing.day}</span>
                      <span className="text-primary font-semibold">{timing.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-success/10 rounded-lg">
                  <p className="text-success font-medium text-center text-sm">
                    💡 Extra hours available during exam periods for intensive preparation
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                size="lg"
                className="h-20 flex-col"
                onClick={() => window.open(`https://wa.me/91${contactInfo.phones[0]}`)}
              >
                <MessageSquare className="w-6 h-6 mb-1" />
                <span>WhatsApp</span>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="h-20 flex-col"
                onClick={() => window.open(`tel:${contactInfo.phones[0]}`)}
              >
                <Phone className="w-6 h-6 mb-1" />
                <span>Call Now</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-strong">
            <CardHeader>
              <CardTitle className="text-center">Find Us on Map</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Zia Classes Location</h3>
                  <p className="text-muted-foreground mb-4">Kurla West, Mumbai</p>
                  <Button onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`)}>
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;