// gitprofile.config.js

const config = {
  github: {
    username: 'zecky-dev', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'zekeriya-donmez',
    twitter: 'ZekicanDonmez',
    mastodon: '',
    facebook: '',
    instagram: 'zekican_donmez',
    youtube: 'ZeckyDev', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'zkcndnmez',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'zkcndnmz@gmail.com',
  },
  resume: {
    fileUrl:
      'https://doc-14-8g-prod-01-apps-viewer.googleusercontent.com/viewer2/prod-01/pdf/5or7jqqpnmb0l4qmtbgmvs215r9jpe6n/9ept4npia28gdq08kbd331onvjvllch3/1691067375000/3/102161627059726115996/APznzaY54Zvs-lokJpWnceffzlsN-42Myw6DppaQ6tmostyLq7JgzVci19rjL7I3JUJR0h-BxkL4wQnpfTC5jyK3K1LpvI5DL_jR722SXG-FTtqqAhOQiiTN0B8XGMVkWhO0zity8OKFXJAUnODBQOOmmbencgpVnJDhwLN3gJJ_UNi8MyNKMBfHQgDcZHLkGykT1TGz8Hb8cQQsMofmWVMFFXfUY2qnMLi4pKXGUwa6YozOMNgM6idVNaOtPhV5yZ0NK_rZ7i9T0GM3BnJB4JxwkMwpz1P05n8K2U-vtu0CN3KackkEEDcveXDhMLpexGeGmQ90a8rajljm1gJmYlSC_eoFFqtJuSSdogBsryQuJ_Q9m1TKfzLDbW7H3haTdtNIW52PBwn4VX3p6Yq9eSKKfySwYdSR_Q==?authuser=0&nonce=63s6ouql5ohju&user=102161627059726115996&hash=a0sq6n9d3nuo2u6mopdqhngcs1jfimtk', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'React Native',
    'Kotlin',
    'Java',
    'Javascript',
    'MySQL',
    'Android',
    'Figma',
    'Git',
  ],
  experiences: [
    
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Suleyman Demirel University',
      degree: 'Degree',
      from: '2020',
      to: '2025',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'zkcndnmez', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
