const nav = {
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
      name: 'Network',
      icon: 'BarChart',
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
      icon: 'MapPin',
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
  ],
};
export default nav;