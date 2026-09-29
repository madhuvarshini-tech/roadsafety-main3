/**
 * Safety Workshops TN — Centralized Bilingual Translation System
 * All user-visible text is managed here. Components read from this object.
 */
const I18N = {
  storageKey: 'swtn-lang',
  defaultLang: 'en',
  currentLang: 'en',

  translations: {
    en: {
      meta: {
        title: 'Road Minded Safety Solutions | Road Safety Solutions',
        description: 'Road Minded Safety Solutions offers road safety workshops, driver training, and corporate safety programmes across Tamil Nadu — view courses, register online, or contact us.',
        keywords: 'Road Minded Safety Solutions, road safety solutions, road safety training, driver training, corporate safety workshops, traffic safety, Tamil Nadu'
      },
      nav: {
        home: 'Home',
        workshops: 'Workshops / Courses',
        workshopsShort: 'Workshops',
        schedule: 'Schedule & Venues',
        scheduleShort: 'Schedule',
        trainers: 'Trainers',
        trainersShort: 'Trainers',
        resources: 'Safety Resources',
        resourcesShort: 'Resources',
        certificates: 'Certificates',
        certificatesShort: 'Certificates',
        about: 'About Us',
        aboutShort: 'About',
        contact: 'Contact Us',
        register: 'Register for Workshop',
        registerShort: 'Register',
        bookInPlant: 'Book In-Plant Training',
        menuToggle: 'Open navigation menu',
        menuClose: 'Close navigation menu',
        langSwitch: 'Switch to Tamil',
        langLabel: 'EN'
      },
      hero: {
        badge: 'Tamil Nadu Safety & Compliance Initiative',
        headline: 'Empowering Tamil Nadu Workplaces with World-Class Safety Training',
        subheadline: 'Industrial safety, fire safety, chemical hazard awareness, and workplace ergonomics workshops across Chennai, Coimbatore, Madurai, Tiruchirappalli, and major Tamil Nadu hubs.',
        ctaExplore: 'Explore Upcoming Workshops',
        ctaCorporate: 'Request Corporate Training',
        statDistricts: 'Districts Covered',
        statWorkshops: 'Workshops Conducted',
        statTrained: 'Workers Trained',
        rmTitleLine1: 'Safer Roads...',
        rmTitleLine2: 'Stronger Tomorrows',
        rmTags: 'Road Safety | Safe Driving | Driver Awareness',
        rmDesc: 'Professional transport services, driver training and road safety solutions for a safer community.',
        rmScript: 'Safe Driver, Safe Journey, Better Future',
        rmSafety: 'GOOD DRIVERS SAVE LIVES',
        rmService1: 'Truck & Trailer Drivers',
        rmService2: 'Omni Bus Drivers',
        rmService3: 'Luxury & Chauffeur Services',
        rmService4: 'Hill Station Drivers',
        rmService5: 'Driver Training & Awareness',
        rmService6: 'Fleet Management Support'
      },
      categories: {
        title: 'Workshop Categories',
        subtitle: 'Comprehensive safety training aligned with industrial compliance requirements across Tamil Nadu.',
        learnMore: 'Learn More',
        viewDetails: 'View Details',
        industrial: {
          title: 'Industrial & Factory Safety',
          desc: 'Factories Act compliance, machine guarding, and hazard identification for manufacturing environments.',
          items: ['Factories Act compliance', 'Machine guarding', 'Hazard identification']
        },
        fire: {
          title: 'Fire & Electrical Safety',
          desc: 'Hands-on fire drill training and Electrical Lockout/Tagout (LOTO) procedures.',
          items: ['Hands-on fire drill training', 'Electrical Lockout/Tagout (LOTO)']
        },
        chemical: {
          title: 'Chemical & Bio-Hazard Safety',
          desc: 'Chemical spill response, MSDS compliance, and proper PPE usage protocols.',
          items: ['Chemical spill response', 'MSDS compliance', 'PPE usage']
        },
        construction: {
          title: 'Construction & Height Safety',
          desc: 'Scaffold safety and fall protection techniques for construction sites.',
          items: ['Scaffold safety', 'Fall protection techniques']
        },
        ergonomics: {
          title: 'Office & Workplace Ergonomics',
          desc: 'First-aid, CPR, and disaster management for office and workplace settings.',
          items: ['First-aid', 'CPR', 'Disaster management']
        }
      },
      schedule: {
        title: 'Upcoming Schedule & Venues',
        subtitle: 'Find and register for safety workshops near you across Tamil Nadu.',
        filterDistrict: 'District',
        filterCity: 'City',
        filterCategory: 'Category',
        filterDate: 'Workshop Date',
        allDistricts: 'All Districts',
        allCities: 'All Cities',
        allCategories: 'All Categories',
        allDates: 'All Dates',
        searchPlaceholder: 'Search workshops...',
        noResults: 'No workshops match your filters. Try adjusting your search criteria.',
        date: 'Date',
        venue: 'Venue',
        district: 'District',
        availability: 'Availability',
        register: 'Register',
        full: 'Full',
        limited: 'Limited Seats',
        open: 'Open',
        resultsCount: '{count} workshop(s) found'
      },
      trainers: {
        title: 'Expert Trainers',
        subtitle: 'Certified safety professionals with extensive experience in Tamil Nadu industries.',
        experience: 'Experience',
        specialization: 'Specialization',
        years: 'years'
      },
      resources: {
        title: 'Safety Resources',
        subtitle: 'Guides, checklists, and reference materials for workplace safety compliance.',
        download: 'Download',
        view: 'View Resource',
        items: {
          checklist: { title: 'Workplace Safety Checklist', desc: 'Daily inspection checklist for factory and industrial sites.' },
          fire: { title: 'Fire Safety Guidelines', desc: 'Essential fire prevention and evacuation procedures.' },
          chemical: { title: 'Chemical Handling Guide', desc: 'MSDS reference and spill response quick guide.' },
          ergonomics: { title: 'Ergonomics Best Practices', desc: 'Office and workstation safety recommendations.' }
        }
      },
      trust: {
        title: 'Trust & Compliance',
        subtitle: 'Safety standards and compliance-focused training aligned with applicable guidelines.',
        dish: {
          title: 'DISH Guidelines',
          desc: 'Training content aligned with Directorate of Industrial Safety and Health, Tamil Nadu safety guidelines and industrial compliance requirements.'
        },
        iso: {
          title: 'ISO Safety Standards',
          desc: 'Workshop modules reference ISO 45001 occupational health and safety management principles and related safety standards.'
        },
        disclaimer: 'This initiative provides safety training aligned with applicable guidelines. We do not claim official government certification, accreditation, or endorsement unless explicitly stated in writing.'
      },
      testimonials: {
        title: 'What Participants Say',
        subtitle: 'Feedback from safety officers and training participants across Tamil Nadu industries.',
        disclaimer: 'Testimonials represent individual participant experiences and do not constitute official endorsements.'
      },
      stats: {
        workshops: 'Workshops Conducted',
        workers: 'Workers Trained',
        districts: 'Districts Covered'
      },
      certificates: {
        title: 'Certificates',
        subtitle: 'View and download workshop completion certificates and accredited safety training documents.',
        view: 'View PDF',
        download: 'Download PDF'
      },
      certificate: {
        title: 'Certificate Verification',
        subtitle: 'Verify the authenticity of workshop completion certificates issued by Safety Workshops TN.',
        label: 'Certificate ID',
        placeholder: 'Enter certificate ID (e.g., SWTN-2026-001234)',
        verify: 'Verify Certificate',
        verifying: 'Verifying...',
        valid: 'Certificate verified successfully.',
        invalid: 'Certificate ID not found. Please check and try again.',
        holder: 'Participant',
        workshop: 'Workshop',
        date: 'Issue Date',
        required: 'Please enter a certificate ID.'
      },
      about: {
        title: 'About Us',
        subtitle: 'Dedicated to raising workplace safety standards across Tamil Nadu.',
        mission: {
          title: 'Our Mission',
          desc: 'To deliver accessible, high-quality safety training that empowers workers, safety officers, and organizations to create safer workplaces across Tamil Nadu.'
        },
        vision: {
          title: 'Our Vision',
          desc: 'A Tamil Nadu where every workplace prioritizes safety, compliance, and the well-being of its workforce through continuous education and awareness.'
        },
        approach: {
          title: 'Our Approach',
          desc: 'We combine practical hands-on training, industry-relevant curriculum, and experienced trainers to deliver workshops that meet real-world safety challenges in factories, construction sites, and offices.'
        }
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Reach out for workshop registration, corporate training inquiries, or general questions.',
        address: 'Office Address',
        addressValue: 'Safety Workshops TN, 42 Industrial Safety Avenue, T. Nagar, Chennai — 600017, Tamil Nadu, India',
        phone: 'Phone',
        whatsapp: 'Enquiry WhatsApp',
        whatsappHero: 'Enquiry WhatsApp:',
        email: 'Email',
        hours: 'Office Hours',
        hoursValue: 'Monday – Saturday: 9:00 AM – 6:00 PM',
        formName: 'Full Name',
        formEmail: 'Email Address',
        formSubject: 'Subject',
        formMessage: 'Message',
        formSubmit: 'Send Message',
        formSuccess: 'Thank you. Your message has been received. We will respond shortly.',
        mapTitle: 'Our Location'
      },
      register: {
        title: 'Workshop Registration',
        subtitle: 'Complete the form below to register for your selected workshop.',
        fullName: 'Full Name',
        email: 'Email Address',
        mobile: 'Mobile Number',
        organization: 'Organization / Company',
        district: 'District',
        workshopDate: 'Selected Workshop Date',
        selectDistrict: 'Select district',
        selectWorkshop: 'Select workshop',
        required: 'Required',
        submit: 'Submit Registration',
        cancel: 'Cancel',
        fullFormLink: 'Use full registration form',
        success: 'Registration submitted successfully! Our team will contact you shortly with confirmation details.',
        errors: {
          required: 'This field is required.',
          email: 'Please enter a valid email address.',
          mobile: 'Please enter a valid 10-digit Indian mobile number.',
          district: 'Please select a district.',
          workshop: 'Please select a workshop.'
        }
      },
      footer: {
        tagline: 'Tamil Nadu Safety & Compliance Initiative',
        emergency: 'Emergency Contacts',
        helpline: 'Safety Helpline',
        helplineNumber: '1077 — State Emergency',
        industrialSafety: 'Industrial Safety Helpline',
        industrialNumber: '044-2855-4200',
        quickLinks: 'Quick Links',
        legal: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        copyright: '© {year} Safety Workshops TN. All rights reserved.',
        disclaimer: 'Safety training aligned with applicable guidelines. Not an official government website.'
      },
      privacy: {
        title: 'Privacy Policy',
        seoTitle: 'Privacy Policy | Road Minded Safety Solutions',
        seoDescription: 'Privacy Policy for Road Minded Safety Solutions — how we collect, use, and protect information when you register for workshops or contact us.',
        seoKeywords: 'Road Minded Safety Solutions privacy policy, data protection, workshop registration privacy',
        lastUpdated: 'Last updated: September 2026',
        sections: [
          { heading: 'Information We Collect', body: 'We collect information you provide when registering for workshops, contacting us, or verifying certificates, including name, email, mobile number, organization, and district.' },
          { heading: 'How We Use Information', body: 'Your information is used to process workshop registrations, respond to inquiries, issue certificates, and improve our training services.' },
          { heading: 'Data Storage', body: 'Registration data is stored securely on our systems. We do not sell personal information to third parties.' },
          { heading: 'Cookies & Local Storage', body: 'We use local storage to remember your language preference. No tracking cookies are used for advertising purposes.' },
          { heading: 'Your Rights', body: 'You may request access to, correction of, or deletion of your personal data by contacting us at the address provided on our Contact page.' },
          { heading: 'Contact', body: 'For privacy-related inquiries, contact us at privacy@safetyworkshopstn.org or via the Contact Us page.' }
        ]
      },
      terms: {
        title: 'Terms of Service',
        seoTitle: 'Terms of Service | Road Minded Safety Solutions',
        seoDescription: 'Terms of Service for using the Road Minded Safety Solutions website, workshop registration, and training programmes.',
        seoKeywords: 'Road Minded Safety Solutions terms of service, website terms, workshop registration terms',
        lastUpdated: 'Last updated: September 2026',
        sections: [
          { heading: 'Acceptance of Terms', body: 'By accessing and using the Safety Workshops TN website, you agree to these Terms of Service.' },
          { heading: 'Workshop Registration', body: 'Registration does not guarantee a seat until confirmed by our team. Workshop schedules and venues are subject to change with prior notice.' },
          { heading: 'Training Content', body: 'Workshop content is designed for educational purposes aligned with applicable safety guidelines. Completion certificates indicate participation, not government accreditation.' },
          { heading: 'Liability', body: 'Safety Workshops TN is not liable for workplace incidents. Participants and organizations remain responsible for implementing safety measures in their workplaces.' },
          { heading: 'Intellectual Property', body: 'All website content, training materials, and branding are the property of Safety Workshops TN unless otherwise stated.' },
          { heading: 'Governing Law', body: 'These terms are governed by the laws of Tamil Nadu, India. Disputes shall be subject to the jurisdiction of courts in Chennai.' }
        ]
      },
      alerts: {
        langChanged: 'Language changed to English',
        langChangedTa: 'மொழி தமிழுக்கு மாற்றப்பட்டது'
      },
      home: {
        viewAllWorkshops: 'View All Workshops & Courses',
        viewFullSchedule: 'View Full Schedule',
        schedulePreview: 'Upcoming Workshops',
        ctaTitle: 'Ready to Register for a Safety Workshop?',
        ctaDesc: 'Join workshops across Tamil Nadu or request in-plant corporate training for your organization.'
      },
      workshopPage: {
        sector: 'Sector',
        targetAudience: 'Target Audience',
        coreModules: 'Core Curriculum Modules',
        interactiveModules: 'Interactive Modules',
        roiImpact: 'Business ROI Impact',
        roiMetrics: 'Commercial Fleet ROI Impact',
        engagement: 'Campus Engagement Format',
        sitemapArchitecture: 'Sitemap & Page Architecture',
        sampleCopywriting: 'Sample Copywriting Frame',
        targetAudienceCards: 'Target Audience Cards',
        pitchTemplates: 'Pitch Templates',
        requestTraining: 'Request Training'
      },
      pages: {
        workshops: {
          title: 'Road Safety Training & Workshops | Road Minded Safety Solutions',
          description: 'Road safety workshops and courses for chauffeurs, fleet operators, bus drivers, school students, and youth — professional training from Road Minded Safety Solutions.',
          keywords: 'road safety workshops, driver training, fleet safety, chauffeur training, bus driver safety, Road Minded Safety Solutions',
          heading: 'Workshops & Courses',
          subtitle: 'Executive driving, fleet safety, student transport standards, and youth road safety masterclasses — structured from the RoadMinded Master B2B Blueprint.'
        },
        schedule: {
          title: 'Workshop Schedule & Venues | Road Minded Safety Solutions',
          description: 'View upcoming road safety workshop schedules and venues with Road Minded Safety Solutions across Tamil Nadu.',
          keywords: 'road safety workshop schedule, training venues, Tamil Nadu workshops, Road Minded Safety Solutions'
        },
        trainers: {
          title: 'Expert Trainers | Road Minded Safety Solutions',
          description: 'Meet the road safety trainers and specialists who deliver workshops and corporate training for Road Minded Safety Solutions.',
          keywords: 'road safety trainers, driver training experts, Road Minded Safety Solutions trainers'
        },
        resources: {
          title: 'Safety Resources | Road Minded Safety Solutions',
          description: 'Road safety guides, reference materials, and resources from Road Minded Safety Solutions.',
          keywords: 'road safety resources, safety guides, driver safety materials, Road Minded Safety Solutions'
        },
        certificates: {
          title: 'Training Certificates | Road Minded Safety Solutions',
          description: 'Workshop completion certificates and training documents issued by Road Minded Safety Solutions.',
          keywords: 'road safety certificates, workshop completion certificate, training documents, Road Minded Safety Solutions'
        },
        about: {
          title: 'About Us | Road Minded Safety Solutions',
          description: 'Learn about Road Minded Safety Solutions — road safety training, driver awareness programmes, and corporate safety workshops across Tamil Nadu.',
          keywords: 'about Road Minded Safety Solutions, road safety company, driver training Tamil Nadu',
          intro: 'Road Minded Safety Solutions leads the Tamil Nadu Safety & Compliance Initiative — delivering practical workplace safety workshops for factories, construction sites, offices, and industrial facilities across the state.',
          coverageTitle: 'Training Coverage',
          coverageDesc: 'Workshops are conducted across Chennai, Coimbatore, Madurai, Tiruchirappalli, and major Tamil Nadu industrial hubs, with in-plant training available on request.'
        },
        contact: {
          title: 'Contact | Road Minded Safety Solutions',
          description: 'Contact Road Minded Safety Solutions for workshop registration, corporate training enquiries, and WhatsApp support.',
          keywords: 'contact Road Minded Safety Solutions, road safety enquiry, workshop registration contact, WhatsApp enquiry',
          orgName: 'Road Minded Safety Solutions',
          formTitle: 'Submit Enquiry',
          formCompany: 'Company',
          formPhone: 'Phone',
          formLocation: 'Location',
          formRequirement: 'Training Requirement',
          formSubmit: 'Submit Enquiry'
        },
        register: {
          title: 'Register for Workshop | Road Minded Safety Solutions',
          description: 'Register for a road safety workshop or request corporate driver training with Road Minded Safety Solutions.',
          keywords: 'register road safety workshop, corporate driver training registration, Road Minded Safety Solutions',
          formWorkshop: 'Workshop / Course',
          formLocation: 'Preferred Location',
          formParticipants: 'Number of Participants',
          formMessage: 'Message'
        }
      },
      districts: {
        chennai: 'Chennai',
        coimbatore: 'Coimbatore',
        salem: 'Salem',
        madurai: 'Madurai',
        trichy: 'Tiruchirappalli',
        tirunelveli: 'Tirunelveli',
        erode: 'Erode',
        vellore: 'Vellore',
        thoothukudi: 'Thoothukudi',
        other: 'Other Tamil Nadu Districts'
      },
      availability: {
        open: 'Open',
        limited: 'Limited Seats',
        full: 'Full'
      }
    },
    ta: {
      meta: {
        title: 'Road Minded Safety Solutions | சாலை பாதுகாப்பு தீர்வுகள்',
        description: 'Road Minded Safety Solutions — தமிழ்நாடு முழுவும் சாலை பாதுகாப்பு பயிற்சி நிகழ்ச்சிகள், ஓட்டுநர் பயிற்சி மற்றும் நிறுவன பாதுகாப்பு திட்டங்கள். படிப்புகளைப் பாருங்கள், பதிவு செய்யுங்கள் அல்லது தொடர்பு கொள்ளுங்கள்.',
        keywords: 'Road Minded Safety Solutions, சாலை பாதுகாப்பு, ஓட்டுநர் பயிற்சி, சாலை பாதுகாப்பு பயிற்சி'
      },
      nav: {
        home: 'முகப்பு',
        workshops: 'பயிற்சி நிகழ்ச்சிகள் / படிப்புகள்',
        workshopsShort: 'பயிற்சி',
        schedule: 'அட்டவணை & இடங்கள்',
        scheduleShort: 'அட்டவணை',
        trainers: 'பயிற்றுவிப்போர்',
        trainersShort: 'பயிற்றுவிப்போர்',
        resources: 'பாதுகாப்பு வளங்கள்',
        resourcesShort: 'வளங்கள்',
        certificates: 'சான்றிதழ்கள்',
        certificatesShort: 'சான்று',
        about: 'எங்களைப் பற்றி',
        aboutShort: 'பற்றி',
        contact: 'தொடர்பு',
        register: 'பயிற்சிக்கு பதிவு செய்யுங்கள்',
        registerShort: 'பதிவு',
        bookInPlant: 'ஆலைக்குள் பயிற்சி முன்பதிவு',
        menuToggle: 'வழிசெலுத்தல் மெனுவைத் திற',
        menuClose: 'வழிசெலுத்தல் மெனுவை மூடு',
        langSwitch: 'Switch to English',
        langLabel: 'தமிழ்'
      },
      hero: {
        badge: 'தமிழ்நாடு பாதுகாப்பு & இணங்குதல் முன்முயற்சி',
        headline: 'உலகத்தரம் வாய்ந்த பாதுகாப்பு பயிற்சியுடன் தமிழ்நாடு பணியிடங்களை வலுப்படுத்துதல்',
        subheadline: 'சென்னை, கோயம்புத்தூர், மதுரை, திருச்சிராப்பள்ளி மற்றும் தமிழ்நாட்டின் முக்கிய மையங்களில் தொழில்துறை பாதுகாப்பு, தீ பாதுகாப்பு, வேதிப்பொருள் அபாய விழிப்புணர்வு மற்றும் பணியிட ergonomics பயிற்சி நிகழ்ச்சிகள்.',
        ctaExplore: 'வரவிருக்கும் பயிற்சி நிகழ்ச்சிகளைப் பாருங்கள்',
        ctaCorporate: 'நிறுவன பயிற்சி கோரிக்கை',
        statDistricts: 'மாவட்டங்கள்',
        statWorkshops: 'நடத்தப்பட்ட பயிற்சிகள்',
        statTrained: 'பயிற்றுவிக்கப்பட்ட தொழிலாளர்கள்',
        rmTitleLine1: 'பாதுகாப்பான சாலைகள்...',
        rmTitleLine2: 'வலுவான நாளைகள்',
        rmTags: 'சாலை பாதுகாப்பு | பாதுகாப்பான ஓட்டுதல் | ஓட்டுநர் விழிப்புணர்வு',
        rmDesc: 'பாதுகாப்பான சமூகத்திற்கான தொழில்முறை போக்குவரத்து சேவைகள், ஓட்டுநர் பயிற்சி மற்றும் சாலை பாதுகாப்பு தீர்வுகள்.',
        rmScript: 'பாதுகாப்பான ஓட்டுநர், பாதுகாப்பான பயணம், சிறந்த எதிர்காலம்',
        rmSafety: 'நல்ல ஓட்டுநர்கள் உயிர்களைக் காப்பாற்றுகிறார்கள்',
        rmService1: 'லாரி & டிரெய்லர் ஓட்டுநர்கள்',
        rmService2: 'ஓம்னி பஸ் ஓட்டுநர்கள்',
        rmService3: 'ஆடம்பர & chauffeur சேவைகள்',
        rmService4: 'மலைவாழ் ஓட்டுநர்கள்',
        rmService5: 'ஓட்டுநர் பயிற்சி & விழிப்புணர்வு',
        rmService6: 'Fleet மேலாண்மை ஆதரவு'
      },
      categories: {
        title: 'பயிற்சி நிகழ்ச்சி வகைகள்',
        subtitle: 'தமிழ்நாடு முழுவதும் தொழில்துறை இணங்குதல் தேவைகளுக்கு ஏற்ப விரிவான பாதுகாப்பு பயிற்சி.',
        learnMore: 'மேலும் அறிய',
        viewDetails: 'விவரங்களைப் பார்',
        industrial: {
          title: 'தொழில்துறை & தொழிற்சாலை பாதுகாப்பு',
          desc: 'தொழிற்சாலைகள் சட்ட இணங்குதல், இயந்திர பாதுகாப்பு மற்றும் தொழில்துறை சூழல்களில் அபாய அடையாளம்.',
          items: ['தொழிற்சாலைகள் சட்ட இணங்குதல்', 'இயந்திர பாதுகாப்பு', 'அபாய அடையாளம்']
        },
        fire: {
          title: 'தீ & மின்சார பாதுகாப்பு',
          desc: 'நேரடி தீ தடுப்பு பயிற்சி மற்றும் மின்சார Lockout/Tagout (LOTO) நடைமுறைகள்.',
          items: ['நேரடி தீ தடுப்பு பயிற்சி', 'மின்சார Lockout/Tagout (LOTO)']
        },
        chemical: {
          title: 'வேதிப்பொருள் & உயிரியல் அபாய பாதுகாப்பு',
          desc: 'வேதிப்பொருள் கசிவு எதிர்வினை, MSDS இணங்குதல் மற்றும் சரியான PPE பயன்பாடு.',
          items: ['வேதிப்பொருள் கசிவு எதிர்வினை', 'MSDS இணங்குதல்', 'PPE பயன்பாடு']
        },
        construction: {
          title: 'கட்டுமான & உயர பாதுகாப்பு',
          desc: 'சாரம் பாதுகாப்பு மற்றும் கட்டுமான தளங்களில் விழுவதிலிருந்து பாதுகாப்பு நுட்பங்கள்.',
          items: ['சாரம் பாதுகாப்பு', 'விழுவதிலிருந்து பாதுகாப்பு நுட்பங்கள்']
        },
        ergonomics: {
          title: 'அலுவலக & பணியிட Ergonomics',
          desc: 'அலுவலக மற்றும் பணியிட அமைப்புகளுக்கான முதலுதவி, CPR மற்றும் பேரழிவு மேலாண்மை.',
          items: ['முதலுதவி', 'CPR', 'பேரழிவு மேலாண்மை']
        }
      },
      schedule: {
        title: 'வரவிருக்கும் அட்டவணை & இடங்கள்',
        subtitle: 'தமிழ்நாடு முழுவதும் உங்களுக்கு அருகிலுள்ள பாதுகாப்பு பயிற்சி நிகழ்ச்சிகளைத் தேடி பதிவு செய்யுங்கள்.',
        filterDistrict: 'மாவட்டம்',
        filterCity: 'நகரம்',
        filterCategory: 'வகை',
        filterDate: 'பயிற்சி தேதி',
        allDistricts: 'அனைத்து மாவட்டங்கள்',
        allCities: 'அனைத்து நகரங்கள்',
        allCategories: 'அனைத்து வகைகள்',
        allDates: 'அனைத்து தேதிகள்',
        searchPlaceholder: 'பயிற்சி நிகழ்ச்சிகளைத் தேடுங்கள்...',
        noResults: 'உங்கள் வடிகட்டிகளுக்கு பொருந்தும் பயிற்சி நிகழ்ச்சிகள் இல்லை. தேடல் அளவுகோல்களை மாற்றி முயற்சிக்கவும்.',
        date: 'தேதி',
        venue: 'இடம்',
        district: 'மாவட்டம்',
        availability: 'கிடைக்கும் இடங்கள்',
        register: 'பதிவு',
        full: 'நிரம்பியது',
        limited: 'வரையறுக்கப்பட்ட இடங்கள்',
        open: 'திறந்துள்ளது',
        resultsCount: '{count} பயிற்சி நிகழ்ச்சி(கள்) கண்டறியப்பட்டது'
      },
      trainers: {
        title: 'நிபுணர் பயிற்றுவிப்போர்',
        subtitle: 'தமிழ்நாடு தொழில்துறைகளில் விரிவான அனுபவம் கொண்ட சான்றளிக்கப்பட்ட பாதுகாப்பு நிபுணர்கள்.',
        experience: 'அனுபவம்',
        specialization: 'சிறப்பு',
        years: 'ஆண்டுகள்'
      },
      resources: {
        title: 'பாதுகாப்பு வளங்கள்',
        subtitle: 'பணியிட பாதுகாப்பு இணங்குதலுக்கான வழிகாட்டிகள், சரிபார்ப்பு பட்டியல்கள் மற்றும் குறிப்பு பொருட்கள்.',
        download: 'பதிவிறக்கம்',
        view: 'வளத்தைப் பார்',
        items: {
          checklist: { title: 'பணியிட பாதுகாப்பு சரிபார்ப்பு பட்டியல்', desc: 'தொழிற்சாலை மற்றும் தொழில்துறை தளங்களுக்கான தினசரி ஆய்வு பட்டியல்.' },
          fire: { title: 'தீ பாதுகாப்பு வழிகாட்டிகள்', desc: 'அத்தியாவசிய தீ தடுப்பு மற்றும் வெளியேற்ற நடைமுறைகள்.' },
          chemical: { title: 'வேதிப்பொருள் கையாளுதல் வழிகாட்டி', desc: 'MSDS குறிப்பு மற்றும் கசிவு எதிர்வினை விரைவு வழிகாட்டி.' },
          ergonomics: { title: 'Ergonomics சிறந்த நடைமுறைகள்', desc: 'அலுவலக மற்றும் பணியிட பாதுகாப்பு பரிந்துரைகள்.' }
        }
      },
      trust: {
        title: 'நம்பிக்கை & இணங்குதல்',
        subtitle: 'பொருந்தக்கூடிய வழிகாட்டுதல்களுடன் இணங்கிய பாதுகாப்பு தரங்கள் மற்றும் இணங்குதல்-சார்ந்த பயிற்சி.',
        dish: {
          title: 'DISH வழிகாட்டுதல்கள்',
          desc: 'தமிழ்நாடு தொழில்துறை பாதுகாப்பு மற்றும் சுகாதார இயக்குநரகம் (DISH) பாதுகாப்பு வழிகாட்டுதல்கள் மற்றும் தொழில்துறை இணங்குதல் தேவைகளுடன் இணங்கிய பயிற்சி உள்ளடக்கம்.'
        },
        iso: {
          title: 'ISO பாதுகாப்பு தரங்கள்',
          desc: 'பயிற்சி தொகுதிகள் ISO 45001 தொழில்சார் சுகாதாரம் மற்றும் பாதுகாப்பு மேலாண்மை கொள்கைகள் மற்றும் தொடர்புடைய பாதுகாப்பு தரங்களைக் குறிப்பிடுகின்றன.'
        },
        disclaimer: 'இந்த முன்முயற்சி பொருந்தக்கூடிய வழிகாட்டுதல்களுடன் இணங்கிய பாதுகாப்பு பயிற்சியை வழங்குகிறது. எழுத்துப்பூர்வமாக தெளிவாகக் கூறப்படாவிட்டால் அதிகாரப்பூர்வ அரசாங்க சான்றிதழ், அங்கீகாரம் அல்லது அதிகாரப்பூர்வ ஆதரவை நாங்கள் கோரவில்லை.'
      },
      testimonials: {
        title: 'பங்கேற்பாளர்கள் என்ன சொல்கிறார்கள்',
        subtitle: 'தமிழ்நாடு தொழில்துறைகளில் பாதுகாப்பு அலுவலர்கள் மற்றும் பயிற்சி பங்கேற்பாளர்களின் கருத்துகள்.',
        disclaimer: 'சான்றுகள் தனிப்பட்ட பங்கேற்பாளர் அனுபவங்களைக் குறிக்கின்றன; அதிகாரப்பூர்வ ஆதரவைக் குறிக்காது.'
      },
      stats: {
        workshops: 'நடத்தப்பட்ட பயிற்சி நிகழ்ச்சிகள்',
        workers: 'பயிற்றுவிக்கப்பட்ட தொழிலாளர்கள்',
        districts: 'உள்ளடக்கிய மாவட்டங்கள்'
      },
      certificates: {
        title: 'சான்றிதழ்கள்',
        subtitle: 'பயிற்சி நிறைவு சான்றிதழ்கள் மற்றும் அங்கீகரிக்கப்பட்ட பாதுகாப்பு பயிற்சி ஆவணங்களைப் பார்த்து பதிவிறக்கவும்.',
        view: 'PDF பார்க்க',
        download: 'PDF பதிவிறக்க'
      },
      certificate: {
        title: 'சான்றிதழ் சரிபார்ப்பு',
        subtitle: 'Safety Workshops TN வழங்கிய பயிற்சி நிறைவு சான்றிதழ்களின் நம்பகத்தன்மையை சரிபார்க்கவும்.',
        label: 'சான்றிதழ் அடையாளம்',
        placeholder: 'சான்றிதழ் ID உள்ளிடவும் (எ.கா., SWTN-2026-001234)',
        verify: 'சான்றிதழை சரிபார்',
        verifying: 'சரிபார்க்கிறது...',
        valid: 'சான்றிதழ் வெற்றிகரமாக சரிபார்க்கப்பட்டது.',
        invalid: 'சான்றிதழ் ID கண்டறியப்படவில்லை. சரிபார்த்து மீண்டும் முயற்சிக்கவும்.',
        holder: 'பங்கேற்பாளர்',
        workshop: 'பயிற்சி நிகழ்ச்சி',
        date: 'வெளியீட்டு தேதி',
        required: 'தயவுசெய்து சான்றிதழ் ID உள்ளிடவும்.'
      },
      about: {
        title: 'எங்களைப் பற்றி',
        subtitle: 'தமிழ்நாடு முழுவதும் பணியிட பாதுகாப்பு தரங்களை உயர்த்துவதில் அர்ப்பணிப்பு.',
        mission: {
          title: 'எங்கள் நோக்கம்',
          desc: 'தமிழ்நாடு முழுவதும் பாதுகாப்பான பணியிடங்களை உருவாக்க தொழிலாளர்கள், பாதுகாப்பு அலுவலர்கள் மற்றும் நிறுவனங்களுக்கு அணுகக்கூடிய, உயர்தர பாதுகாப்பு பயிற்சியை வழங்குதல்.'
        },
        vision: {
          title: 'எங்கள் பார்வை',
          desc: 'தொடர்ச்சியான கல்வி மற்றும் விழிப்புணர்வு மூலம் ஒவ்வொரு பணியிடமும் பாதுகாப்பு, இணங்குதல் மற்றும் தொழிலாளர் நலனை முன்னுரிமையாகக் கொள்ளும் தமிழ்நாடு.'
        },
        approach: {
          title: 'எங்கள் அணுகுமுறை',
          desc: 'தொழிற்சாலைகள், கட்டுமான தளங்கள் மற்றும் அலுவலகங்களில் உண்மையான பாதுகாப்பு சவால்களைப் பூர்த்தி செய்யும் பயிற்சி நிகழ்ச்சிகளை வழங்க நாங்கள் நேரடி பயிற்சி, தொழில்துறை-தொடர்புடைய பாடத்திட்டம் மற்றும் அனுபவம் வாய்ந்த பயிற்றுவிப்போரை இணைக்கிறோம்.'
        }
      },
      contact: {
        title: 'தொடர்பு',
        subtitle: 'பயிற்சி பதிவு, நிறுவன பயிற்சி விசாரணைகள் அல்லது பொது கேள்விகளுக்கு தொடர்பு கொள்ளுங்கள்.',
        address: 'அலுவலக முகவரி',
        addressValue: 'Safety Workshops TN, 42 Industrial Safety Avenue, T. Nagar, Chennai — 600017, Tamil Nadu, India',
        phone: 'தொலைபேசி',
        whatsapp: 'விசாரணை WhatsApp',
        whatsappHero: 'விசாரணை WhatsApp:',
        email: 'மின்னஞ்சல்',
        hours: 'அலுவலக நேரம்',
        hoursValue: 'திங்கள் – சனி: காலை 9:00 – மாலை 6:00',
        formName: 'முழு பெயர்',
        formEmail: 'மின்னஞ்சல் முகவரி',
        formSubject: 'பொருள்',
        formMessage: 'செய்தி',
        formSubmit: 'செய்தி அனுப்பு',
        formSuccess: 'நன்றி. உங்கள் செய்தி பெறப்பட்டது. விரைவில் பதிலளிப்போம்.',
        mapTitle: 'எங்கள் இடம்'
      },
      register: {
        title: 'பயிற்சி நிகழ்ச்சி பதிவு',
        subtitle: 'தேர்ந்தெடுத்த பயிற்சி நிகழ்ச்சிக்கு பதிவு செய்ய கீழே உள்ள படிவத்தை நிரப்பவும்.',
        fullName: 'முழு பெயர்',
        email: 'மின்னஞ்சல் முகவரி',
        mobile: 'கைபேசி எண்',
        organization: 'நிறுவனம் / நிறுவன பெயர்',
        district: 'மாவட்டம்',
        workshopDate: 'தேர்ந்தெடுத்த பயிற்சி தேதி',
        selectDistrict: 'மாவட்டத்தைத் தேர்ந்தெடுக்கவும்',
        selectWorkshop: 'பயிற்சி நிகழ்ச்சியைத் தேர்ந்தெடுக்கவும்',
        required: 'தேவை',
        submit: 'பதிவை சமர்ப்பிக்கவும்',
        cancel: 'ரத்து',
        fullFormLink: 'முழு பதிவு படிவத்தைப் பயன்படுத்தவும்',
        success: 'பதிவு வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது! உறுதிப்படுத்தல் விவரங்களுடன் எங்கள் குழு விரைவில் தொடர்பு கொள்ளும்.',
        errors: {
          required: 'இந்த புலம் தேவை.',
          email: 'சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.',
          mobile: 'சரியான 10-இலக்க இந்திய கைபேசி எண்ணை உள்ளிடவும்.',
          district: 'மாவட்டத்தைத் தேர்ந்தெடுக்கவும்.',
          workshop: 'பயிற்சி நிகழ்ச்சியைத் தேர்ந்தெடுக்கவும்.'
        }
      },
      footer: {
        tagline: 'தமிழ்நாடு பாதுகாப்பு & இணங்குதல் முன்முயற்சி',
        emergency: 'அவசர தொடர்பு',
        helpline: 'பாதுகாப்பு உதவி எண்',
        helplineNumber: '1077 — மாநில அவசர',
        industrialSafety: 'தொழில்துறை பாதுகாப்பு உதவி எண்',
        industrialNumber: '044-2855-4200',
        quickLinks: 'விரைவு இணைப்புகள்',
        legal: 'சட்டம்',
        privacy: 'தனியுரிமைக் கொள்கை',
        terms: 'சேவை விதிமுறைகள்',
        copyright: '© {year} Safety Workshops TN. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
        disclaimer: 'பொருந்தக்கூடிய வழிகாட்டுதல்களுடன் இணங்கிய பாதுகாப்பு பயிற்சி. அதிகாரப்பூர்வ அரசு வலைத்தளம் அல்ல.'
      },
      privacy: {
        title: 'தனியுரிமைக் கொள்கை',
        seoTitle: 'தனியுரிமைக் கொள்கை | Road Minded Safety Solutions',
        seoDescription: 'Road Minded Safety Solutions தனியுரிமைக் கொள்கை — பயிற்சி பதிவு அல்லது தொடர்புக்காக நாங்கள் சேகரிக்கும் தகவல்களை எவ்வாறு பயன்படுத்துகிறோம்.',
        seoKeywords: 'Road Minded Safety Solutions, தனியுரிமைக் கொள்கை, தரவு பாதுகாப்பு',
        lastUpdated: 'கடைசியாக புதுப்பிக்கப்பட்டது: செப்டம்பர் 2026',
        sections: [
          { heading: 'நாங்கள் சேகரிக்கும் தகவல்கள்', body: 'பயிற்சி நிகழ்ச்சிகளுக்கு பதிவு செய்யும்போது, எங்களை தொடர்பு கொள்ளும்போது அல்லது சான்றிதழ்களை சரிபார்க்கும்போது நீங்கள் வழங்கும் பெயர், மின்னஞ்சல், கைபேசி எண், நிறுவனம் மற்றும் மாவட்டம் உள்ளிட்ட தகவல்களை சேகரிக்கிறோம்.' },
          { heading: 'தகவல்களை எவ்வாறு பயன்படுத்துகிறோம்', body: 'உங்கள் தகவல்கள் பயிற்சி பதிவுகளைச் செயலாக்க, விசாரணைகளுக்கு பதிலளிக்க, சான்றிதழ்களை வழங்க மற்றும் எங்கள் பயிற்சி சேவைகளை மேம்படுத்த பயன்படுத்தப்படுகிறது.' },
          { heading: 'தரவு சேமிப்பு', body: 'பதிவு தரவு எங்கள் அமைப்புகளில் பாதுகாப்பாக சேமிக்கப்படுகிறது. தனிப்பட்ட தகவல்களை மூன்றாம் தரப்பினருக்கு விற்க மாட்டோம்.' },
          { heading: 'Cookies & Local Storage', body: 'உங்கள் மொழி விருப்பத்தை நினைவில் கொள்ள local storage பயன்படுத்துகிறோம். விளம்பர நோக்கங்களுக்கு tracking cookies பயன்படுத்தப்படுவதில்லை.' },
          { heading: 'உங்கள் உரிமைகள்', body: 'தொடர்பு பக்கத்தில் வழங்கப்பட்ட முகவரி மூலம் உங்கள் தனிப்பட்ட தரவை அணுக, திருத்த அல்லது நீக்க கோரலாம்.' },
          { heading: 'தொடர்பு', body: 'தனியுரிமை தொடர்புடைய விசாரணைகளுக்கு privacy@safetyworkshopstn.org அல்லது தொடர்பு பக்கம் மூலம் எங்களை தொடர்பு கொள்ளுங்கள்.' }
        ]
      },
      terms: {
        title: 'சேவை விதிமுறைகள்',
        seoTitle: 'சேவை விதிமுறைகள் | Road Minded Safety Solutions',
        seoDescription: 'Road Minded Safety Solutions வலைத்தளம், பயிற்சி பதிவு மற்றும் பயிற்சி நிகழ்ச்சிகளுக்கான சேவை விதிமுறைகள்.',
        seoKeywords: 'Road Minded Safety Solutions, சேவை விதிமுறைகள், வலைத்தள விதிமுறைகள்',
        lastUpdated: 'கடைசியாக புதுப்பிக்கப்பட்டது: செப்டம்பர் 2026',
        sections: [
          { heading: 'விதிமுறைகளை ஏற்றல்', body: 'Safety Workshops TN வலைத்தளத்தை அணுகி பயன்படுத்துவதன் மூலம், இந்த சேவை விதிமுறைகளை ஏற்கிறீர்கள்.' },
          { heading: 'பயிற்சி பதிவு', body: 'எங்கள் குழு உறுதிப்படுத்தும் வரை பதிவு இடத்தை உறுதி செய்வதில்லை. பயிற்சி அட்டவணைகள் மற்றும் இடங்கள் முன் அறிவிப்புடன் மாறக்கூடும்.' },
          { heading: 'பயிற்சி உள்ளடக்கம்', body: 'பயிற்சி உள்ளடக்கம் பொருந்தக்கூடிய பாதுகாப்பு வழிகாட்டுதல்களுடன் இணங்கிய கல்வி நோக்கங்களுக்காக வடிவமைக்கப்பட்டுள்ளது. நிறைவு சான்றிதழ்கள் பங்கேற்பைக் குறிக்கின்றன; அரசு அங்கீகாரத்தைக் குறிக்காது.' },
          { heading: 'பொறுப்பு', body: 'பணியிட சம்பவங்களுக்கு Safety Workshops TN பொ책ு இல்லை. பங்கேற்பாளர்கள் மற்றும் நிறுவனங்கள் தங்கள் பணியிடங்களில் பாதுகாப்பு நடவடிக்கைகளை செயல்படுத்துவதற்கு பொ책ு உள்ளவர்கள்.' },
          { heading: 'அறிவுசார் சொத்து', body: 'அனைத்து வலைத்தள உள்ளடக்கம், பயிற்சி பொருட்கள் மற்றும் branding ஆகியவை Safety Workshops TN-ன் சொத்து, வேறு குறிப்பிடப்படாவிட்டால்.' },
          { heading: 'ஆளுகை சட்டம்', body: 'இந்த விதிமுறைகள் தமிழ்நாடு, இந்தியா சட்டங்களால் நிர்வகிக்கப்படுகின்றன. தகராறுகள் சென்னை நீதிமன்றங்களின் அதிகார வரம்புக்கு உட்பட்டவை.' }
        ]
      },
      alerts: {
        langChanged: 'Language changed to English',
        langChangedTa: 'மொழி தமிழுக்கு மாற்றப்பட்டது'
      },
      home: {
        viewAllWorkshops: 'அனைத்து பயிற்சி நிகழ்ச்சிகளையும் பாருங்கள்',
        viewFullSchedule: 'முழு அட்டவணையைப் பாருங்கள்',
        schedulePreview: 'வரவிருக்கும் பயிற்சி நிகழ்ச்சிகள்',
        ctaTitle: 'பாதுகாப்பு பயிற்சிக்கு பதிவு செய்ய தயாரா?',
        ctaDesc: 'தமிழ்நாடு முழுவதும் பயிற்சி நிகழ்ச்சிகளில் சேருங்கள் அல்லது உங்கள் நிறுவனத்திற்கு ஆலைக்குள் பயிற்சி கோருங்கள்.'
      },
      workshopPage: {
        sector: 'துறை',
        targetAudience: 'இலக்கு பார்வையாளர்கள்',
        coreModules: 'மைய பாடத்திட்ட தொகுதிகள்',
        interactiveModules: 'ஊடாடும் தொகுதிகள்',
        roiImpact: 'வணிக ROI தாக்கம்',
        roiMetrics: 'Commercial Fleet ROI தாக்கம்',
        engagement: 'Campus Engagement Format',
        sitemapArchitecture: 'Sitemap & Page Architecture',
        sampleCopywriting: 'Sample Copywriting Frame',
        targetAudienceCards: 'Target Audience Cards',
        pitchTemplates: 'Pitch Templates',
        requestTraining: 'பயிற்சி கோரிக்கை'
      },
      pages: {
        workshops: {
          title: 'சாலை பாதுகாப்பு பயிற்சி & பயிற்சி நிகழ்ச்சிகள் | Road Minded Safety Solutions',
          description: 'Chauffeur, fleet, பேருந்து ஓட்டுநர்கள், மாணவர்கள் மற்றும் இளைஞர்களுக்கான சாலை பாதுகாப்பு பயிற்சி நிகழ்ச்சிகள் — Road Minded Safety Solutions.',
          keywords: 'சாலை பாதுகாப்பு பயிற்சி, ஓட்டுநர் பயிற்சி, fleet பாதுகாப்பு, Road Minded Safety Solutions',
          heading: 'பயிற்சி நிகழ்ச்சிகள் & படிப்புகள்',
          subtitle: 'Executive driving, fleet safety, student transport standards, மற்றும் youth road safety masterclasses — RoadMinded Master B2B Blueprint அடிப்படையில்.'
        },
        schedule: {
          title: 'பயிற்சி அட்டவணை & இடங்கள் | Road Minded Safety Solutions',
          description: 'தமிழ்நாடு முழுவும் வரவிருக்கும் சாலை பாதுகாப்பு பயிற்சி அட்டவணை மற்றும் இடங்கள் — Road Minded Safety Solutions.',
          keywords: 'பயிற்சி அட்டவணை, சாலை பாதுகாப்பு பயிற்சி, தமிழ்நாடு, Road Minded Safety Solutions'
        },
        trainers: {
          title: 'நிபுண பயிற்றுவிப்போர் | Road Minded Safety Solutions',
          description: 'Road Minded Safety Solutions பயிற்சி நிகழ்ச்சிகளை வழங்கும் சாலை பாதுகாப்பு பயிற்றுவிப்போர்.',
          keywords: 'சாலை பாதுகாப்பு பயிற்றுவிப்போர், ஓட்டுநர் பயிற்சி, Road Minded Safety Solutions'
        },
        resources: {
          title: 'பாதுகாப்பு வளங்கள் | Road Minded Safety Solutions',
          description: 'Road Minded Safety Solutions-இன் சாலை பாதுகாப்பு வழிகாட்டிகள் மற்றும் குறிப்பு வளங்கள்.',
          keywords: 'சாலை பாதுகாப்பு வளங்கள், பாதுகாப்பு வழிகாட்டிகள், Road Minded Safety Solutions'
        },
        certificates: {
          title: 'பயிற்சி சான்றிதழ்கள் | Road Minded Safety Solutions',
          description: 'Road Minded Safety Solutions வழங்கும் பயிற்சி நிறைவு சான்றிதழ்கள் மற்றும் ஆவணங்கள்.',
          keywords: 'சாலை பாதுகாப்பு சான்றிதழ், பயிற்சி சான்றிதழ், Road Minded Safety Solutions'
        },
        about: {
          title: 'எங்களைப் பற்றி | Road Minded Safety Solutions',
          description: 'Road Minded Safety Solutions — சாலை பாதுகாப்பு பயிற்சி, ஓட்டுநர் விழிப்புணர்வு மற்றும் நிறுவன பாதுகாப்பு பயிற்சி நிகழ்ச்சிகள்.',
          keywords: 'Road Minded Safety Solutions, சாலை பாதுகாப்பு, ஓட்டுநர் பயிற்சி, தமிழ்நாடு',
          intro: 'Road Minded Safety Solutions தமிழ்நாடு பாதுகாப்பு & இணங்குதல் முன்முயற்சியை வழிநடத்துகிறது — தொழிற்சாலைகள், கட்டுமான தளங்கள், அலுவலகங்கள் மற்றும் தொழில்துறை வசதிகளுக்கான நடைமுறை பாதுகாப்பு பயிற்சி நிகழ்ச்சிகளை வழங்குகிறது.',
          coverageTitle: 'பயிற்சி கவரேஜ்',
          coverageDesc: 'சென்னை, கோயம்புத்தூர், மதுரை, திருச்சிராப்பள்ளி மற்றும் தமிழ்நாட்டின் முக்கிய தொழில்துறை மையங்களில் பயிற்சி நிகழ்ச்சிகள் நடத்தப்படுகின்றன; ஆலைக்குள் பயிற்சி கோரிக்கையின் பேரில் கிடைக்கிறது.'
        },
        contact: {
          title: 'தொடர்பு | Road Minded Safety Solutions',
          description: 'பயிற்சி பதிவு, நிறுவன பயிற்சி விசாரணைகள் மற்றும் WhatsApp ஆதரவுக்கு Road Minded Safety Solutions-ஐ தொடர்பு கொள்ளுங்கள்.',
          keywords: 'Road Minded Safety Solutions தொடர்பு, சாலை பாதுகாப்பு விசாரணை, WhatsApp',
          orgName: 'Road Minded Safety Solutions',
          formTitle: 'விசாரணை சமர்ப்பிக்கவும்',
          formCompany: 'நிறுவனம்',
          formPhone: 'தொலைபேசி',
          formLocation: 'இடம்',
          formRequirement: 'பயிற்சி தேவை',
          formSubmit: 'விசாரணை சமர்ப்பிக்கவும்'
        },
        register: {
          title: 'பயிற்சிக்கு பதிவு | Road Minded Safety Solutions',
          description: 'சாலை பாதுகாப்பு பயிற்சி நிகழ்ச்சிக்கு பதிவு செய்யுங்கள் அல்லது நிறுவன ஓட்டுநர் பயிற்சி கோருங்கள் — Road Minded Safety Solutions.',
          keywords: 'பயிற்சி பதிவு, சாலை பாதுகாப்பு பயிற்சி, Road Minded Safety Solutions',
          formWorkshop: 'பயிற்சி / படிப்பு',
          formLocation: 'விருப்பமான இடம்',
          formParticipants: 'பங்கேற்பாளர்களின் எண்ணிக்கை',
          formMessage: 'செய்தி'
        }
      },
      districts: {
        chennai: 'சென்னை',
        coimbatore: 'கோயம்புத்தூர்',
        salem: 'சalem',
        madurai: 'மதுரை',
        trichy: 'திருச்சிராப்பள்ளி',
        tirunelveli: 'திருநெல்வேலி',
        erode: 'ஈrode',
        vellore: 'வellore',
        thoothukudi: 'தoothukudi',
        other: 'பிற தமிழ்நாடு மாவட்டங்கள்'
      },
      availability: {
        open: 'திறந்துள்ளது',
        limited: 'வரையறுக்கப்பட்ட இடங்கள்',
        full: 'நிரம்பியது'
      }
    }
  },

  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value;
  },

  init() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved && (saved === 'en' || saved === 'ta')) {
      this.currentLang = saved;
    }
    document.documentElement.lang = this.currentLang === 'ta' ? 'ta' : 'en';
    return this;
  },

  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ta') return;
    this.currentLang = lang;
    localStorage.setItem(this.storageKey, lang);
    document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';
    this.applyStaticTranslations();
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  },

  toggleLanguage() {
    this.setLanguage(this.currentLang === 'en' ? 'ta' : 'en');
  },

  applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const tag = el.tagName;
      if (tag === 'META' || tag === 'TITLE') return;

      const key = el.getAttribute('data-i18n');
      const value = this.t(key);
      if (typeof value === 'string') {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.hasAttribute('placeholder')) {
            el.placeholder = value;
          }
        } else if (el.tagName === 'OPTION' && el.value === '') {
          el.textContent = value;
        } else {
          el.textContent = value;
        }
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', this.t(el.getAttribute('data-i18n-aria')));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.setAttribute('title', this.t(el.getAttribute('data-i18n-title')));
    });

    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      const titleText = this.t(titleEl.getAttribute('data-i18n'));
      titleEl.textContent = titleText;
    }

    const metaDesc = document.querySelector('meta[name="description"][data-i18n]');
    if (metaDesc) {
      metaDesc.content = this.t(metaDesc.getAttribute('data-i18n'));
      metaDesc.textContent = '';
    }

    const metaKeywords = document.querySelector('meta[name="keywords"][data-i18n]');
    if (metaKeywords) {
      metaKeywords.content = this.t(metaKeywords.getAttribute('data-i18n'));
      metaKeywords.textContent = '';
    }

    const langBtn = document.getElementById('lang-switch');
    if (langBtn) {
      langBtn.textContent = this.currentLang === 'en' ? 'தமிழ்' : 'English';
      langBtn.setAttribute('aria-label', this.t('nav.langSwitch'));
      langBtn.setAttribute('title', this.t('nav.langSwitch'));
    }

    const copyright = document.querySelector('[data-i18n-copyright]');
    if (copyright) {
      copyright.textContent = this.t('footer.copyright').replace('{year}', new Date().getFullYear());
    }
  }
};
