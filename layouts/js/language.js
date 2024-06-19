const translation = {
  en: {
    header_contact: 'Contact Us',
    hero_title: 'Empowering Manufacturing in Southeast Asia to Grow',
    hero_subtitle:
      'We help you get more orders while improving your factory performance and business easily.',
    hero_contactus: 'Contact Us',
    problem_caption: 'Problem',
    problem_title:
      'Are you looking for buyers for your factory? Do you want to expand and diversify your buyers?',
    problem_description:
      'Velochain is dedicated to helping manufacturers thrive in a competitive industrial sector by securing more contracts while making it easier to optimize your factory performance.',
    solution_caption: 'Solution',
    solution_product1_title: 'Hundreds of buyers are waiting for you!',
    solution_product1_description:
      'We have potential contracts from various buyers that you can get with large contract values ​​after you upgrade or improve factory performance, such as:',
    solution_product1_subdesc_1:
      'Optimization or replacement of production machines with more energy efficient machines',
    solution_product1_subdesc_2: 'Solar panel installation',
    solution_product1_subdesc_3:
      'Replacement of raw materials with more environmentally friendly sources',
    solution_product2_title: 'Optimization of factory performance',
    solution_product2_description:
      'We enable you to easily perform necessary factory performance upgrades. We help you assess, recommend necessary repairs, and help you find alternative financing.',
    solution_product2_tag:
      '*Improving factory performance can include optimizing or replacing machines, installing solar panels, replacing raw materials',
    contactus_title: 'Contact Us',
    contactus_subtitle: 'Lets work together! Contact us to get started',
    contactus_name: 'Your Name',
    contactus_email: 'Your Email',
    contactus_company: 'Your Company',
    contactus_position: 'Your Position',
    contactus_ManufacturingSector: 'Manufacturing Sector',
    contactus_phone: 'Your Phone Number',
    contactus_sendus: 'Send Us',
  },
  id: {
    header_contact: 'Hubungi Kami',
    hero_title: 'Memberdayakan Manufaktur di Asia Tenggara untuk Berkembang ',
    hero_subtitle:
      'Kami membantu Anda mendapatkan lebih banyak pesanan sambil meningkatkan performa dan bisnis pabrik Anda dengan mudah.',
    hero_contactus: 'Hubungi Kami',
    problem_caption: 'Masalah',
    problem_title:
      'Apakah Anda mencari buyer untuk pabrik Anda? Apakah Anda ingin memperluas dan mendiversifikasi buyer Anda?',
    problem_description:
      'Velochain berdedikasi untuk membantu manufaktur untuk berkembang di tengah sektor industri yang kompetitif dengan mendapatkan lebih banyak kontrak sambil memudahkan optimisasi performa pabrik Anda. ',
    solution_caption: 'Solusi',
    solution_product1_title: 'Ratusan buyer menunggu Anda!',
    solution_product1_description:
      'Kami memiliki kontrak-kontrak potensial dari berbagai buyer yang bisa Anda dapatkan dengan nilai kontrak yang besar setelah Anda melakukan upgrade atau peningkatan performa pabrik seperti:',
    solution_product1_subdesc_1:
      'Optimalisasi atau penggantian mesin produksi dengan mesin yang lebih hemat energi',
    solution_product1_subdesc_2: 'Pemasangan panel surya',
    solution_product1_subdesc_3:
      'Penggantian bahan baku dengan sumber yang lebih ramah lingkungan ',
    solution_product2_title: 'Optimalisasi Performa Pabrik',
    solution_product2_description:
      'Kami memungkinkan Anda melakukan peningkatan perfroma pabrik yang diperlukan dengan mudah. Kami membantu Anda menilai, merekomendasikan perbaikan yang diperlukan, dan membantu Anda menemukan pembiayaan alternatif. ',
    solution_product2_tag:
      '*Peningkatan performa pabrik ini dapat mencakup optimalisasi atau penggantian mesin, pemasangan panel surya, penggantian bahan baku',
    contactus_title: 'Hubungi Kami',
    contactus_subtitle: 'Mari bekerjasama! Hubungi kami untuk mulai',
    contactus_name: 'Nama Anda',
    contactus_email: 'Email Anda',
    contactus_company: 'Perusahaan Anda',
    contactus_position: 'Posisi Anda',
    contactus_ManufacturingSector: 'Sektor Manufaktur',
    contactus_phone: 'Nomor Telephone Anda',
    contactus_sendus: 'Kirimkan',
  },
};

