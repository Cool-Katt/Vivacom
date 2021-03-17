export default {
  top: [
    {
      name: 'Home',
      url: '/home',
      icon: 'Home',
    },
    {
      divider: true,
    },
    {
      name: 'MSISDN',
      icon: 'Smartphone',
      children: [
        {
          name: 'Daily',
          url: '/msisdn/daily',
        },
        {
          name: 'Monthly',
          url: '/msisdn/monthly',
        },
      ],
    },
    {
      name: 'Network',
      icon: 'GitBranch',
      children: [
        {
          name: 'Daily',
          url: '/network/daily',
        },
        {
          name: 'Monthly',
          url: '/network/monthly',
        },
      ],
    },
    {
      name: 'Region',
      icon: 'Globe',
      children: [
        {
          name: 'Daily',
          url: '/region/daily',
        },
        {
          name: 'Monthly',
          url: '/region/monthly',
        },
      ],
    },
    {
      divider: true,
    },
    /*{
      name: 'Go to Google',
      url: 'https://google.com',
      icon: 'Link',
      external: true,
      target: '_blank',
      badge: {
        text: 'CLICK ME',
      },
    }*/
  ],
  bottom: [
    {
      name: 'About',
      url: '/widget',
      icon: 'Gitlab',
    },
    /*{
      name: 'Get Vibe',
      url: 'https://github.com/NiceDash/Vibe',
      icon: 'GitHub',
      external: true,
      target: '_blank',
    },*/
  ],
};
