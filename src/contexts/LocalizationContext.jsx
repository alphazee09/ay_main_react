import React, { createContext, useContext, useState, useEffect } from 'react'

const LocalizationContext = createContext()

export const useLocalization = () => {
  const context = useContext(LocalizationContext)
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider')
  }
  return context
}

// Translation data
const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      sectors: 'Sectors',
      strategy: 'Strategy', 
      services: 'Services',
      clients: 'Clients',
      about: 'About',
      contact: 'Contact',
      news: 'News'
    },
    // Common
    common: {
      loading: 'Loading...',
      readMore: 'Read More',
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactUs: 'Contact Us',
      sendMessage: 'Send Message',
      close: 'Close'
    },
    // Home Page
    home: {
      title: 'AY GROUP',
      subtitle: 'FUTURE OF BUSINESS',
      heroTitle: 'Shaping Tomorrow\'s Business Landscape',
      heroSubtitle: 'Leading innovation across multiple sectors with cutting-edge solutions and visionary strategies',
      statsClients: 'Global Clients',
      statsProjects: 'Completed Projects',
      statsCountries: 'Countries Served',
      statsExperience: 'Years Experience'
    },
    // Sectors
    sectors: {
      title: 'Our Business',
      titleHighlight: 'Sectors',
      subtitle: 'Diversified excellence across multiple industries',
      businessCenter: {
        name: 'AY Business Center',
        description: 'Premium business solutions and corporate services for modern enterprises'
      },
      softLabs: {
        name: 'AY Soft Labs',
        description: 'Cutting-edge software development and technology solutions'
      },
      construction: {
        name: 'Construction & Interiors',
        description: 'Revolutionary construction and interior design services'
      },
      logistics: {
        name: 'Logistics & Services',
        description: 'Advanced logistics and supply chain management solutions'
      },
      digital: {
        name: 'AY Digital Innovators',
        description: 'Digital transformation and innovation consultancy services'
      },
      import: {
        name: 'AY Import & Export',
        description: 'Global trade and international commerce solutions'
      },
      tours: {
        name: 'AY Malaysia Tours',
        description: 'Premium tourism and travel experiences in Malaysia'
      }
    },
    // Contact
    contact: {
      title: 'Contact',
      titleHighlight: 'Us',
      subtitle: 'Ready to shape the future together? Get in touch with our team',
      getInTouch: 'Get In Touch',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      website: 'Website',
      followUs: 'Follow Us',
      businessHours: 'Business Hours',
      monday: 'Monday - Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourMessage: 'Your Message'
    },
    // News
    news: {
      title: 'Latest',
      titleHighlight: 'News',
      subtitle: 'Stay updated with our latest innovations and achievements',
      noNews: 'No News Yet',
      noNewsDesc: 'Check back soon for the latest updates from AY Group.',
      by: 'By'
    },
    // Loading Messages
    loading: {
      home: 'LOADING HOME INTERFACE...',
      sectors: 'ACCESSING BUSINESS SECTORS...',
      strategy: 'ANALYZING STRATEGIC DATA...',
      services: 'INITIALIZING SERVICE MODULES...',
      clients: 'CONNECTING TO CLIENT DATABASE...',
      about: 'RETRIEVING COMPANY INFORMATION...',
      contact: 'ESTABLISHING COMMUNICATION LINK...',
      news: 'SYNCHRONIZING NEWS FEED...'
    }
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      sectors: 'القطاعات',
      strategy: 'الاستراتيجية',
      services: 'الخدمات',
      clients: 'العملاء',
      about: 'من نحن',
      contact: 'اتصل بنا',
      news: 'الأخبار'
    },
    // Common
    common: {
      loading: 'جاري التحميل...',
      readMore: 'اقرأ المزيد',
      learnMore: 'تعلم المزيد',
      getStarted: 'ابدأ الآن',
      contactUs: 'اتصل بنا',
      sendMessage: 'إرسال الرسالة',
      close: 'إغلاق'
    },
    // Home Page
    home: {
      title: 'مجموعة AY',
      subtitle: 'مستقبل الأعمال',
      heroTitle: 'تشكيل المشهد التجاري للغد',
      heroSubtitle: 'قيادة الابتكار عبر قطاعات متعددة بحلول متطورة واستراتيجيات رؤيوية',
      statsClients: 'عملاء عالميون',
      statsProjects: 'مشاريع مكتملة',
      statsCountries: 'دول نخدمها',
      statsExperience: 'سنوات خبرة'
    },
    // Sectors
    sectors: {
      title: 'قطاعات',
      titleHighlight: 'أعمالنا',
      subtitle: 'التميز المتنوع عبر صناعات متعددة',
      businessCenter: {
        name: 'مركز AY للأعمال',
        description: 'حلول أعمال متميزة وخدمات شركات للمؤسسات الحديثة'
      },
      softLabs: {
        name: 'مختبرات AY للبرمجيات',
        description: 'تطوير برمجيات متطور وحلول تقنية'
      },
      construction: {
        name: 'الإنشاءات والديكور الداخلي',
        description: 'خدمات إنشاءات وتصميم داخلي ثورية'
      },
      logistics: {
        name: 'اللوجستيات والخدمات',
        description: 'حلول لوجستيات متقدمة وإدارة سلسلة التوريد'
      },
      digital: {
        name: 'مبتكرو AY الرقميون',
        description: 'خدمات التحول الرقمي والاستشارات الابتكارية'
      },
      import: {
        name: 'AY للاستيراد والتصدير',
        description: 'حلول التجارة العالمية والتجارة الدولية'
      },
      tours: {
        name: 'جولات AY ماليزيا',
        description: 'تجارب سياحية وسفر متميزة في ماليزيا'
      }
    },
    // Contact
    contact: {
      title: 'اتصل',
      titleHighlight: 'بنا',
      subtitle: 'مستعد لتشكيل المستقبل معاً؟ تواصل مع فريقنا',
      getInTouch: 'تواصل معنا',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      address: 'العنوان',
      website: 'الموقع الإلكتروني',
      followUs: 'تابعنا',
      businessHours: 'ساعات العمل',
      monday: 'الاثنين - الجمعة',
      saturday: 'السبت',
      sunday: 'الأحد',
      closed: 'مغلق',
      yourName: 'اسمك',
      yourEmail: 'بريدك الإلكتروني',
      yourMessage: 'رسالتك'
    },
    // News
    news: {
      title: 'آخر',
      titleHighlight: 'الأخبار',
      subtitle: 'ابق محدثاً بآخر ابتكاراتنا وإنجازاتنا',
      noNews: 'لا توجد أخبار بعد',
      noNewsDesc: 'تحقق قريباً للحصول على آخر التحديثات من مجموعة AY.',
      by: 'بواسطة'
    },
    // Loading Messages
    loading: {
      home: 'جاري تحميل واجهة الرئيسية...',
      sectors: 'جاري الوصول إلى قطاعات الأعمال...',
      strategy: 'جاري تحليل البيانات الاستراتيجية...',
      services: 'جاري تهيئة وحدات الخدمات...',
      clients: 'جاري الاتصال بقاعدة بيانات العملاء...',
      about: 'جاري استرداد معلومات الشركة...',
      contact: 'جاري إنشاء رابط الاتصال...',
      news: 'جاري مزامنة تغذية الأخبار...'
    }
  }
}

export const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('ay-group-language')
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage)
      setIsRTL(savedLanguage === 'ar')
    }
  }, [])

  useEffect(() => {
    // Update document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = language
    
    // Save language preference
    localStorage.setItem('ay-group-language', language)
  }, [language, isRTL])

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage)
    setIsRTL(newLanguage === 'ar')
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return (
    <LocalizationContext.Provider value={{
      language,
      isRTL,
      switchLanguage,
      t,
      translations: translations[language]
    }}>
      {children}
    </LocalizationContext.Provider>
  )
}

