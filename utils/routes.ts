export const routes = [
  { name: 'Home', path: '/' },
  { name: 'Vehicles', path: '/evs' },
  {
    name: 'Brands',
    path: '#',
    children: [
      { name: 'All', path: '/brands' },
      { name: 'Tesla', path: '/brands/tesla' },
      { name: 'Geely', path: '/brands/geely' },
      { name: 'Zeekr', path: '/brands/zeekr' },
      { name: 'Toyota', path: '/brands/toyota' },
      { name: 'BYD', path: '/brands/byd' },
    ],
  },
  { name: 'Other Products', path: '/other-products' },
  { name: 'About TADA', path: '/about' },
  { name: 'Contacts', path: '/contacts' },
];