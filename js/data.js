/**
 * Safety Workshops TN — Structured bilingual data
 */
const SITE_DATA = {
  workshops: [],

  categoryKeys: ['industrial', 'fire', 'chemical', 'construction', 'ergonomics'],

  categoryIcons: {
    industrial: 'factory',
    fire: 'flame',
    chemical: 'flask',
    construction: 'hard-hat',
    ergonomics: 'heart-pulse'
  },

  workshopSectorKeys: [
    'chauffeur', 'fleet', 'busDriver', 'schoolStudent', 'collegeYouth'
  ],

  homeWorkshopSectorKeys: ['chauffeur', 'fleet', 'busDriver', 'schoolStudent', 'collegeYouth'],

  workshopSectorIcons: {
    chauffeur: 'certificate',
    fleet: 'factory',
    busDriver: 'hard-hat',
    schoolStudent: 'shield',
    collegeYouth: 'heart-pulse',
    websiteSitemap: 'file',
    b2bPitch: 'certificate',
    eduPitch: 'shield'
  },

  workshopSectors: {
    chauffeur: {
      title: {
        en: '5-Star & Luxury Hotel Chauffeur Masterclass',
        ta: '5-நட்சத்திர & ஆடம்பர ஹோட்டல் Chauffeur முதன்மைப் பயிற்சி'
      },
      audience: {
        en: 'Hotel General Managers, Concierge Directors & VIP Fleet Partners',
        ta: 'ஹோட்டல் பொது மேலாளர்கள், Concierge இயக்குநர்கள் & VIP Fleet கூட்டாளர்கள்'
      },
      highlights: [
        {
          title: { en: 'First & Lasting Impression', ta: 'விருந்தினருக்கு மரியாதைக்குரிய முதல் & கடைசி தோற்றம்' },
          desc: {
            en: 'Extending 5-star hotel hospitality beyond the lobby and into the vehicle cabin during airport transfers and VIP city tours.',
            ta: 'விமான நிலைய பேரிப்பு மற்றும் VIP நகரச் சுற்றுலாக்களின் போது லாபியைத் தாண்டி வாகன உள்ளறை வரை 5-நட்சத்திர ஹோட்டல் வரவேற்பை நீட்டித்தல்.'
          }
        },
        {
          title: { en: 'VVIP Security & Discretion', ta: 'VVIP பாதுகாப்பு & தனியுரிமை' },
          desc: {
            en: 'Protecting guest privacy while preserving high-value vehicles (Rolls-Royce, Maybach, BMW 7 Series, Mercedes S-Class).',
            ta: 'உயர் மதிப்பு வாகனங்களை (Rolls-Royce, Maybach, BMW 7 Series, Mercedes S-Class) பாதுகாத்து விருந்தினர் தனியுரிமையைப் பாதுகாத்தல்.'
          }
        }
      ],
      modules: [
        {
          en: 'Executive Grooming & Door Protocols: Uniform standards, personal hygiene, posture, luggage care, and chivalrous door etiquette.',
          ta: 'நிர்வாக தோற்றநலம் & கதவு நடைமுறைகள்: Uniform தரங்கள், தனிப்பட்ட சுகாதாரம், உடல் நிலை, சாமான் பராமரிப்பு மற்றும் மரியாதையான கதவு நடைமுறைகள்.'
        },
        {
          en: 'Zero-Jerk Driving Dynamics: Progressive acceleration, smooth braking, and seamless cornering to ensure absolute passenger stability.',
          ta: 'Zero-Jerk வாகன ஓட்ட இயக்கவியல்: படிப்படியான முடுக்கம், மென்மையான braking, தடையற்ற திருப்பம் மூலம் பயணிகளின் முழுமையான நிலைத்தன்மையை உறுதி செய்தல்.'
        },
        {
          en: 'International Client Communication: Culturally sensitive greetings, polite English phrasing, active listening, and privacy discretion.',
          ta: 'சர்வதேச வாடிக்கையாளர் தொடர்பு: கலாச்சார உணர்வுள்ள வாழ்த்துகள், மரியாதையான ஆங்கிலம், செயலில் கேட்பது மற்றும் தனியுரிமை விவேகம்.'
        },
        {
          en: 'In-Cabin Ambience Control: Pre-regulating climate, fragrance, ambient lighting, sanitation, and providing premium amenities.',
          ta: 'உள்ளறை சூழல் கட்டுப்பாடு: காலநிலை, நறுமணம், சுற்றுப்புற விளக்கு, சுகாதாரம் மற்றும் பிரீமியம் வசதிகளை முன்கூட்டியே ஒழுங்கமைத்தல்.'
        }
      ],
      roiText: {
        en: 'Eliminates guest transit complaints, protects luxury asset values, and elevates hotel trip satisfaction scores on guest review platforms.',
        ta: 'விருந்தினர் பயணப் புகார்களை நீக்குகிறது, ஆடம்பர வாகனங்களின் மதிப்பைப் பாதுகாக்கிறது, விருந்தினர் மதிப்புரை தளங்களில் ஹோட்டல் போக்குவரத்து திருப்தி மதிப்பெண்களை உயர்த்துகிறது.'
      }
    },
    fleet: {
      title: {
        en: 'Commercial Fleet Safety & Operational ROI',
        ta: 'வணிக Fleet பாதுகாப்பு & இயங்குமுறை ROI'
      },
      audience: {
        en: 'Fleet Owners, Logistics Directors, Supply Chain Leaders & Safety Officers',
        ta: 'Fleet உரிமையாளர்கள், Logistics இயக்குநர்கள், Supply Chain தலைவர்கள் & பாதுகாப்பு அலுவலர்கள்'
      },
      highlights: [
        {
          title: { en: 'Fuel Cost Savings (10–15%)', ta: 'எரிபொருள் செலவு சேமிப்பு (10–15%)' },
          desc: {
            en: 'Optimizing acceleration curves, gear selection, and idling control to drastically lower fuel consumption.',
            ta: 'முடுக்க வளைவுகள், கியர் தேர்வு மற்றும் idle கட்டுப்பாட்டை மேம்படுத்தி எரிபொருள் பயன்பாட்டை கணிசமாகக் குறைத்தல்.'
          }
        },
        {
          title: { en: 'Maintenance & Asset Care', ta: 'பராமரிப்பு & சொத்து பாதுகாப்பு' },
          desc: {
            en: 'Preventing harsh braking and tire wear to extend service intervals and keep vehicles active on road routes.',
            ta: 'கடுமையான braking மற்றும் டையர் அணிவைத் தடுத்து சேவை இடைவெளிகளை நீட்டித்து வாகனங்களை சாலை வழிகளில் செயலில் வைத்தல்.'
          }
        }
      ],
      modules: [
        {
          en: 'Advanced Defensive Driving: Understanding hazard perception, road psychology, and implementing the 3-Second Following Distance Rule.',
          ta: 'மேம்பட்ட Defensive Driving: அபாய உணர்தல், சாலை உளவியல் புரிதல் மற்றும் 3-வினாடி Following Distance விதியைச் செயல்படுத்துதல்.'
        },
        {
          en: 'Blind Spot & Highway Protocols: Blind spot mapping for commercial trucks, safe lane changes, and night/weather driving safety.',
          ta: 'Blind Spot & நெடுஞ்சாலை நடைமுறைகள்: வணிக லாரிகளுக்கான blind spot வரைபடம், பாதுகாப்பான lane மாற்றம் மற்றும் இரவு/வானிலை வாகன ஓட்ட பாதுகாப்பு.'
        },
        {
          en: 'Predictive Driving & Fuel Optimization: Reading traffic patterns ahead to minimize unnecessary braking and idling wastage.',
          ta: 'Predictive Driving & எரிபொருள் மேம்படுத்தல்: முன்னே உள்ள போக்குவரத்து வடிவங்களைப் படித்து தேவையற்ற braking மற்றும் idle wastage-ஐ குறைத்தல்.'
        },
        {
          en: 'Microsleep & Fatigue Management: Recognizing signs of driver exhaustion, managing long-haul stress, and driver ergonomics.',
          ta: 'Microsleep & சோர்வு மேலாண்மை: ஓட்டுநர் exhaustion அறிகுறிகளை அடையாளம் காணுதல், நீண்ட தூர stress மேலாண்மை மற்றும் driver ergonomics.'
        },
        {
          en: 'Pre-Trip Vehicle Inspection Checklist: Standardized daily routines for checking brakes, tire pressure, fluid levels, and lighting.',
          ta: 'பயணத்திற்கு முன் வாகன ஆய்வு Checklist: brake, டையர் அழுத்தம், திரவ அளவுகள் மற்றும் விளக்குகளைத் தினசரி சரிபார்க்கும் தரப்படுத்தப்பட்ட நடைமுறைகள்.'
        }
      ],
      roiMetrics: [
        { en: '10%–15% fuel efficiency improvement', ta: '10%–15% எரிபொருள் திறன் மேம்பாடு' },
        { en: 'Up to 60% reduction in accident incident rate', ta: 'விபத்து நிகழ்வு விகிதத்தில் 60% வரை குறைப்பு' },
        { en: '20% maintenance savings', ta: '20% பராமரிப்பு சேமிப்பு' },
        { en: 'Higher driver retention & lower stress', ta: 'ஓட்டுநர் retention அதிகரிப்பு & stress குறைப்பு' }
      ]
    },
    busDriver: {
      title: {
        en: 'School & College Bus Driver Safety Standards',
        ta: 'பள்ளி & கல்லூரி Bus ஓட்டுநர் பாதுகாப்பு தரங்கள்'
      },
      audience: {
        en: 'School Principals, Correspondents & College Transport Committees',
        ta: 'பள்ளி தலைமையாசிரியர்கள், Correspondents & கல்லூரி போக்குவரத்து குழுக்கள்'
      },
      intro: {
        en: 'Custodian Responsibility: School and college bus drivers hold the safety of hundreds of students in their hands daily. Our workshops transform driving routines into proactive safety protocols.',
        ta: 'பொறுப்பாளர் கடமை: பள்ளி மற்றும் கல்லூரி bus ஓட்டுநர்கள் தினமும் நூற்றுக்கணக்கான மாணவர்களின் பாதுகாப்பைத் தங்கள் கையில் வைத்திருக்கிறார்கள். எங்கள் பயிற்சி நிகழ்ச்சிகள் வாகன ஓட்ட நடைமுறைகளை முன்கூட்டிய பாதுகாப்பு நடைமுறைகளாக மாற்றுகின்றன.'
      },
      subsections: [
        {
          title: { en: 'School Bus Driver Modules', ta: 'பள்ளி Bus ஓட்டுநர் தொகுதிகள்' },
          modules: [
            {
              en: 'Child-Centric Blind Spot Identification: Mapping critical perimeter blind spots around school buses during pickup, alighting, and road crossing.',
              ta: 'குழந்தை மைய Blind Spot அடையாளம்: ஏற்ற, இறங்க மற்றும் சாலைக் கடக்கும் போது பள்ளி bus-களைச் சுற்றியுள்ள முக்கிய perimeter blind spot-களை வரைபடமாக்குதல்.'
            },
            {
              en: 'Speed Regulation & Smooth Braking: Strict adherence to speed governors, smooth acceleration, and avoiding sudden jolts that compromise child safety.',
              ta: 'வேகக் கட்டுப்பாடு & மென்மையான Braking: Speed governor-களுக்கு கடுமையான பின்பற்றுதல், மென்மையான முடுக்கம் மற்றும் குழந்தை பாதுகாப்பை பாதிக்கும் திடீர் jerk-களைத் தவிர்த்தல்.'
            },
            {
              en: 'Behavioral & Child Care Protocols: Gentle and firm communication with students, maintaining order, coordinating with bus attendants, and managing emergency exits.',
              ta: 'நடத்தை & குழந்தை பராமரிப்பு நடைமுறைகள்: மாணவர்களுடன் மென்மையான மற்றும் உறுதியான தொடர்பு, ஒழுங்கு பேணுதல், bus attendant-களுடன் ஒருங்கிணைத்தல் மற்றும் emergency exit மேலாண்மை.'
            },
            {
              en: 'Daily Pre-Trip Inspection Protocols: Daily validation of door locks, speed governors, emergency exits, first aid kits, and onboard CCTV systems.',
              ta: 'தினசரி பயணத்திற்கு முன் ஆய்வு நடைமுறைகள்: கதவு பூட்டுகள், speed governor-கள், emergency exit-கள், first aid kit-கள் மற்றும் onboard CCTV அமைப்புகளைத் தினசரி சரிபார்த்தல்.'
            }
          ]
        },
        {
          title: { en: 'College Bus Fleet Driver Modules', ta: 'கல்லூரி Bus Fleet ஓட்டுநர் தொகுதிகள்' },
          modules: [
            {
              en: 'Heavy Urban Transit Navigation: Managing large college buses through dense city morning traffic and highway speed corridors.',
              ta: 'கனரிய நகர போக்குவரத்து வழிநடத்தல்: அடர்த்தியான நகர காலை போக்குவரத்து மற்றும் நெடுஞ்சாலை வேக வழிகளில் பெரிய கல்லூரி bus-களை நிர்வகித்தல்.'
            },
            {
              en: 'Standing Passenger Stability: Smooth braking and cornering protocols to protect standing college students on high-capacity suburban routes.',
              ta: 'நின்று செல்லும் பயணி நிலைத்தன்மை: உயர் கொள்ளளவு suburban வழிகளில் நின்று செல்லும் கல்லூரி மாணவர்களைப் பாதுகாக்க மென்மையான braking & cornering நடைமுறைகள்.'
            },
            {
              en: 'Intercity & Outstation Event Transit: Route planning, highway lane discipline, and night driving rules for sports meets and academic excursions.',
              ta: 'நகரங்களுக்கு இடையிலான & வெளியூர் நிகழ்வு போக்குவரத்து: விளையாட்டு meets & academic excursion-களுக்கான route planning, நெடுஞ்சாலை lane discipline மற்றும் இரவு வாகன ஓட்ட விதிகள்.'
            }
          ]
        }
      ]
    },
    schoolStudent: {
      title: {
        en: 'School Student Road Safety Workshop — Grades 5 to 12',
        ta: 'பள்ளி மாணவர் சாலை பாதுகாப்பு பயிற்சி — 5 முதல் 12 ஆம் வகுப்பு'
      },
      audience: {
        en: 'School Students, Road Safety Patrols (RSP) & School Management',
        ta: 'பள்ளி மாணவர்கள், Road Safety Patrols (RSP) & பள்ளி நிர்வாகம்'
      },
      focusAreas: [
        {
          title: { en: 'Pedestrian & Bicycle Safety', ta: 'பாதசாரி & சைக்கிள் பாதுகாப்பு' },
          desc: {
            en: 'Mastering traffic sign recognition, zebra crossing rules, sidewalk etiquette, and safe bicycle riding practices.',
            ta: 'போக்குவரத்து அடையாளம் அறிதல், zebra crossing விதிகள், footpath நடைமுறைகள் மற்றும் பாதுகாப்பான சைக்கிள் ஓட்ட பயிற்சிகளை முழுமையாகக் கற்றல்.'
          }
        },
        {
          title: { en: 'Bus & Commute Discipline', ta: 'Bus & பயண ஒழுங்கு' },
          desc: {
            en: 'Orderly queuing during bus boarding, staying seated, keeping limbs inside, and respecting driver focus.',
            ta: 'Bus ஏறும்போது ஒழுங்கான queue, அமர்ந்து இருத்தல், உடல் பாகங்களை உள்ளே வைத்தல் மற்றும் ஓட்டுநர் கவனத்தை மதித்தல்.'
          }
        }
      ],
      modules: [
        {
          en: 'Traffic Sign Mastery & Road Language: Visual quizzes identifying mandatory, cautionary, and informatory road signs in daily life.',
          ta: 'போக்குவரத்து அடையாளம் தேர்ச்சி & சாலை மொழி: அன்றாட வாழ்வில் கட்டாய, எச்சரிக்கை மற்றும் தகவல் சாலை அடையாளங்களை அடையாளம் காண visual quiz-கள்.'
        },
        {
          en: 'Safe Pedestrian Practices: Understanding vehicle stopping distances, using pedestrian footbridges/underpasses, and safe road crossing procedures.',
          ta: 'பாதுகாப்பான பாதசாரி நடைமுறைகள்: வாகன stopping distance-ஐ புரிந்துகொள்ளுதல், footbridge/underpass பயன்பாடு மற்றும் பாதுகாப்பான சாலைக் கடத்தல் நடைமுறைகள்.'
        },
        {
          en: 'School Bus Code of Conduct: Orderly bus queuing, emergency exit location awareness, quiet cabin behavior, and respectful interaction with drivers.',
          ta: 'பள்ளி Bus நடத்தை விதிமுறைகள்: ஒழுங்கான bus queue, emergency exit இருப்பிடம் அறிதல், அமைதியான cabin நடத்தை மற்றும் ஓட்டுநர்களுடன் மரியாதையான தொடர்பு.'
        },
        {
          en: 'Road Safety Ambassador Pledge: Students take a formal pledge to remind parents to wear helmets, fasten seatbelts, and avoid using smartphones while driving.',
          ta: 'சாலை பாதுகாப்பு Ambassador உறுதிமொழி: பெற்றோருக்கு helmet அணிதல், seatbelt கட்டுதல் மற்றும் வாகனம் ஓட்டும்போது smartphone பயன்பாட்டைத் தவிர்க்க நினைவூட்டும் formal உறுதிமொழியை மாணவர்கள் எடுத்துக்கொள்வர்.'
        }
      ],
      engagement: {
        en: 'Features interactive visual road hazard demos, sign quizzes, and RoadMinded Student Safety Ambassador Badges.',
        ta: 'Interactive visual சாலை அபாய demo-கள், sign quiz-கள் மற்றும் RoadMinded Student Safety Ambassador Badge-களை உள்ளடக்கியது.'
      }
    },
    collegeYouth: {
      title: {
        en: 'College Youth Riding & Responsible Driving Masterclass',
        ta: 'கல்லூரி இளைஞர் Riding & பொறுப்பான Driving Masterclass'
      },
      audience: {
        en: 'College Students, NSS Units, Youth Clubs & Student Affairs',
        ta: 'கல்லூரி மாணவர்கள், NSS Units, Youth Clubs & Student Affairs'
      },
      focusAreas: [
        {
          title: { en: 'Physics of Speed & Impact', ta: 'வேகம் & Impact-ன் Physics' },
          desc: {
            en: 'Scientific analysis of braking distance, reaction lag time, impact kinetic energy, and helmet structural mechanics.',
            ta: 'Braking distance, reaction lag time, impact kinetic energy மற்றும் helmet structural mechanics-ன் அறிவியல் பகுப்பாய்வு.'
          }
        },
        {
          title: { en: 'Distracted & Impaired Driving', ta: 'Distracted & Impaired Driving' },
          desc: {
            en: 'High-impact awareness on smartphone distraction, earphone use, stunt recording, and legal DUI consequences.',
            ta: 'Smartphone distraction, earphone பயன்பாடு, stunt recording மற்றும் சட்டப்பூர்வ DUI விளைவுகள் குறித்து உயர் தாக்கம் awareness.'
          }
        }
      ],
      modules: [
        {
          en: 'Anti-Distracted Riding Hazards: Real-world case breakdowns of reaction delays caused by earphones, texting, or recording videos while riding two-wheelers.',
          ta: 'Anti-Distracted Riding அபாயங்கள்: Two-wheeler ஓட்டும்போது earphone, texting அல்லது video recording-ஆல் ஏற்படும் reaction delay-க்கான real-world case பகுப்பாய்வுகள்.'
        },
        {
          en: 'Helmet & ISI Gear Compliance: Demonstration of certified full-face ISI helmets versus uncertified cap helmets and chin strap security.',
          ta: 'Helmet & ISI Gear Compliance: Certified full-face ISI helmet-கள் vs uncertified cap helmet-கள் மற்றும் chin strap security-ன் demonstration.'
        },
        {
          en: 'Overspeeding & Rash Riding Risks: Understanding how doubling vehicle speed quadruples stopping distance and impact forces during collisions.',
          ta: 'Overspeeding & Rash Riding அபாயங்கள்: வாகன வேகத்தை இரட்டிப்பாக்கினால் stopping distance & impact force-கள் நான்கு மடங்காகும் என்பதைப் புரிந்துகொள்ளுதல்.'
        },
        {
          en: 'Anti-Drunk Driving & Legal Reality: Medical impact of alcohol impairment, driver license cancellation rules, criminal liabilities, and family impact.',
          ta: 'Anti-Drunk Driving & சட்ட யதார்த்தம்: Alcohol impairment-ன் medical impact, driver license cancellation விதிகள், criminal liabilities & குடும்பத் தாக்கம்.'
        },
        {
          en: 'Emergency First Response & Golden Hour: Good Samaritan law protection, accident scene securing, and rapid emergency helpline activation.',
          ta: 'Emergency First Response & Golden Hour: Good Samaritan law பாதுகாப்பு, accident scene securing & rapid emergency helpline activation.'
        },
        {
          en: 'Youth Leadership Collaboration: Conducted alongside NSS units and Student Affairs to establish peer-led campus road safety squads.',
          ta: 'Youth Leadership Collaboration: NSS units & Student Affairs-உடன் இணைந்து peer-led campus road safety squad-களை நிறுவுதல்.'
        }
      ]
    },
    websiteSitemap: {
      title: {
        en: 'Website Sitemap & Developer Reference Frame',
        ta: 'Website Sitemap & Developer Reference Frame'
      },
      audience: {
        en: 'Web Developers & Content Teams',
        ta: 'Web Developers & Content Teams'
      },
      intro: {
        en: 'Structured layout copy for web developers and content teams.',
        ta: 'Structured layout copy for web developers and content teams.'
      },
      sitemapItems: [
        {
          title: { en: 'Home Page', ta: 'Home Page' },
          desc: {
            en: 'Hero banner featuring official logo, core slogan (Drive Smart. Reduce Accidents), 5 target audience cards, and CTA buttons.',
            ta: 'Hero banner featuring official logo, core slogan (Drive Smart. Reduce Accidents), 5 target audience cards, and CTA buttons.'
          }
        },
        {
          title: { en: 'Luxury Hotels Page', ta: 'Luxury Hotels Page' },
          desc: {
            en: 'Executive chauffeur etiquette, VIP guest handling, zero-jerk driving, and luxury asset protection.',
            ta: 'Executive chauffeur etiquette, VIP guest handling, zero-jerk driving, and luxury asset protection.'
          }
        },
        {
          title: { en: 'Commercial Fleets Page', ta: 'Commercial Fleets Page' },
          desc: {
            en: 'Focused on 10–15% fuel ROI, defensive driving, maintenance reduction, and fatigue management.',
            ta: 'Focused on 10–15% fuel ROI, defensive driving, maintenance reduction, and fatigue management.'
          }
        },
        {
          title: { en: 'Educational Fleets Page', ta: 'Educational Fleets Page' },
          desc: {
            en: 'Dual-track content for school bus drivers, child blind-spot safety, and college fleet standards.',
            ta: 'Dual-track content for school bus drivers, child blind-spot safety, and college fleet standards.'
          }
        },
        {
          title: { en: 'Student Safety Workshops Page', ta: 'Student Safety Workshops Page' },
          desc: {
            en: 'Interactive school safety programs, youth riding physics, and campus ambassador pledges.',
            ta: 'Interactive school safety programs, youth riding physics, and campus ambassador pledges.'
          }
        },
        {
          title: { en: 'Contact / Lead Form', ta: 'Contact / Lead Form' },
          desc: {
            en: 'Sector-specific proposal lead generation forms capturing fleet sizes, driver counts, and preferred workshop dates.',
            ta: 'Sector-specific proposal lead generation forms capturing fleet sizes, driver counts, and preferred workshop dates.'
          }
        }
      ],
      copywritingFrame: {
        en: '[HERO BANNER] Headline: RoadMinded Safety Solutions — Executive Driving, Fleet Safety & Student Masterclass. Slogan: Drive Smart. Reduce Accidents. Sub-headline: World-class safety protocols on the road. Elite hospitality in the cabin. CTA 1: [ Request B2B Proposal ] CTA 2: [ Download Sector Modules ]. [TARGET AUDIENCE CARDS] Card 1: 5-Star Luxury Hotels → "5-Star Hospitality Beyond the Lobby". Card 2: Commercial Fleets → "10–15% Fuel Savings & Accident Reduction". Card 3: School & College Fleets → "100% Safe Student Transportation Systems". Card 4: School Students Workshop → "Safe Commute Habits & Pedestrian Awareness". Card 5: College Youth Masterclass → "Responsible Youth Riding & Anti-Distraction".',
        ta: '[HERO BANNER] Headline: RoadMinded Safety Solutions — Executive Driving, Fleet Safety & Student Masterclass. Slogan: Drive Smart. Reduce Accidents. Sub-headline: World-class safety protocols on the road. Elite hospitality in the cabin. CTA 1: [ Request B2B Proposal ] CTA 2: [ Download Sector Modules ]. [TARGET AUDIENCE CARDS] Card 1: 5-Star Luxury Hotels → "5-Star Hospitality Beyond the Lobby". Card 2: Commercial Fleets → "10–15% Fuel Savings & Accident Reduction". Card 3: School & College Fleets → "100% Safe Student Transportation Systems". Card 4: School Students Workshop → "Safe Commute Habits & Pedestrian Awareness". Card 5: College Youth Masterclass → "Responsible Youth Riding & Anti-Distraction".'
      },
      audienceCards: [
        { en: '5-Star Luxury Hotels → "5-Star Hospitality Beyond the Lobby"', ta: '5-Star Luxury Hotels → "5-Star Hospitality Beyond the Lobby"' },
        { en: 'Commercial Fleets → "10–15% Fuel Savings & Accident Reduction"', ta: 'Commercial Fleets → "10–15% Fuel Savings & Accident Reduction"' },
        { en: 'School & College Fleets → "100% Safe Student Transportation Systems"', ta: 'School & College Fleets → "100% Safe Student Transportation Systems"' },
        { en: 'School Students Workshop → "Safe Commute Habits & Pedestrian Awareness"', ta: 'School Students Workshop → "Safe Commute Habits & Pedestrian Awareness"' },
        { en: 'College Youth Masterclass → "Responsible Youth Riding & Anti-Distraction"', ta: 'College Youth Masterclass → "Responsible Youth Riding & Anti-Distraction"' }
      ]
    },
    b2bPitch: {
      title: {
        en: 'Formal B2B Pitch Proposals (Hotels & Fleets)',
        ta: 'Formal B2B Pitch Proposals (Hotels & Fleets)'
      },
      audience: {
        en: 'Hotel General Managers & Fleet Owners / Logistics Managers',
        ta: 'Hotel General Managers & Fleet Owners / Logistics Managers'
      },
      intro: {
        en: 'High-converting pitch templates for business development.',
        ta: 'High-converting pitch templates for business development.'
      },
      templates: [
        {
          title: { en: 'Template 1: For 5-Star Hotel General Managers', ta: 'Template 1: For 5-Star Hotel General Managers' },
          subject: {
            en: 'Subject: Proposal: Luxury Guest Handling & Chauffeur Masterclass — RoadMinded Safety Solutions',
            ta: 'Subject: Proposal: Luxury Guest Handling & Chauffeur Masterclass — RoadMinded Safety Solutions'
          },
          body: {
            en: 'Dear General Manager, Your guests\' 5-star experience begins long before they enter your lobby. At RoadMinded Safety Solutions, we train luxury hotel chauffeurs in VIP guest etiquette, zero-jerk smooth driving, and international communication standards.',
            ta: 'Dear General Manager, Your guests\' 5-star experience begins long before they enter your lobby. At RoadMinded Safety Solutions, we train luxury hotel chauffeurs in VIP guest etiquette, zero-jerk smooth driving, and international communication standards.'
          },
          bullets: [
            { en: 'Zero-Jerk driving dynamics that protect guest comfort and luxury vehicle assets.', ta: 'Zero-Jerk driving dynamics that protect guest comfort and luxury vehicle assets.' },
            { en: 'International grooming, luggage handling, and VVIP privacy discretion.', ta: 'International grooming, luggage handling, and VVIP privacy discretion.' },
            { en: 'Elevation of your hotel\'s guest review scores on transportation satisfaction.', ta: 'Elevation of your hotel\'s guest review scores on transportation satisfaction.' }
          ],
          closing: {
            en: 'We welcome a brief 15-minute meeting to discuss a customized training program for your chauffeur team. Sincerely, RoadMinded Executive Team | Drive Smart. Reduce Accidents.',
            ta: 'We welcome a brief 15-minute meeting to discuss a customized training program for your chauffeur team. Sincerely, RoadMinded Executive Team | Drive Smart. Reduce Accidents.'
          }
        },
        {
          title: { en: 'Template 2: For Fleet Owners & Logistics Managers', ta: 'Template 2: For Fleet Owners & Logistics Managers' },
          subject: {
            en: 'Subject: Proposal: Commercial Fleet Safety & Fuel Efficiency Masterclass — RoadMinded',
            ta: 'Subject: Proposal: Commercial Fleet Safety & Fuel Efficiency Masterclass — RoadMinded'
          },
          body: {
            en: 'Dear Fleet Manager, RoadMinded Safety Solutions offers specialized workshops for commercial logistics fleets that deliver:',
            ta: 'Dear Fleet Manager, RoadMinded Safety Solutions offers specialized workshops for commercial logistics fleets that deliver:'
          },
          bullets: [
            { en: '10%–15% fuel cost savings through predictive driving techniques.', ta: '10%–15% fuel cost savings through predictive driving techniques.' },
            { en: 'Up to 60% reduction in accident risks and vehicle downtime.', ta: 'Up to 60% reduction in accident risks and vehicle downtime.' },
            { en: 'Extended maintenance intervals for tires and braking systems.', ta: 'Extended maintenance intervals for tires and braking systems.' }
          ],
          closing: {
            en: 'We look forward to demonstrating how our masterclass can optimize your fleet\'s operating ROI. Sincerely, RoadMinded Executive Team',
            ta: 'We look forward to demonstrating how our masterclass can optimize your fleet\'s operating ROI. Sincerely, RoadMinded Executive Team'
          }
        }
      ]
    },
    eduPitch: {
      title: {
        en: 'School & College Pitch Proposals',
        ta: 'School & College Pitch Proposals'
      },
      audience: {
        en: 'School Principals & NSS Coordinators',
        ta: 'School Principals & NSS Coordinators'
      },
      intro: {
        en: 'Targeted outreach for principals and NSS coordinators.',
        ta: 'Targeted outreach for principals and NSS coordinators.'
      },
      templates: [
        {
          title: { en: 'Template 3: For School Principals (Bus Drivers & Students)', ta: 'Template 3: For School Principals (Bus Drivers & Students)' },
          subject: {
            en: 'Subject: Proposal: Student Road Safety & Bus Driver Training — RoadMinded Safety Solutions',
            ta: 'Subject: Proposal: Student Road Safety & Bus Driver Training — RoadMinded Safety Solutions'
          },
          body: {
            en: 'Dear Principal, Ensuring student safety during daily transit is a top priority for parents and school management. RoadMinded Safety Solutions offers a two-tier workshop program:',
            ta: 'Dear Principal, Ensuring student safety during daily transit is a top priority for parents and school management. RoadMinded Safety Solutions offers a two-tier workshop program:'
          },
          bullets: [
            { en: 'School Bus Drivers: Child-centric blind spot training, smooth driving, and emergency protocols.', ta: 'School Bus Drivers: Child-centric blind spot training, smooth driving, and emergency protocols.' },
            { en: 'Students (Grades 5–12): Interactive traffic sign mastery, bus queue discipline, and safety pledges.', ta: 'Students (Grades 5–12): Interactive traffic sign mastery, bus queue discipline, and safety pledges.' }
          ],
          closing: {
            en: 'We would be honored to host a road safety awareness session for your school during the upcoming term. Sincerely, RoadMinded Educational Team',
            ta: 'We would be honored to host a road safety awareness session for your school during the upcoming term. Sincerely, RoadMinded Educational Team'
          }
        },
        {
          title: { en: 'Template 4: For College Principals & NSS Coordinators', ta: 'Template 4: For College Principals & NSS Coordinators' },
          subject: {
            en: 'Subject: Proposal: Youth Road Safety & Riding Masterclass — RoadMinded Safety Solutions',
            ta: 'Subject: Proposal: Youth Road Safety & Riding Masterclass — RoadMinded Safety Solutions'
          },
          body: {
            en: 'Dear Principal / NSS Coordinator, Empowering youth with responsible driving habits saves lives. RoadMinded Safety Solutions, in collaboration with college NSS units and Student Affairs, conducts high-impact student workshops covering:',
            ta: 'Dear Principal / NSS Coordinator, Empowering youth with responsible driving habits saves lives. RoadMinded Safety Solutions, in collaboration with college NSS units and Student Affairs, conducts high-impact student workshops covering:'
          },
          bullets: [
            { en: 'Anti-distracted riding (dangers of smartphones & earphones while driving).', ta: 'Anti-distracted riding (dangers of smartphones & earphones while driving).' },
            { en: 'Physics of braking distance & certified ISI helmet compliance.', ta: 'Physics of braking distance & certified ISI helmet compliance.' },
            { en: 'Anti-drunk driving awareness & legal liabilities.', ta: 'Anti-drunk driving awareness & legal liabilities.' }
          ],
          closing: {
            en: 'We request an opportunity to conduct this campus safety masterclass during student orientation or road safety week. Sincerely, RoadMinded Executive Team | Drive Smart. Reduce Accidents.',
            ta: 'We request an opportunity to conduct this campus safety masterclass during student orientation or road safety week. Sincerely, RoadMinded Executive Team | Drive Smart. Reduce Accidents.'
          }
        }
      ]
    }
  },

  trainers: [
    {
      id: 'tr-founder',
      featured: true,
      name: { en: 'Vetrivel Ayyadurai', ta: 'வெற்றிவேல் அய்யadurai' },
      role: { en: 'Founder & Lead Trainer', ta: 'நிறுவனர் & முதன்மை பயிற்றுவிப்பார்' },
      experience: 20,
      initials: 'VA',
      bio: {
        en: 'Vetrivel has spent 20+ years driving highways and city streets across Tamil Nadu — and holds a Diploma in Professional Driving. Road Minded Safety Solutions turns that road-tested experience into interactive workshops that students don\'t just sit through, they feel: real braking demonstrations, real dashcam footage, real road scenarios.',
        ta: 'வெற்றிவேல் தமிழ்நாடு முழுவதும் நெடுஞ்சாலைகள் மற்றும் நகரப் பாதைகளில் 20க்கும் அதிக ஆண்டுகள் வாகனம் ஓட்டிய அனுபவம் கொண்டவர் — தொழில்முறை வாகன ஓட்டத்தில் Diploma பெற்றவர். Road Minded Safety Solutions, சாலையில் பெற்ற அனுபavathai, மாணவர்கள் மட்டும் அமர்ந்து கேட்காமல் உணரக்கூடிய interactive பயிற்சி நிகழ்ச்சிகளாக மாற்றுகிறது — உண்மையான braking demo, dashcam footage, சாலை scenario-கள்.'
      },
      tagline: {
        en: 'No theory-only lectures. Every session is built from what the road actually teaches.',
        ta: 'கோட்பாடு மட்டும் பாடம் இல்லை. ஒவ்வொரு அமர்வும் சாலை உண்மையில் கற்பிக்கும் விஷயங்களிலிருந்து உருவாக்கப்படுகிறது.'
      },
      highlights: [
        {
          title: { en: '20+ Years Highway & City Driving', ta: 'நெடுஞ்சாலை & நகர வாகன ஓட்டத்தில் 20+ ஆண்டுகள்' },
          desc: { en: 'Experience earned on real Indian roads, every single day', ta: 'தினமும் உண்மையான இந்திய சாலைகளில் பெறப்பட்ட அனுபavam' }
        },
        {
          title: { en: 'Diploma Certified Trainer', ta: 'Diploma சான்றளிக்கப்பட்ட பயிற்றுவிப்பார்' },
          desc: { en: 'Diploma in Professional Driving — certified road craft', ta: 'தொழில்முறை வாகன ஓட்டத்தில் Diploma — சான்றளிக்கப்பட்ட சாலை நuட்பம்' }
        },
        {
          title: { en: 'Real-World Defensive Driving Specialist', ta: 'Real-World Defensive Driving நிபுணர்' },
          desc: { en: 'Interactive workshops built from live road experience', ta: 'நேரடி சாலை அனுபavathilirundhu கட்டமைக்கப்பட்ட interactive பயிற்சி நிகழ்ச்சிகள்' }
        }
      ],
      specialization: { en: 'Real-World Defensive Driving Specialist', ta: 'Real-World Defensive Driving நிபுணர்' }
    },
    {
      id: 'tr-cofounder',
      featured: true,
      name: { en: 'Vishal Vetrivel', ta: 'விஷால் வெற்றிவேல்' },
      role: {
        en: 'Co-Founder — Business Operations & Media Lead',
        ta: 'இணை நிறுவனர் — வணிக செயல்பாடுகள் & ஊடக Lead'
      },
      initials: 'VV',
      bio: {
        en: 'As Co-Founder, Vishal drives overall business strategy, operations management, and service execution. He leads end-to-end event and program coordination—managing workflows, scheduling, and live execution on-site. Additionally, he heads visual media and photography, ensuring every workshop and program is professionally documented and aligned with high branding standards.',
        ta: 'இணை நிறுவனராக, Vishal ஒட்டுமொத்த வணிக strategy, operations management மற்றும் service execution-ஐ வழிநடத்துகிறார். Workflows, scheduling மற்றும் on-site live execution-ஐ manage செய்து end-to-end event & program coordination-ஐ lead செய்கிறார். மேலும், visual media & photography-ஐ head செய்து, ஒவ்வொரு workshop & program-உம் professionally documented ஆகவும் high branding standards-க்கு aligned ஆகவும் உறுதி செய்கிறார்.'
      },
      highlights: [
        {
          title: { en: 'Business Strategy & Operations', ta: 'வணிக Strategy & Operations' },
          desc: {
            en: 'Drives overall business strategy, operations management, and service execution',
            ta: 'ஒட்டுமொத்த வணிக strategy, operations management & service execution-ஐ வழிநடத்துதல்'
          }
        },
        {
          title: { en: 'Event & Program Coordination', ta: 'Event & Program Coordination' },
          desc: {
            en: 'End-to-end coordination—workflows, scheduling, and live on-site execution',
            ta: 'End-to-end coordination — workflows, scheduling & live on-site execution'
          }
        },
        {
          title: { en: 'Visual Media & Photography', ta: 'Visual Media & Photography' },
          desc: {
            en: 'Professional documentation and branding for every workshop and program',
            ta: 'ஒவ்வொரு workshop & program-க்கும் professional documentation & branding'
          }
        }
      ]
    },
  ],

  testimonials: [],

  certificates: {},

  stats: [],

  districtList: ['chennai', 'coimbatore', 'salem', 'madurai', 'trichy', 'tirunelveli', 'erode', 'vellore', 'thoothukudi', 'other'],

  resourceKeys: [],

  certificateDocuments: [
    {
      id: 'cert-fire-fighting',
      file: 'assets/certificates/basics-of-fire-fighting.pdf',
      icon: 'flame',
      title: { en: 'Basics of Fire Fighting', ta: 'தீ தடுப்பு அடிப்படைகள்' },
      desc: {
        en: 'Foundational fire fighting principles, prevention methods, and emergency response procedures for industrial workplaces.',
        ta: 'தொழில்துறை பணியிடங்களுக்கான தீ தடுப்பு அடிப்படைகள், தடுப்பு முறைகள் மற்றும் அவசர எதிர்வினை நடைமுறைகள்.'
      }
    },
    {
      id: 'cert-first-aid',
      file: 'assets/certificates/first-aid-residency.pdf',
      icon: 'heart-pulse',
      title: { en: 'First Aid — Residency', ta: 'முதலுதவி — Residency' },
      desc: {
        en: 'First aid training certificate covering essential emergency care and workplace injury response.',
        ta: 'அத்தியாவசிய அவசர சிகிச்சை மற்றும் பணியிட காயம் எதிர்வினையை உள்ளடக்கிய முதலுதவி பயிற்சி சான்றிதழ்.'
      }
    },
    {
      id: 'cert-workplace-safety',
      file: 'assets/certificates/workplace-safety.pdf',
      icon: 'shield',
      title: { en: 'Workplace Safety', ta: 'பணியிட பாதுகாப்பு' },
      desc: {
        en: 'Workplace safety compliance training document for factories, offices, and industrial facilities.',
        ta: 'தொழிற்சாலைகள், அலுவலகங்கள் மற்றும் தொழில்துறை வசதிகளுக்கான பணியிட பாதுகாப்பு இணங்குதல் பயிற்சி ஆவணம்.'
      }
    },
    {
      id: 'cert-road-safety-pledge',
      file: 'assets/certificates/road-safety-pledge.jpg',
      icon: 'certificate',
      title: { en: 'Road Safety Pledge', ta: 'சாலை பாதுகாப்பு உறுதிமொழி' },
      desc: {
        en: 'Vetrivel Ayyadurai — Ministry of Road Transport and Highways, May 23, 2026.',
        ta: 'Vetrivel Ayyadurai — சாலை போக்குவரத்து மற்றும் நெடுஞ்சாலைகள் அமைச்சகம், May 23, 2026.'
      }
    },
    {
      id: 'cert-supply-chain',
      file: 'assets/certificates/advanced-supply-chain.pdf',
      icon: 'factory',
      title: { en: 'Advanced Supply Chain', ta: 'மேம்பட்ட Supply Chain' },
      desc: {
        en: 'Advanced supply chain training certificate.',
        ta: 'மேம்பட்ட supply chain பயிற்சி சான்றிதழ்.'
      }
    }
  ]
};