const languageSelectop = document.querySelector('select');
let h1 = document.getElementById('h1');

languageSelectop.addEventListener('change', (event) => {
  setLanguage(event.target.value);
});

const setLanguage = (language) => {
  if (language == 'en') {
    header_contact.innerText = translation.en.header_contact;
    hero_title.innerText = translation.en.hero_title;
    hero_subtitle.innerText = translation.en.hero_subtitle;
    hero_contactus.innerText = translation.en.hero_contactus;
    problem_caption.innerText = translation.en.problem_caption;
    problem_title.innerText = translation.en.problem_title;
    problem_description.innerText = translation.en.problem_description;
    solution_caption.innerText = translation.en.solution_caption;
    solution_product1_title.innerText = translation.en.solution_product1_title;
    solution_product1_description.innerText =
      translation.en.solution_product1_description;
    solution_product1_subdesc_1.innerText =
      translation.en.solution_product1_subdesc_1;
    solution_product1_subdesc_2.innerText =
      translation.en.solution_product1_subdesc_2;
    solution_product1_subdesc_3.innerText =
      translation.en.solution_product1_subdesc_3;
    solution_product2_title.innerText = translation.en.solution_product2_title;
    solution_product2_description.innerText =
      translation.en.solution_product2_description;
    solution_product2_tag.innerText = translation.en.solution_product2_tag;
    contactus_title.innerText = translation.en.contactus_title;
    contactus_subtitle.innerText = translation.en.contactus_subtitle;
    contactus_name.innerText = translation.en.contactus_name;
    contactus_email.innerText = translation.en.contactus_email;
    contactus_company.innerText = translation.en.contactus_company;
    contactus_position.innerText = translation.en.contactus_position;
    contactus_ManufacturingSector.innerText =
      translation.en.contactus_ManufacturingSector;
    contactus_phone.innerText = translation.en.contactus_phone;
    contactus_sendus.innerText = translation.en.contactus_sendus;
  } else if (language == 'id') {
    header_contact.innerText = translation.id.header_contact;
    hero_title.innerText = translation.id.hero_title;
    hero_subtitle.innerText = translation.id.hero_subtitle;
    hero_contactus.innerText = translation.id.hero_contactus;
    problem_caption.innerText = translation.id.problem_caption;
    problem_title.innerText = translation.id.problem_title;
    problem_description.innerText = translation.id.problem_description;
    solution_caption.innerText = translation.id.solution_caption;
    solution_product1_title.innerText = translation.id.solution_product1_title;
    solution_product1_description.innerText =
      translation.id.solution_product1_description;
    solution_product1_subdesc_1.innerText =
      translation.id.solution_product1_subdesc_1;
    solution_product1_subdesc_2.innerText =
      translation.id.solution_product1_subdesc_2;
    solution_product1_subdesc_3.innerText =
      translation.id.solution_product1_subdesc_3;
    solution_product2_title.innerText = translation.id.solution_product2_title;
    solution_product2_description.innerText =
      translation.id.solution_product2_description;
    solution_product2_tag.innerText = translation.id.solution_product2_tag;
    contactus_title.innerText = translation.id.contactus_title;
    contactus_subtitle.innerText = translation.id.contactus_subtitle;
    contactus_name.innerText = translation.id.contactus_name;
    contactus_email.innerText = translation.id.contactus_email;
    contactus_company.innerText = translation.id.contactus_company;
    contactus_position.innerText = translation.id.contactus_position;
    contactus_ManufacturingSector.innerText =
      translation.id.contactus_ManufacturingSector;
    contactus_phone.innerText = translation.id.contactus_phone;
    contactus_sendus.innerText = translation.id.contactus_sendus;
  }
};