/** Apply full Tamil translations for workshop sectors (merged on load) */
(function applyWorkshopTamil() {
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.workshopSectors) return;

  function setTa(obj, ta) {
    if (obj && typeof obj === 'object' && 'ta' in obj) obj.ta = ta;
  }

  function setList(items, values) {
    if (!items || !values) return;
    values.forEach((val, i) => {
      if (typeof val === 'string') setTa(items[i], val);
      else if (val && items[i]) {
        if (val.title) setTa(items[i].title, val.title);
        if (val.desc) setTa(items[i].desc, val.desc);
      }
    });
  }

  const patches = {
    chauffeur: {
      title: '5-நட்சத்திர & ஆடம்பர ஹோட்டல் Chauffeur முதன்மைப் பயிற்சி',
      audience: 'ஹோட்டல் பொது மேலாளர்கள், Concierge இயக்குநர்கள் & VIP Fleet கூட்டாளர்கள்',
      highlights: [
        { title: 'விருந்தினருக்கு மரியாதைக்குரிய முதல் & கடைசி தோற்றம்', desc: 'விமான நிலைய பேரிப்பு மற்றும் VIP நகரச் சுற்றுலாக்களின் போது லாபியைத் தாண்டி வாகன உள்ளறை வரை 5-நட்சத்திர ஹோட்டல் வரவேற்பை நீட்டித்தல்.' },
        { title: 'VVIP பாதுகாப்பு & தனியுரிமை', desc: 'உயர் மதிப்பு வாகனங்களை (Rolls-Royce, Maybach, BMW 7 Series, Mercedes S-Class) பாதுகாத்து விருந்தினர் தனியுரிமையைப் பாதுகாத்தல்.' }
      ],
      modules: [
        'நிர்வாக தோற்றநலம் & கதவு நடைமுறைகள்: Uniform தரங்கள், தனிப்பட்ட சுகாதாரம், உடல் நிலை, சாமான் பராமரிப்பு மற்றும் மரியாதையான கதவு நடைமுறைகள்.',
        'Zero-Jerk வாகன ஓட்ட இயக்கவியல்: படிப்படியான முடுக்கம், மென்மையான braking, தடையற்ற திருப்பம் மூலம் பயணிகளின் முழுமையான நிலைத்தன்மையை உறுதி செய்தல்.',
        'சர்வதேச வாடிக்கையாளர் தொடர்பு: கலாச்சார உணர்வுள்ள வாழ்த்துகள், மரியாதையான ஆங்கிலம், செயலில் கேட்பது மற்றும் தனியுரிமை விவேகம்.',
        'உள்ளறை சூழல் கட்டுப்பாடு: காலநிலை, நறுமணம், சுற்றுப்புற விளக்கு, சுகாதாரம் மற்றும் பிரீமியம் வசதிகளை முன்கூட்டியே ஒழுங்கமைத்தல்.'
      ],
      roiText: 'விருந்தினர் பயணப் புகார்களை நீக்குகிறது, ஆடம்பர வாகனங்களின் மதிப்பைப் பாதுகாக்கிறது, விருந்தினர் மதிப்புரை தளங்களில் ஹோட்டல் போக்குவரத்து திருப்தி மதிப்பெண்களை உயர்த்துகிறது.'
    },
    fleet: {
      title: 'வணிக Fleet பாதுகாப்பு & இயங்குமுறை ROI',
      audience: 'Fleet உரிமையாளர்கள், Logistics இயக்குநர்கள், Supply Chain தலைவர்கள் & பாதுகாப்பு அலுவலர்கள்',
      highlights: [
        { title: 'எரிபொருள் செலவு சேமிப்பு (10–15%)', desc: 'முடுக்க வளைவுகள், கியர் தேர்வு மற்றும் idle கட்டுப்பாட்டை மேம்படுத்தி எரிபொருள் பயன்பாட்டை கணிசமாகக் குறைத்தல்.' },
        { title: 'பராமரிப்பு & சொத்து பாதுகாப்பு', desc: 'கடுமையான braking மற்றும் டையர் அணிவைத் தடுத்து சேவை இடைவெளிகளை நீட்டித்து வாகனங்களை சாலை வழிகளில் செயலில் வைத்தல்.' }
      ],
      modules: [
        'மேம்பட்ட Defensive Driving: அபாய உணர்தல், சாலை உளவியல் புரிதல் மற்றும் 3-வினாடி Following Distance விதியைச் செயல்படுத்துதல்.',
        'Blind Spot & நெடுஞ்சாலை நடைமுறைகள்: வணிக லாரிகளுக்கான blind spot வரைபடம், பாதுகாப்பான lane மாற்றம் மற்றும் இரவு/வானிலை வாகன ஓட்ட பாதுகாப்பு.',
        'Predictive Driving & எரிபொருள் மேம்படுத்தல்: முன்னே உள்ள போக்குவரத்து வடிவங்களைப் படித்து தேவையற்ற braking மற்றும் idle wastage-ஐ குறைத்தல்.',
        'Microsleep & சோர்வு மேலாண்மை: ஓட்டுநர் exhaustion அறிகுறிகளை அடையாளம் காணுதல், நீண்ட தூர stress மேலாண்மை மற்றும் driver ergonomics.',
        'பயணத்திற்கு முன் வாகன ஆய்வு Checklist: brake, டையர் அழுத்தம், திரவ அளவுகள் மற்றும் விளக்குகளைத் தினசரி சரிபார்க்கும் தரப்படுத்தப்பட்ட நடைமுறைகள்.'
      ],
      roiMetrics: [
        '10%–15% எரிபொருள் திறன் மேம்பாடு',
        'விபத்து நிகழ்வு விகிதத்தில் 60% வரை குறைப்பு',
        '20% பராமரிப்பு சேமிப்பு',
        'ஓட்டுநர் retention அதிகரிப்பு & stress குறைப்பு'
      ]
    },
    busDriver: {
      title: 'பள்ளி & கல்லூரி Bus ஓட்டுநர் பாதுகாப்பு தரங்கள்',
      audience: 'பள்ளி தலைமையாசிரியர்கள், Correspondents & கல்லூரி போக்குவரத்து குழுக்கள்',
      intro: 'பொறுப்பாளர் கடமை: பள்ளி மற்றும் கல்லூரி bus ஓட்டுநர்கள் தினமும் நூற்றுக்கணக்கான மாணவர்களின் பாதுகாப்பைத் தங்கள் கையில் வைத்திருக்கிறார்கள். எங்கள் பயிற்சி நிகழ்ச்சிகள் வாகன ஓட்ட நடைமுறைகளை முன்கூட்டிய பாதுகாப்பு நடைமுறைகளாக மாற்றுகின்றன.',
      subsections: [
        {
          title: 'பள்ளி Bus ஓட்டுநர் தொகுதிகள்',
          modules: [
            'குழந்தை மைய Blind Spot அடையாளம்: ஏற்ற, இறங்க மற்றும் சாலைக் கடக்கும் போது பள்ளி bus-களைச் சுற்றியுள்ள முக்கிய perimeter blind spot-களை வரைபடமாக்குதல்.',
            'வேகக் கட்டுப்பாடு & மென்மையான Braking: Speed governor-களுக்கு கடுமையான பின்பற்றுதல், மென்மையான முடுக்கம் மற்றும் குழந்தை பாதுகாப்பை பாதிக்கும் திடீர் jerk-களைத் தவிர்த்தல்.',
            'நடத்தை & குழந்தை பராமரிப்பு நடைமுறைகள்: மாணவர்களுடன் மென்மையான மற்றும் உறுதியான தொடர்பு, ஒழுங்கு பேணுதல், bus attendant-களுடன் ஒருங்கிணைத்தல் மற்றும் emergency exit மேலாண்மை.',
            'தினசரி பயணத்திற்கு முன் ஆய்வு நடைமுறைகள்: கதவு பூட்டுகள், speed governor-கள், emergency exit-கள், first aid kit-கள் மற்றும் onboard CCTV அமைப்புகளைத் தினசரி சரிபார்த்தல்.'
          ]
        },
        {
          title: 'கல்லூரி Bus Fleet ஓட்டுநர் தொகுதிகள்',
          modules: [
            'கனரிய நகர போக்குவரத்து வழிநடத்தல்: அடர்த்தியான நகர காலை போக்குவரத்து மற்றும் நெடுஞ்சாலை வேக வழிகளில் பெரிய கல்லூரி bus-களை நிர்வகித்தல்.',
            'நின்று செல்லும் பயணி நிலைத்தன்மை: உயர் கொள்ளளவு suburban வழிகளில் நின்று செல்லும் கல்லூரி மாணவர்களைப் பாதுகாக்க மென்மையான braking & cornering நடைமுறைகள்.',
            'நகரங்களுக்கு இடையிலான & வெளியூர் நிகழ்வு போக்குவரத்து: விளையாட்டு meets & academic excursion-களுக்கான route planning, நெடுஞ்சாலை lane discipline மற்றும் இரவு வாகன ஓட்ட விதிகள்.'
          ]
        }
      ]
    },
    schoolStudent: {
      title: 'பள்ளி மாணவர் சாலை பாதுகாப்பு பயிற்சி — 5 முதல் 12 ஆம் வகுப்பு',
      audience: 'பள்ளி மாணவர்கள், Road Safety Patrols (RSP) & பள்ளி நிர்வாகம்',
      focusAreas: [
        { title: 'பாதசாரி & சைக்கிள் பாதுகாப்பு', desc: 'போக்குவரத்து அடையாளம் அறிதல், zebra crossing விதிகள், footpath நடைமுறைகள் மற்றும் பாதுகாப்பான சைக்கிள் ஓட்ட பயிற்சிகளை முழுமையாகக் கற்றல்.' },
        { title: 'Bus & பயண ஒழுங்கு', desc: 'Bus ஏறும்போது ஒழுங்கான queue, அமர்ந்து இருத்தல், உடல் பாகங்களை உள்ளே வைத்தல் மற்றும் ஓட்டுநர் கவனத்தை மதித்தல்.' }
      ],
      modules: [
        'போக்குவரத்து அடையாளம் தேர்ச்சி & சாலை மொழி: அன்றாட வாழ்வில் கட்டாய, எச்சரிக்கை மற்றும் தகவல் சாலை அடையாளங்களை அடையாளம் காண visual quiz-கள்.',
        'பாதுகாப்பான பாதசாரி நடைமுறைகள்: வாகன stopping distance-ஐ புரிந்துகொள்ளுதல், footbridge/underpass பயன்பாடு மற்றும் பாதுகாப்பான சாலைக் கடத்தல் நடைமுறைகள்.',
        'பள்ளி Bus நடத்தை விதிமுறைகள்: ஒழுங்கான bus queue, emergency exit இருப்பிடம் அறிதல், அமைதியான cabin நடத்தை மற்றும் ஓட்டுநர்களுடன் மரியாதையான தொடர்பு.',
        'சாலை பாதுகாப்பு Ambassador உறுதிமொழி: பெற்றோருக்கு helmet அணிதல், seatbelt கட்டுதல் மற்றும் வாகனம் ஓட்டும்போது smartphone பயன்பாட்டைத் தவிர்க்க நினைவூட்டும் formal உறுதிமொழியை மாணவர்கள் எடுத்துக்கொள்வர்.'
      ],
      engagement: 'Interactive visual சாலை அபாய demo-கள், sign quiz-கள் மற்றும் RoadMinded Student Safety Ambassador Badge-களை உள்ளடக்கியது.'
    },
    collegeYouth: {
      title: 'கல்லூரி இளைஞர் Riding & பொறுப்பான Driving Masterclass',
      audience: 'கல்லூரி மாணவர்கள், NSS Units, Youth Clubs & Student Affairs',
      focusAreas: [
        { title: 'வேகம் & Impact-ன் Physics', desc: 'Braking distance, reaction lag time, impact kinetic energy மற்றும் helmet structural mechanics-ன் அறிவியல் பகுப்பாய்வு.' },
        { title: 'Distracted & Impaired Driving', desc: 'Smartphone distraction, earphone பயன்பாடு, stunt recording மற்றும் சட்டப்பூர்வ DUI விளைவுகள் குறித்து உயர் தாக்கம் awareness.' }
      ],
      modules: [
        'Anti-Distracted Riding அபாயங்கள்: Two-wheeler ஓட்டும்போது earphone, texting அல்லது video recording-ஆல் ஏற்படும் reaction delay-க்கான real-world case பகுப்பாய்வுகள்.',
        'Helmet & ISI Gear Compliance: Certified full-face ISI helmet-கள் vs uncertified cap helmet-கள் மற்றும் chin strap security-ன் demonstration.',
        'Overspeeding & Rash Riding அபாயங்கள்: வாகன வேகத்தை இரட்டிப்பாக்கினால் stopping distance & impact force-கள் நான்கு மடங்காகும் என்பதைப் புரிந்துகொள்ளுதல்.',
        'Anti-Drunk Driving & சட்ட யதார்த்தம்: Alcohol impairment-ன் medical impact, driver license cancellation விதிகள், criminal liabilities & குடும்பத் தாக்கம்.',
        'Emergency First Response & Golden Hour: Good Samaritan law பாதுகாப்பு, accident scene securing & rapid emergency helpline activation.',
        'Youth Leadership Collaboration: NSS units & Student Affairs-உடன் இணைந்து peer-led campus road safety squad-களை நிறுவுதல்.'
      ]
    },
    websiteSitemap: {
      title: 'Website Sitemap & Developer Reference Frame',
      audience: 'Web Developers & Content Teams',
      intro: 'Web developers மற்றும் content teams-க்கான கட்டமைக்கப்பட்ட layout copy.',
      sitemapItems: [
        { title: 'முகப்பு பக்கம்', desc: 'அதிகாரப்பூர்வ logo, மைய slogan (Drive Smart. Reduce Accidents), 5 target audience card-கள் மற்றும் CTA பொத்தான்களைக் கொண்ட hero banner.' },
        { title: 'ஆடம்பர ஹோட்டல்கள் பக்கம்', desc: 'Executive chauffeur நடைமுறைகள், VIP விருந்தினர் கையாளுதல், zero-jerk driving மற்றும் ஆடம்பர சொத்து பாதுகாப்பு.' },
        { title: 'வணிக Fleet பக்கம்', desc: '10–15% எரிபொருள் ROI, defensive driving, பராமரிப்பு குறைப்பு மற்றும் fatigue management-ஆக கவனம்.' },
        { title: 'கல்வி Fleet பக்கம்', desc: 'பள்ளி bus ஓட்டுநர்கள், குழந்தை blind-spot பாதுகாப்பு மற்றும் கல்லூரி fleet தரங்களுக்கான இரட்டை-பாதை உள்ளடக்கம்.' },
        { title: 'மாணவர் பாதுகாப்பு பயிற்சி பக்கம்', desc: 'Interactive பள்ளி பாதுகாப்பு நிகழ்ச்சிகள், youth riding physics மற்றும் campus ambassador உறுதிமொழிகள்.' },
        { title: 'தொடர்பு / Lead Form', desc: 'Fleet அளவுகள், ஓட்டுநர் எண்ணிக்கை மற்றும் விருப்பமான பயிற்சி தேதிகளைப் பிடிக்கும் sector-specific proposal lead generation form-கள்.' }
      ],
      copywritingFrame: '[HERO BANNER] தலைப்பு: RoadMinded Safety Solutions — Executive Driving, Fleet Safety & Student Masterclass. Slogan: Drive Smart. Reduce Accidents. துணைத் தலைப்பு: சாலையில் உலகத் தர பாதுகாப்பு நடைமுறைகள். உள்ளறையில் elite வரவேற்பு. CTA 1: [ B2B Proposal கோரிக்கை ] CTA 2: [ Sector Modules பதிவிறக்கம் ]. [TARGET AUDIENCE CARDS] Card 1: 5-நட்சத்திர ஆடம்பர ஹோட்டல்கள் → "லாபிக்கு அப்பால் 5-நட்சத்திர வரவேற்பு". Card 2: வணிக Fleet-கள் → "10–15% எரிபொருள் சேமிப்பு & விபத்து குறைப்பு". Card 3: பள்ளி & கல்லூரி Fleet-கள் → "100% பாதுகாப்பான மாணவர் போக்குவரத்து அமைப்புகள்". Card 4: பள்ளி மாணவர் பயிற்சி → "பாதுகாப்பான பயண பழக்கங்கள் & பாதசாரி விழிப்புணர்வு". Card 5: கல்லூரி Youth Masterclass → "பொறுப்பான Youth Riding & Anti-Distraction".',
      audienceCards: [
        '5-நட்சத்திர ஆடம்பர ஹோட்டல்கள் → "லாபிக்கு அப்பால் 5-நட்சத்திர வரவேற்பு"',
        'வணிக Fleet-கள் → "10–15% எரிபொருள் சேமிப்பு & விபத்து குறைப்பு"',
        'பள்ளி & கல்லூரி Fleet-கள் → "100% பாதுகாப்பான மாணவர் போக்குவரத்து அமைப்புகள்"',
        'பள்ளி மாணவர் பயிற்சி → "பாதுகாப்பான பயண பழக்கங்கள் & பாதசாரி விழிப்புணர்வு"',
        'கல்லூரி Youth Masterclass → "பொறுப்பான Youth Riding & Anti-Distraction"'
      ]
    },
    b2bPitch: {
      title: 'Formal B2B Pitch Proposals (Hotels & Fleets)',
      audience: 'Hotel General Managers & Fleet Owners / Logistics Managers',
      intro: 'வணிக வளர்ச்சிக்கான உயர் conversion pitch template-கள்.',
      templates: [
        {
          title: 'Template 1: 5-நட்சத்திர ஹோட்டல் General Managers-க்கு',
          subject: 'Subject: Proposal: Luxury Guest Handling & Chauffeur Masterclass — RoadMinded Safety Solutions',
          body: 'Dear General Manager, உங்கள் விருந்தினர்களின் 5-நட்சத்திர அனுபவம் அவர்கள் லாபியில் நுழைவதற்கு மிக முன்பே தொடங்குகிறது. RoadMinded Safety Solutions-ல், ஆடம்பர ஹோட்டல் chauffeur-களுக்கு VIP விருந்தினர் நடைமுறைகள், zero-jerk smooth driving மற்றும் சர்வதேச தொடர்பு தரங்களில் பயிற்சி அளிக்கிறோம்.',
          bullets: [
            'விருந்தினர் வசதி மற்றும் ஆடம்பர வாகன சொத்துகளைப் பாதுகாக்கும் Zero-Jerk driving dynamics.',
            'சர்வதேச grooming, சாமான் கையாளுதல் மற்றும் VVIP தனியுரிமை விவேகம்.',
            'போக்குவரத்து திருப்தி குறித்து உங்கள் ஹோட்டலின் விருந்தினர் மதிப்புரை மதிப்பெண்களை உயர்த்துதல்.'
          ],
          closing: 'உங்கள் chauffeur குழுவுக்கான customized பயிற்சி நிகழ்ச்சியைப் பற்றி விவாதிக்க 15 நிமிட சந்திப்பை வரவேற்கிறோம். Sincerely, RoadMinded Executive Team | Drive Smart. Reduce Accidents.'
        },
        {
          title: 'Template 2: Fleet Owners & Logistics Managers-க்கு',
          subject: 'Subject: Proposal: Commercial Fleet Safety & Fuel Efficiency Masterclass — RoadMinded',
          body: 'Dear Fleet Manager, RoadMinded Safety Solutions வணிக logistics fleet-களுக்கான சிறப்பு பயிற்சி நிகழ்ச்சிகளை வழங்குகிறது:',
          bullets: [
            'Predictive driving நுட்பங்கள் மூலம் 10%–15% எரிபொருள் செலவு சேமிப்பு.',
            'விபத்து அபாயங்கள் மற்றும் வாகன downtime-ல் 60% வரை குறைப்பு.',
            'டையர் மற்றும் braking அமைப்புகளுக்கான நீட்டிக்கப்பட்ட பராமரிப்பு இடைவெளிகள்.'
          ],
          closing: 'எங்கள் masterclass உங்கள் fleet-ன் operating ROI-ஐ எவ்வாறு optimize செய்யும் என்பதை நாம் demonstrate செய்ய ஆவலுடன் உள்ளோம். Sincerely, RoadMinded Executive Team'
        }
      ]
    },
    eduPitch: {
      title: 'பள்ளி & கல்லூரி Pitch Proposals',
      audience: 'பள்ளி தலைமையாசிரியர்கள் & NSS Coordinators',
      intro: 'தலைமையாசிரியர்கள் மற்றும் NSS coordinators-க்கான targeted outreach.',
      templates: [
        {
          title: 'Template 3: பள்ளி தலைமையாசிரியர்களுக்கு (Bus ஓட்டுநர்கள் & மாணவர்கள்)',
          subject: 'Subject: Proposal: Student Road Safety & Bus Driver Training — RoadMinded Safety Solutions',
          body: 'Dear Principal, தினசரி பயணத்தில் மாணவர் பாதுகாப்பை உறுதி செய்வது பெற்றோர் மற்றும் பள்ளி நிர்வாகத்தின் முதன்மை முன்னுரிமை. RoadMinded Safety Solutions இரண்டு-நிலை பயிற்சி நிகழ்ச்சியை வழங்குகிறது:',
          bullets: [
            'பள்ளி Bus ஓட்டுநர்கள்: குழந்தை மைய blind spot பயிற்சி, smooth driving மற்றும் emergency நடைமுறைகள்.',
            'மாணவர்கள் (5–12 ஆம் வகுப்பு): Interactive போக்குவரத்து அடையாளம் தேர்ச்சி, bus queue ஒழுங்கு மற்றும் பாதுகாப்பு உறுதிமொழிகள்.'
          ],
          closing: 'வரும் term-ல் உங்கள் பள்ளிக்கு சாலை பாதுகாப்பு awareness session-ஐ host செய்ய honor பெறுவோம். Sincerely, RoadMinded Educational Team'
        },
        {
          title: 'Template 4: கல்லூரி தலைமையாசிரியர்கள் & NSS Coordinators-க்கு',
          subject: 'Subject: Proposal: Youth Road Safety & Riding Masterclass — RoadMinded Safety Solutions',
          body: 'Dear Principal / NSS Coordinator, பொறுப்பான driving பழக்கங்களுடன் இளைஞர்களை empower செய்வது உயிர்களைக் காப்பாற்றுகிறது. RoadMinded Safety Solutions, கல்லூரி NSS units மற்றும் Student Affairs-உடன் இணைந்து உயர் தாக்கம் student workshops நடத்துகிறது:',
          bullets: [
            'Anti-distracted riding (வாகனம் ஓட்டும்போது smartphone & earphone அபாயங்கள்).',
            'Braking distance physics & certified ISI helmet compliance.',
            'Anti-drunk driving awareness & சட்ட liabilities.'
          ],
          closing: 'Student orientation அல்லது road safety week-ல் இந்த campus safety masterclass-ஐ நடத்த வாய்ப்பு கோருகிறோம். Sincerely, RoadMinded Executive Team | Drive Smart. Reduce Accidents.'
        }
      ]
    }
  };

  Object.entries(patches).forEach(([key, p]) => {
    const s = SITE_DATA.workshopSectors[key];
    if (!s) return;
    if (p.title) setTa(s.title, p.title);
    if (p.audience) setTa(s.audience, p.audience);
    if (p.intro && s.intro) setTa(s.intro, p.intro);
    if (p.roiText && s.roiText) setTa(s.roiText, p.roiText);
    if (p.engagement && s.engagement) setTa(s.engagement, p.engagement);
    if (p.copywritingFrame && s.copywritingFrame) setTa(s.copywritingFrame, p.copywritingFrame);
    if (p.highlights) setList(s.highlights, p.highlights);
    if (p.modules) setList(s.modules, p.modules);
    if (p.roiMetrics) setList(s.roiMetrics, p.roiMetrics);
    if (p.focusAreas) setList(s.focusAreas, p.focusAreas);
    if (p.sitemapItems) setList(s.sitemapItems, p.sitemapItems);
    if (p.audienceCards) setList(s.audienceCards, p.audienceCards);
    if (p.subsections && s.subsections) {
      p.subsections.forEach((sub, i) => {
        if (!s.subsections[i]) return;
        if (sub.title) setTa(s.subsections[i].title, sub.title);
        if (sub.modules) setList(s.subsections[i].modules, sub.modules);
      });
    }
    if (p.templates && s.templates) {
      p.templates.forEach((t, i) => {
        const target = s.templates[i];
        if (!target) return;
        if (t.title) setTa(target.title, t.title);
        if (t.subject) setTa(target.subject, t.subject);
        if (t.body) setTa(target.body, t.body);
        if (t.closing) setTa(target.closing, t.closing);
        if (t.bullets) setList(target.bullets, t.bullets);
      });
    }
  });
})();
